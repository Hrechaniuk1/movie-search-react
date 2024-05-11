import MovieList from "../../components/MovieList/MovieList";

export default function HomePage({data, error}) {
    return (
        <div>
            <h1>Trending today</h1>
            {!error ? <MovieList data={data}></MovieList> : <p>Oops</p>}
        </div>
    )
}