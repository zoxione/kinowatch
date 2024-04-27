import { MovieList } from "@/components/movie-list"
import { movieAPI } from "@/entities/movie"
import { Badge } from "@/shared/ui/bagde"
import { prettyDate } from "@/shared/utils/pretty-date"
import { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"

interface PageProps {
  params: { type: string; id: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const type = params.type
  const id = params.id
  let movie
  try {
    movie = await movieAPI.getOne(`${type}/${id}`)
  } catch {
    notFound()
  }
  return {
    title: movie.title ?? "",
    description: movie.description ?? "",
    openGraph: {
      title: `${movie.title ?? ""} | Kinowatch`,
      description: movie.description ?? "",
      url: `${process.env.APP_URL}/${movie.id}`,
      images: [movie.image !== "" ? movie.image : `${process.env.APP_URL}/icon.png`],
    },
  }
}

export const revalidate = 60

export default async function Page({ params }: PageProps) {
  const type = params.type
  const id = params.id
  let movie
  try {
    movie = await movieAPI.getOne(`${type}/${id}`)
  } catch {
    notFound()
  }

  return (
    <main className="container flex-1 space-y-8 py-8">
      <div className="relative h-96 overflow-hidden">
        <Image
          src={movie.cover}
          alt={movie.title}
          fill
          className="object-cover group-hover:scale-105 duration-200 rounded-lg"
        />
      </div>
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-1">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">{movie.title}</h1>
          <Badge variant="default" className="text-xl">
            {movie.rating ? movie.rating : "NR"}
          </Badge>
        </div>
        <div className="flex flex-wrap gap-2">
          {movie.duration ? <Badge variant="secondary">{movie.duration}</Badge> : null}
          {movie.releaseDate ? <Badge variant="secondary">{prettyDate(movie.releaseDate)}</Badge> : null}
          {movie.production ? <Badge variant="secondary">{movie.production}</Badge> : null}
          {movie.country ? <Badge variant="secondary">{movie.country}</Badge> : null}
        </div>
      </div>
      <div className="border rounded-md p-4 space-y-2">
        <p>{movie.description}</p>
        <div className="flex flex-wrap gap-2">
          {movie.genres.map((genre) => (
            <Badge key={genre} variant="outline">
              {genre}
            </Badge>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold tracking-tight">Casts</h1>
          <Badge>{movie.casts.length}</Badge>
        </div>
        <div className="border rounded-md p-4">
          <ul>
            {movie.casts.map((cast) => (
              <li key={cast}>{cast}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold tracking-tight">Episodes</h1>
          <Badge>{movie.episodes.length}</Badge>
        </div>
        <div className="border rounded-md p-4">
          {movie.episodes.map((episode) => (
            <div key={episode.id} className="flex items-center gap-2">
              {episode.season && episode.number ? (
                <Badge>
                  {episode.season}:{episode.number}
                </Badge>
              ) : (
                <Badge>
                  {0}:{0}
                </Badge>
              )}
              {episode.title}
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold tracking-tight">Recommendations</h1>
          <Badge>{movie.recommendations.length}</Badge>
        </div>
        <MovieList
          movies={movie.recommendations.map((item) => ({
            id: item.id,
            title: item.title,
            url: "",
            image: item.image,
            releaseDate: "",
            duration: `${item.duration}m`,
            type: item.type,
          }))}
        />
      </div>
    </main>
  )
}
