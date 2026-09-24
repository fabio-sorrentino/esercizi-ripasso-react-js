const IMG_BASE = 'https://image.tmdb.org/t/p/w500'

export default function MovieCard({ id, title, year, poster, genre, watched, favorite, onClick }) {
  return (
    <article className={favorite ? 'movie-card--favorite' : ''}>
      <button onClick={() => onClick(id)} className='fav-list'>
        {favorite ? '★' : '☆'}
      </button>
      <div>
        <h3>{title}</h3>
        <p>{year ? year.slice(0, 4) : 'N/D'}</p>
      </div>
      {poster ? (
        <img src={`${IMG_BASE}${poster}`} alt={`${title} poster`} />
      ) : (
        <div className='no-poster'>Nessuna immagine</div>
      )}
      <hr />
      <div className='info'>
        {watched ? '✅ Visto' : '👀 Da vedere'}
        {genre && <span className='badge'>{genre}</span>}
      </div>
    </article>
  )
}