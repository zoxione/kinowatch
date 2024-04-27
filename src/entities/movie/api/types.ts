type MovieFullInfo = {
  id: string
  title: string
  url: string
  cover: string
  image: string
  description: string
  type: string
  releaseDate: string
  genres: string[]
  casts: string[]
  tags: string[]
  production: string
  country: string
  duration: string
  rating: string
  recommendations: Pick<MovieFullInfo, "id" | "title" | "image" | "duration" | "type">[]
}

type MovieShortInfo = Pick<MovieFullInfo, "id" | "title" | "url" | "image" | "releaseDate" | "duration" | "type">

type GetAllTrendingReturn = {
  results: MovieShortInfo[]
}

type GetAllQueryFilter = {
  query: string
  page: number
}

type GetAllQueryReturn = {
  currentPage: string
  hasNextPage: boolean
  results: MovieShortInfo[]
}

export type { MovieFullInfo, MovieShortInfo, GetAllTrendingReturn, GetAllQueryFilter, GetAllQueryReturn }
