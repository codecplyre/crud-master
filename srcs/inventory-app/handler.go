package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	sqlc "inventory/db/sqlc"

	"github.com/google/uuid"
)

// CreateMovieHandler returns a handler function for creating a new movie.
func (server *Server) CreateMovieHandler() func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodPost {
			http.Error(w, "Only POST method allowed", http.StatusMethodNotAllowed)
			return
		}
		if r.Header.Get("Content-Type") != "application/json" {
			http.Error(w, "Content-Type must be application/json", http.StatusUnsupportedMediaType)
			return
		}
		var movie sqlc.CreateMovieParams
		if err := json.NewDecoder(r.Body).Decode(&movie); err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}

		movie.ID = uuid.New()
		movies, err := server.Query.CreateMovie(r.Context(), movie)
		if err != nil {
			http.Error(w, fmt.Sprintf("Error creating movie: %v", err), http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(movies)
	}
}
