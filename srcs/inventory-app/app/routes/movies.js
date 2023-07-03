import movies from '../controllers/movies.js';
export default (app, db) => {
    const controller = movies(db);
    app.get('/api/movies', controller.getMovies);
    app.get('/api/movies?title=[name]', controller.getMoviesByTitle);
    app.post('/api/movies', controller.createMovie);
    app.delete('/api/movies', controller.deleteAllMovie);
    app.get('/api/movies/:id', controller.getMovieById);
    app.put('/api/movies/:id', controller.updateMovie);
    app.delete('/api/movies/:id', controller.deleteMovie);
};
