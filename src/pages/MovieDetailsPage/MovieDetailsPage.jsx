import { useState, useEffect } from "react"
import {fetchFullInfo} from '../../fetch/fetch'



export default function MovieDetailsPage({ data }) {
    
    const [id, setId] = useState('')
    const [error, setError] = useState(false)
     const [fullInfo, setFullInfo] = useState([])

      useEffect(() => {
    async function getFilm() {
      if (id) {
        try {
          setError(false)
          const data = await fetchFullInfo(id)
          setFullInfo(data.data)
        } catch (error) { setError(true) }
      }

      
    }
    getFilm()
  }, [id])

    return (
        <div>
            <button>Go back</button>
            <div>
                <img src={fullInfo.backdrop_path} alt={data?.title} />
                <h3>{fullInfo?.title}</h3>
                <p>Popularity: {fullInfo?.popularity}</p>
                <h4>Overview</h4>
                <p>{fullInfo.overview}</p>
                <h4>Genre</h4>
                <p>{fullInfo?.genres?.join()}</p>
            </div>
        </div>
    )
}