const BASE_API = 'https://yts.mx/api/v2/'
export const getSuggestionList = async () => {
  const query = await fetch(`${BASE_API}movie_suggestions.json?movie_id=10`)
  const {data} = await query.json()
  console.log(data)
  return data.movies
}

export const getCategoryList = async () => {
  const query = await fetch(`${BASE_API}list_movies.json`)
  const {data} = await query.json()
  return data.movies
}

export const searchMovie = async (title) => {
  const query = await fetch(`${BASE_API}list_movies.json?limit=1&sort_by=rating&query_term=${title}`)
  const {data} = await query.json()
  return data.movies
}