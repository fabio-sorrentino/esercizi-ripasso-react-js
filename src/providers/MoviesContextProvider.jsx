import { useState, useEffect } from 'react'
import MoviesContext from '../store/movies-context'

function loadFavoriteIds() {
  try {
    return JSON.parse(localStorage.getItem('favoriteIds')) ?? []
  } catch {
    return []
  }
}

export default function MoviesContextProvider({ children }) {
  const [moviesList, setMoviesList] = useState([])
  const [favoriteIds, setFavoriteIds] = useState(loadFavoriteIds)
  const [searchTerm, setSearchTerm] = useState('')
  const [error, setError] = useState(null)
  const [loading, setIsLoading] = useState(false)

  const moviesWithFavorite = moviesList.map((el) => ({
    ...el,
    favorite: favoriteIds.includes(el.id),
  }))

  const filteredMovies = moviesWithFavorite.filter((el) =>
    el.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )
  const favoriteMovies = filteredMovies.filter((el) => el.favorite)

  function handleFavourites(id) {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id],
    )
  }

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true)
        const res = await fetch('https://api.themoviedb.org/3/movie/popular', {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
          },
        })

        if (!res.ok) {
          const errorData = await res.json()
          throw new Error(errorData.status_message)
        }

        const data = await res.json()
        setMoviesList(data.results)
      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(false)
      }
    }
    getMovies()
  }, [])

  useEffect(() => {
    localStorage.setItem('favoriteIds', JSON.stringify(favoriteIds))
  }, [favoriteIds])

  const ctx = {
    moviesList,
    setMoviesList,
    favoriteMovies,
    handleFavourites,
    searchTerm,
    setSearchTerm,
    filteredMovies,
    loading,
    error,
  }

  return <MoviesContext.Provider value={ctx}>{children}</MoviesContext.Provider>
}