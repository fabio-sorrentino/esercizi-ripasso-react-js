import { useState } from "react";
import Container from "./components/Container";
import MovieList from "./components/MovieList";
import { movies as initialMovies } from "./data/movies";
import './App.css';
import SearchBar from "./components/SearchBar";

function App() {
  const [movies, setMovies] = useState(initialMovies);

  function handleToggleFavorite(id) {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id
          ? { ...movie, favorite: !movie.favorite }
          : movie
      )
    );
  }

  return (
    <>
    <SearchBar/>
      <Container>
        <MovieList movies={movies} onToggleFavorite={handleToggleFavorite} />
      </Container>
    </>
  );
}

export default App;