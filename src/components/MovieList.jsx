import MovieCard from './MovieCard'

export default function MovieList({ movies, onClick }) {
  if (!movies || movies.length === 0) return <p>Nessun film disponibile</p>

  return (
    <div className='grid'>
      {movies.map((el) => (
        <MovieCard
          key={el.id}
          id={el.id}
          title={el.title}
          year={el.release_date}
          poster={el.poster_path}
          favorite={el.favorite}
          watched={el.watched}
          onClick={onClick}
        />
      ))}
    </div>
  )
}