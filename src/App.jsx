import Container from "./components/Container"
import MovieCard from "./components/MovieCard"
import './App.css'

function App() {
  
  return (
    <>
      <Container>
        <MovieCard title='Odissea' year='2026' poster="https://cinemafiume.it/wp-content/uploads/2026/05/4x5_ODY_crt.OptimisedPoster_crn.HelmetOneSheet_siz.1080x1350_cta.Release-Date_cou.IT_Italian.des_-600x750.jpg" />
        <MovieCard title='Avengers Endgame' year='2019' poster="https://pad.mymovies.it/filmclub/2018/12/029/locandina.jpg" />
        <MovieCard title='Avatar Fuoco e Cenere' year='2025' poster="https://www.today.it/~shared/images/cinema/locandine/avatar-fuoco-e-cenere-1htdoj.jpg" />
        <MovieCard title='Cime Tempestose' year='2026' poster="https://m.media-amazon.com/images/M/MV5BNzU4MmY3MzUtN2VkZC00MjNlLThjY2UtZTJkMjg0NjRlNjVkXkEyXkFqcGc@._V1_.jpg" />
      </Container>
    </>
  )
}

export default App
