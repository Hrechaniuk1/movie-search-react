import { useState, useEffect } from "react";

import {fetchActors} from '../../fetch/fetch'
import Actor from "../Actor/Actor";

export default function MovieCast() {
    
    const [id, setId] = useState('')
    const [fullCast, setFullCast] = useState([])
    const [error, setError] = useState(false)

      useEffect(() => {

async function getCast() {
      if (id) {
        try {
          setError(false)
          const data = await fetchActors(id)
          setFullCast(data.data.cast)
        } catch (error) { setError(true) }
      }

    }
    getCast()
  }, [id])

    return (
        <ul>
            {fullCast.map(item => (<li key={item.id}><Actor data={item}></Actor></li>))}
        </ul>
    )
}