import { MovieCard, MovieShortInfo } from "@/entities/movie"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/shared/ui/carousel"
import { cn } from "@/shared/utils/cn"

interface MovieCarouselProps {
  movies: MovieShortInfo[]
  className?: string
}

const MovieCarousel = ({ movies, className }: MovieCarouselProps) => {
  return (
    <Carousel
      opts={{
        align: "start",
        dragFree: true,
      }}
      className={cn("w-full space-y-2", className)}
    >
      <CarouselContent>
        {movies.map((movie) => (
          <CarouselItem key={movie.id} className="basis-1/6">
            <MovieCard movie={movie} className="w-full" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
export { MovieCarousel }
