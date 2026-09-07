export default function MovieCard({ title, year, poster }) {
    return (
        <>
            <article className="card">
                <img src={poster} alt="..." width={200} />
                <div className="info">
                    <h1>{title}</h1>
                    <h3>{year}</h3>
                </div>
            </article>

        </>
    )
}