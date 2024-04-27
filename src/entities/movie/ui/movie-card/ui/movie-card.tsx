import { MovieShortInfo } from "@/entities/movie"
import { Badge } from "@/shared/ui/bagde"
import { cn } from "@/shared/utils/cn"
import { prettyDate } from "@/shared/utils/pretty-date"
import Image from "next/image"
import Link from "next/link"

interface MovieCardProps {
  movie: MovieShortInfo
  className?: string
}

const MovieCard = ({ movie, className }: MovieCardProps) => {
  return (
    <Link href={`/${movie.id}`} className={cn("group max-w-60 animate-in zoom-in-90", className)}>
      <div className="relative h-80 overflow-hidden">
        <Image
          src={movie.image}
          alt={movie.title}
          fill
          className="object-cover group-hover:scale-105 duration-200 rounded-lg"
        />
      </div>
      <span className="font-semibold line-clamp-1">{movie.title}</span>
      <div className="flex flex-row justify-between">
        {movie.duration ? <Badge variant="secondary">{movie.duration}</Badge> : null}
        {movie.releaseDate ? <Badge variant="secondary">{prettyDate(movie.releaseDate)}</Badge> : null}
      </div>
    </Link>
  )
}

export { MovieCard }
