import { useEffect, useState } from "react";
import { Routes, Route, NavLink, useSearchParams } from "react-router-dom";


import { fetchTrends, fetchByName } from './fetch/fetch'
import HomePage from './pages/HomePage/HomePage'
import MoviePage from "./pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import MovieCast from './components/MovieCast/MovieCast'
import MovieReviews from './components/MovieReviews/MovieReviews'
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

// ------------------------------------------------------------------------

export default function App() {

  const [searchParams, setSearchParams] = useSearchParams()
  const mainParam = searchParams.get('qwery')
  const [films, setFilms] = useState([])
    const [trends, setTrends] = useState([])
  const [period, setPeriod] = useState('day')
  const [keyWord, setKeyWord] = useState(() => {if(mainParam){return mainParam} return ''})
  const [error, setError] = useState(false)
  
  // ----for Movie Page

  function submitHandler(data) {
    setKeyWord(data.search.trim())
    setSearchParams({ qwery: data.search.trim()})
    }

  useEffect(() => {
    async function getInfo() {
      if (keyWord) {
        try {
            setError(false)
            const data = await fetchByName(keyWord)
            setFilms(data.data.results)
            } catch (error) {
            setError(true)
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
      const data = await fetchTrends(period)
      setTrends(data.data.results)
    }
    getTrendFilms()
  },[period])


  return (
    <div>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/movies'>Movies</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage data={trends} error={error} onChange={onChange} value={period} ></HomePage>}></Route>
        <Route path='/movies' element={<MoviePage data={films} onSubmit={submitHandler} error={error}></MoviePage>}></Route>
        <Route path='/movies/:movieId' element={<MovieDetailsPage></MovieDetailsPage>}>
          <Route path='cast' element={<MovieCast></MovieCast>}></Route>
          <Route path='reviews' element={<MovieReviews></MovieReviews>}></Route>
        </Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>

    </div>
  )
}