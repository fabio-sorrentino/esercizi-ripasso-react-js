import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
    return (
        <>
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    title={movie.title}
                    year={movie.year}
                    poster={movie.poster}
                    genre={movie.genre}
                    watched={movie.watched}
                />
            ))}
        </>

    )
}