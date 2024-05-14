import { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route, NavLink, useSearchParams } from "react-router-dom";


import { fetchTrends, fetchByName } from './fetch/fetch'
import css from './App.module.css'

const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const MoviePage = lazy(() => import("./pages/MoviesPage/MoviesPage"))
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage/MovieDetailsPage"))
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'))
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'))
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"))
const Loading = lazy(() => import('./components/Loading/Loading'))

// ------------------------------------------------------------------------

export default function App() {

  const [searchParams, setSearchParams] = useSearchParams()
  const mainParam = searchParams.get('qwery')
  const [films, setFilms] = useState([])
    const [trends, setTrends] = useState([])
  const [period, setPeriod] = useState('day')
  const [keyWord, setKeyWord] = useState(() => {if(mainParam){return mainParam} return ''})
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [noFilm, setNoFilm] = useState(false)
  
  // ----for Movie Page

  function submitHandler(data) {
    setKeyWord(data.search.trim())
    setSearchParams({ qwery: data.search.trim()})
  }
  
  function movieClickHandler() {
    setFilms([])
    setNoFilm(false)
    localStorage.removeItem('keyword')
  }

  useEffect(() => {
    async function getInfo() {
      if (keyWord) {
        try {
          setLoading(true)
            setFilms([])
            setError(false)
            const data = await fetchByName(keyWord)
          setFilms(data.data.results)
          data.data.results.length === 0 && setNoFilm(true)
          setLoading(false)
          localStorage.setItem('keyword', JSON.stringify({ search: `${keyWord}`}))
            } catch (error) {
          setError(true)
          setLoading(false)
            }
          }
        }
        getInfo()
    }, [keyWord])
  
  // -------for Home Page

  function onChange(data) {
    setPeriod(data)
  }

  useEffect(() => {
    async function getTrendFilms() {
      setTrends([])
      const data = await fetchTrends(period)
      setTrends(data.data.results)
    }
    getTrendFilms()
  },[period])


  return (
    <div>
      <nav className={css.mainNav} >
        <NavLink className={css.btn} to='/'>Home</NavLink>
        <NavLink onClick={movieClickHandler} className={css.btn} to='/movies'>Movies</NavLink>
      </nav>
      <Suspense fallback={<Loading></Loading>}>
      <Routes>
        <Route path='/' element={<HomePage data={trends} error={error} onChange={onChange} value={period} ></HomePage>}></Route>
        <Route path='/movies' element={<MoviePage data={films} onSubmit={submitHandler} error={error} loading={loading} noFilm={noFilm}></MoviePage>}></Route>
        <Route path='/movies/:movieId' element={<MovieDetailsPage></MovieDetailsPage>}>
          <Route path='cast' element={<MovieCast></MovieCast>}></Route>
          <Route path='reviews' element={<MovieReviews></MovieReviews>}></Route>
        </Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
      </Suspense>
    </div>
  )
}