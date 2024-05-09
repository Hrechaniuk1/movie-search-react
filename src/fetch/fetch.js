import axios from "axios"

const key = '7950879208d2517194d75b6e2da0bbeb'
const headers = {
        Authorization: key
    }


const BASE_URL = 'https://api.themoviedb.org/3/'

async function fetchTrends(period) {
    const endPoint = `trending/movie/${period}`
    const url = `${BASE_URL}${endPoint}`
    const params = {
        language: 'en-US'
    }

    const data = await axios.get(url, { params, headers })
    console.log(data)

}

export default fetchTrends

async function fetchByName(name) {
    const endPoint = 'search/movie'
    const url = `${BASE_URL}${endPoint}`
    const params = {
        query: name,
        include_adult: 'false',
        language: 'en-US',
        page: '1'
    }
}

async function fetchActors(id) {
    const endPoint = `movie/${id}/credits`
    const url = `${BASE_URL}${endPoint}`
    const params = {
        language: 'en-US'
    }
}

async function fetchReviews(id) {
    const endPoint = `movie/${id}/reviews`
    const url = `${BASE_URL}${endPoint}`
    const params = {
        language: 'en-US',
        page: '1',
    }
}

async function fetchFullInfo(id) {
    const endPoint = `movie/${id}`
    const url = `${BASE_URL}${endPoint}`
    const params = {
        language: 'en-US'
    }
}