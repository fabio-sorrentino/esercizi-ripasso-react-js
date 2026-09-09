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

  const [searchTerm,setSearchTerm] = useState("");
  const filteredMovies = movies.filter(movies=> movies.title.includes(searchTerm))

  return (
    <>
    <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
      <Container>
        <MovieList filteredMovies={movies.filter} onToggleFavorite={handleToggleFavorite} />
      </Container>
    </>
  );
}

export default App;