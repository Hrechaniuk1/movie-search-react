import { useId } from "react";

import MovieList from "../../components/MovieList/MovieList";

export default function HomePage({ data, error, onChange, value }) {
    const id = useId()

    function changeHandler(event) {
        onChange(event.target.value)
    }

    return (
        <div>
            <h1>Trending today</h1>
            <label htmlFor={id}>Most popular for the last:</label>
            <select name="period" id={id} value={value} onChange={changeHandler}>
                <option value="day">Day</option>
                <option value="week">Week</option>
            </select>
            {!error ? <MovieList data={data}></MovieList> : <p>Oops</p>}
        </div>
    )
}