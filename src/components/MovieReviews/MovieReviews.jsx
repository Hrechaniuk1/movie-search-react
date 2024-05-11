import { useState, useEffect } from "react";

import {fetchReviews} from '../../fetch/fetch'
import Review from "../Review/Review";


export default function ReviewList() {
    
    const [id, setId] = useState('')
    const [reviews, setReviews] = useState([])
    const [error, setError] = useState(false)

      useEffect(() => {
    async function getReviews() {

      if (id) {
        try {
          setError(false)
          const data = await fetchReviews(id)
          setReviews(data.data.results)
        } catch (error) {setError(true)}
      }

      
    }
    getReviews()
  }, [id])

    return (
        reviews.length !== 0 ? (<ul>
            {reviews.map(item => <li key={item.id}><Review data={item}></Review></li>)}
        </ul>) : <p>No reviews yet</p> 
        
    )
}