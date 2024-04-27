import { MovieCard, MovieShortInfo } from "@/entities/movie"

interface MovieListProps {
  movies: MovieShortInfo[]
}

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <div className="grid grid-cols-auto-fit justify-items-center gap-5">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} className="w-full" />
      ))}
    </div>
  )
}

export { MovieList }
