import axios from "axios"

const key = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTUwODc5MjA4ZDI1MTcxOTRkNzViNmUyZGEwYmJlYiIsInN1YiI6IjY2M2QxNzU2MjY0MDg2Y2VmMTAxYjg3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J1-qgB87wdrqq3h10abR5w4Xr0D_Jd55U315i6IQZ24'
const headers = {
        Authorization: key
    }


const BASE_URL = 'https://api.themoviedb.org/3/'

export async function fetchTrends(period) {
    const endPoint = `trending/movie/${period}`
    const url = `${BASE_URL}${endPoint}`
    const params = {
        language: 'en-US'
    }

    return await axios.get(url, {headers, params })

}


export async function fetchByName(name) {
    const endPoint = 'search/movie'
    const url = `${BASE_URL}${endPoint}`
    const params = {
        query: name,
        include_adult: 'false',
        language: 'en-US',
        page: '1'
    }

    return await axios.get(url, {headers, params })


}

export async function fetchActors(id) {
    const endPoint = `movie/${id}/credits`
    const url = `${BASE_URL}${endPoint}`
    const params = {
        language: 'en-US'
    }
    return await axios.get(url, {headers, params })

}

export async function fetchReviews(id) {
    const endPoint = `movie/${id}/reviews`
    const url = `${BASE_URL}${endPoint}`
    const params = {
        language: 'en-US',
        page: '1',
    }

    return await axios.get(url, {headers, params })

}

export async function fetchFullInfo(id) {
    const endPoint = `movie/${id}`
    const url = `${BASE_URL}${endPoint}`
    const params = {
        language: 'en-US'
    }

    return await axios.get(url, {headers, params })


}