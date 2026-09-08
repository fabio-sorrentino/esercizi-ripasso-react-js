import Container from "./components/Container"
import MovieList from "./components/MovieList"
import { movies } from "./data/movies"
import { useState } from "react"
import './App.css'

function App() {
  return (
    <>
      <Container>
        <MovieList movies={movies} />
      </Container>
    </>
  )
}

export default App