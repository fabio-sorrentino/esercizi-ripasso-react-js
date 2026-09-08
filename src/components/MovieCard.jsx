export default function MovieCard({ title, year, poster, watched, genre }) {
    return (
        <>
            <article className="card">
                <img src={poster} alt="..." />
                <div className="info">
                    <h1>{title}</h1>
                    <h3>{year}</h3>
                    <p>{watched ? "✅" : "👀"}</p>
                    {genre && <span className="badge">{genre}</span>}
                    <button>☆</button>
                    <button>★</button>
                </div>
            </article>

        </>
    )
}