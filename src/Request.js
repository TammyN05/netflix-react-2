const key = '3779022c53deed630cdc64374af1748b'

const request = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US`,
    requestTrending: `https://api.themoviedb.org/3/movie/trending?api_key=${key}&language=en-US`,
    requestHorror: `https://api.themoviedb.org/3/movie/horror?api_key=${key}&language=en-US`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcomming?api_key=${key}&language=en-US`
}

export default request