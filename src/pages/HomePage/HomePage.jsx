import { useId } from "react";

import css from './HomePage.module.css'

import MovieList from "../../components/MovieList/MovieList";

export default function HomePage({ data, error, onChange, value }) {
    const id = useId()

    function changeHandler(event) {
        onChange(event.target.value)
    }

    return (
        <div>
            <h1 className={css.title}>Trending today</h1>
            <div className={css.filter}>
                
            
            <label htmlFor={id}>Most popular for the last:</label>
            <select className={css.filterBox} name="period" id={id} value={value} onChange={changeHandler}>
                <option value="day">Day</option>
                <option value="week">Week</option>
                </select>
                </div>
            {!error ? <MovieList data={data}></MovieList> : <p>Oops</p>}
        </div>
    )
}