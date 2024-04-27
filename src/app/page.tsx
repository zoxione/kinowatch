import { MovieCarousel } from "@/components/movie-carousel"
import { MovieList } from "@/components/movie-list"
import { movieAPI } from "@/entities/movie"
import { Badge } from "@/shared/ui/bagde"

interface PageProps {}

export default async function Page({}: PageProps) {
  const popularMovies = (await movieAPI.getAllTrending()).results || []
  const recentMovies = (await movieAPI.getAllRecent()) || []

  return (
    <main className="container flex-1 space-y-8 py-8">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold tracking-tight">В тренде</h1>
          <Badge>{popularMovies.length}</Badge>
        </div>
        <MovieCarousel movies={popularMovies} />
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold tracking-tight">Новинки</h1>
          <Badge>{recentMovies.length}</Badge>
        </div>
        <MovieList movies={recentMovies} />
      </div>
    </main>
  )
}
