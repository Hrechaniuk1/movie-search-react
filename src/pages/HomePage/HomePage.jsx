import { useEffect, useState, useId } from "react";

import css from './HomePage.module.css'
import { fetchTrends } from '../../fetch/fetch'
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
    const id = useId()
    const [trends, setTrends] = useState([])
    const [error, setError] = useState(false)
    const [period, setPeriod] = useState(() => {
        const period = localStorage.getItem('period')
        if (period) return period
        return 'day'
    })
    
    useEffect(() => {
        async function getTrendFilms() {
            try {
                setError(false)
            setTrends([])
            const data = await fetchTrends(period)
            setTrends(data.data.results)
            } catch {
                setError(true)
        }
      
    }
    getTrendFilms()
  },[period])


    const delay = 600000

    function changeHandler(event) {
        setPeriod(event.target.value)
        localStorage.setItem('period', event.target.value)
        setTimeout(() => localStorage.removeItem('period'), delay)
    }

    return (
        <div>
            <h1 className={css.title}>Trending today</h1>
            <div className={css.filter}>
                
            
            <label htmlFor={id}>Most popular for the last:</label>
            <select className={css.filterBox} name="period" id={id} value={period} onChange={changeHandler}>
                <option value="day">Day</option>
                <option value="week">Week</option>
                </select>
                </div>
            {!error ? <MovieList data={trends}></MovieList> : <p>Oops</p>}
        </div>
    )
}