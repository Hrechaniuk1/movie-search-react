import SearchBar from '../../components/SearchBar/SearchBar'
import MovieList from '../../components/MovieList/MovieList'
import Loading from '../../components/Loading/Loading'
import css from './MoviesPage.module.css'

export default function MoviePage({data, onSubmit, error, loading}) {

    console.log(data)

    return (
        <div>
            <SearchBar onSubmit={onSubmit}></SearchBar>
            {loading && <Loading></Loading>}
            {!error && <MovieList data={data}></MovieList>}
            {data.length === 0 && <p className={css.noFilm}>No films with such title</p>}
        </div>
    )
}