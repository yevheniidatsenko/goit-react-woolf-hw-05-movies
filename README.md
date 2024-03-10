# Movie Search App

A simple movie search app powered by the themoviedb.org API. Users can explore
popular movies, search for specific movies by keyword, and view detailed
information about each movie including cast information and reviews.

## Routes

- `/`: Home page with a list of popular movies.
- `/movies`: Search for movies by keyword.
- `/movies/:movieId`: Detailed information about a movie.
- `/movies/:movieId/cast`: Cast information for a movie.
- `/movies/:movieId/reviews`: Reviews for a movie.

## API Endpoints

- `/trending/get-trending`: List of popular movies.
- `/search/search-movies`: Search for movies by keyword.
- `/movies/get-movie-details`: Full movie details.
- `/movies/get-movie-credits`: Movie's cast information.
- `/movies/get-movie-reviews`: Reviews for a movie.

## Code Splitting

Implemented asynchronous loading of JavaScript code for better performance.

## Technologies Used

- React
- React Router
- Axios
- CSS
