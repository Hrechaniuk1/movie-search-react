import SearchBar from '../../components/SearchBar/SearchBar'
import MovieList from '../../components/MovieList/MovieList'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'

export default function MoviePage({data, onSubmit, error, loading}) {


    return (
        <div>
            <SearchBar onSubmit={onSubmit}></SearchBar>
            {loading && <Loading></Loading>}
            {(data?.length > 0 && !error) ? <MovieList data={data}></MovieList> : <Error></Error>}
        </div>
    )
}