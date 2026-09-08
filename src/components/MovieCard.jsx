export default function MovieCard({ id, title, year, poster, watched, genre, favorite, onToggleFavorite }) {
    return (
        <article className={favorite ? "card card--favorite" : "card"}>
            <img src={poster} alt="..." />
            <div className="info">
                <h1>{title}</h1>
                <h3>{year}</h3>
                <p>{watched ? "✅ Visto" : "👀 Da vedere"}</p>
                {genre && <span className="badge">{genre}</span>}
                <button
                    className={favorite ? "favorite-btn favorite-btn--active" : "favorite-btn"}
                    onClick={() => onToggleFavorite(id)}
                >
                    <span className="star">★</span> Preferito
                </button>
            </div>
        </article>
    );
}