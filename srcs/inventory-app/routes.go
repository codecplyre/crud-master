package main

// RegisterRoutes registers the server's routes.
func (server *Server) RegisterRoutes() {
	server.Mux.HandleFunc("/api/movies", server.CreateMovieHandler())
}
