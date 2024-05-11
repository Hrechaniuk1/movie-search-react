import SearchBar from '../../components/SearchBar/SearchBar'
import MovieList from '../../components/MovieList/MovieList'

export default function MoviePage({data, onSubmit, error}) {


    return (
        <div>
            <SearchBar onSubmit={onSubmit}></SearchBar>
            {(data?.length > 0 && !error) ? <MovieList data={data}></MovieList> : <p>Oops</p>}
        </div>
    )
}