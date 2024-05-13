import { useState, useEffect } from "react"
import { useParams, useLocation, Link, Outlet } from "react-router-dom";

import Error from "../../components/Error/Error";
import { fetchFullInfo } from '../../fetch/fetch'
import css from './MovieDetailsPage.module.css'
import Loading from "../../components/Loading/Loading";



export default function MovieDetailsPage({ data }) {
    
  const { movieId } = useParams()
  const [error, setError] = useState(false)
  const [fullInfo, setFullInfo] = useState([])
  const [loading, setLoading] = useState(false)


  const location = useLocation()
  const goBack = location.state ?? '/movies'

      useEffect(() => {
    async function getFilm() {
      if (movieId) {
        try {
          setLoading(true)
          setFullInfo([])
          setError(false)
          const data = await fetchFullInfo(movieId)
          setLoading(false)
          setFullInfo(data.data)
        } catch (error) { setError(true), setLoading(false) }
      }

      
    }
    getFilm()
  }, [movieId])

  const imgPath = fullInfo.backdrop_path

  const imgUrl = `https://image.tmdb.org/t/p/w500${imgPath}`
  const genresFrom = fullInfo?.genres
  let genres = []

  if (genresFrom) {
    genres = []
    for (const genre of genresFrom) {
    genres.push(genre.name)
  }
  }
  

  return (
    <>
        {!error ? (<div>
        <Link className={css.backBtn} to={goBack}>Go back</Link>
        {loading && <Loading></Loading>}
            <div className={css.filmContainer}>
          {imgPath ? <img className={css.image} src={imgUrl} alt={data?.title} /> : <p className={css.image}>Sadly - no image</p>}
          <div className={css.info}>
                <h3>{fullInfo?.title}</h3>
                <p>Popularity: {fullInfo?.popularity}</p>
                <h4>Overview</h4>
                <p>{fullInfo.overview}</p>
                <h4>Genre</h4>
            {genres.length !== 0 ? <p>{genres.join(", ")}</p> : <p>No information</p>}
            </div>
        </div>
        <ul className={css.linkList}>
          <li className={css.link}><Link className={css.linkTo} to='cast' state={location.state}>Cast</Link></li>
          <li className={css.link}><Link className={css.linkTo} to='reviews' state={location.state}>Reviews</Link></li>
        </ul>
        <Outlet />
      </div>) : <Error></Error>}
      </>
    )
}