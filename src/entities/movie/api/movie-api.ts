import { GetAllQueryFilter, GetAllQueryReturn, GetAllTrendingReturn, MovieFullInfo, MovieShortInfo } from "./types"

class MovieAPI {
  private baseUrl: string = ""

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  /**
   * Получение всех популярных фильмов
   */
  async getAllTrending(): Promise<GetAllTrendingReturn> {
    const res = await fetch(`${this.baseUrl}/trending`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })

    if (!res.ok) {
      throw new Error(`Failed to get all popular movies: ${res.statusText}`)
    }

    return await res.json()
  }

  /**
   * Получение всех последних фильмов
   */
  async getAllRecent(): Promise<MovieShortInfo[]> {
    const res = await fetch(`${this.baseUrl}/recent-movies`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })

    if (!res.ok) {
      throw new Error(`Failed to get all recent movies: ${res.statusText}`)
    }

    return await res.json()
  }

  /**
   * Получение всех фильмов
   */
  async getAllQuery({ query, page }: GetAllQueryFilter): Promise<GetAllQueryReturn> {
    const res = await fetch(`${this.baseUrl}/${query}?page=${page || 1}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })

    if (!res.ok) {
      throw new Error(`Failed to get all query movies: ${res.statusText}`)
    }

    return await res.json()
  }

  /**
   * Получение одного фильма
   */
  async getOne(id: string): Promise<MovieFullInfo> {
    const res = await fetch(`${this.baseUrl}/info?id=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })

    if (!res.ok) {
      throw new Error(`Failed to get one movie: ${res.statusText}`)
    }

    return await res.json()
  }
}

export const movieAPI = new MovieAPI(`${process.env.API_URL}/movies/flixhq`)
