import { useState, useEffect } from "react"
import { useParams, useLocation, Link, Outlet } from "react-router-dom";

import Error from "../../components/Error/Error";
import {fetchFullInfo} from '../../fetch/fetch'



export default function MovieDetailsPage({ data }) {
    
  const { movieId } = useParams()
  const [error, setError] = useState(false)
  const [fullInfo, setFullInfo] = useState([])
  const location = useLocation()
  const goBack = location.state ?? '/movies'

      useEffect(() => {
    async function getFilm() {
      if (movieId) {
        try {
          setError(false)
          const data = await fetchFullInfo(movieId)
          setFullInfo(data.data)
        } catch (error) { setError(true) }
      }

      
    }
    getFilm()
  }, [movieId])

  const imgUrl = `https://image.tmdb.org/t/p/w500${fullInfo.backdrop_path}`

  return (
    <>
        {!error ? (<div>
          <Link to={goBack}>Go back</Link>
            <div>
                <img src={imgUrl} alt={data?.title} />
                <h3>{fullInfo?.title}</h3>
                <p>Popularity: {fullInfo?.popularity}</p>
                <h4>Overview</h4>
                <p>{fullInfo.overview}</p>
                <h4>Genre</h4>
                <p>{fullInfo?.genres?.join()}</p>
        </div>
        <ul>
          <li><Link to='cast' state={location.state}>Cast</Link></li>
          <li><Link to='reviews' state={location.state}>Reviews</Link></li>
        </ul>
        <Outlet />
      </div>) : <Error></Error>}
      </>
    )
}