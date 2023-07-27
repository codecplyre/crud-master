package main

import (
	"database/sql"
	"log"
	"net/http"

	sqlc "inventory/db/sqlc"

	_ "github.com/lib/pq"
)

// ServerAddress is the default address where the server listens.
const ServerAddress = ":8080"

// Server represents the CRUD server.
type Server struct {
	Mux   *http.ServeMux
	Query *sqlc.Queries
}

// NewServer creates a new instance of Server.
func NewServer(mux *http.ServeMux, query *sqlc.Queries) *Server {
	return &Server{
		Mux:   mux,
		Query: query,
	}
}

// main is the entry point of the program.
func main() {
	cfg, err := LoadConfig()
	if err != nil {
		log.Fatalf("Error loading configuration: %v", err)
	}
	db, err := sql.Open(cfg.DBDriver, cfg.DBSource)
	if err != nil {
		log.Fatalf("cannot connect to db: %v", err)
	}
	defer db.Close()
	if err = db.Ping(); err != nil {
		log.Fatalf("cannot ping db: %v", err)
	}
	mux := http.NewServeMux()
	loggedMux := LoggingMiddleware(mux)
	queries := sqlc.New(db)
	server := NewServer(mux, queries)
	server.RegisterRoutes()

	log.Printf("Server is running on %s", ServerAddress)
	if err = http.ListenAndServe(ServerAddress, loggedMux); err != nil {
		log.Fatalf("Server error: %v", err)
	}
}
