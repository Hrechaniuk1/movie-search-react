import { useEffect, useState } from "react";
import {fetchTrends, fetchByName} from './fetch/fetch'

import HomePage from './pages/HomePage/HomePage'
import MoviePage from "./pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import MovieCast from './components/MovieCast/MovieCast'
import MovieReviews from './components/MovieReviews/MovieReviews'
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

export default function App() {

  const [films, setFilms] = useState([])
  const [keyWord, setKeyWord] = useState('')
  const [error, setError] = useState(false)
  
  // ----for Movie Page

  function submitHandler(data) {
        setKeyWord(data.search.trim())
    }

  useEffect(() => {
    async function getInfo() {
      if (keyWord) {
        try {
                setError(false)
                const data = await fetchByName(keyWord)
          setFilms(data.data.results)
          console.log(data.data.results)
        } catch (error) {
          setError(true)
              }
                
        }
            
        }
        getInfo()
    }, [keyWord])
  
  // -------for Home Page

  const [trends, setTrends] = useState([])

  useEffect(() => {
    async function getTrendFilms() {
      const data = await fetchTrends('day')
      setTrends(data.data.results)
    }
    getTrendFilms()
  },[])


  return (
    <div>
      {0 > 1 && <HomePage
        data={trends}
        error={error}
      ></HomePage>}
      {0 > 1 && <MoviePage
        data={films}
        onSubmit={submitHandler}
        error={error}
      ></MoviePage>}
      {0 > 1 && <MovieDetailsPage
      ></MovieDetailsPage>}
      {0 > 1 && <MovieCast></MovieCast>}
      {0 > 1 && <MovieReviews></MovieReviews>}
      {0>1 && <NotFoundPage></NotFoundPage>}
    </div>
  )
}