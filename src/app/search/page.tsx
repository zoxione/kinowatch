import { MovieList } from "@/components/movie-list"
import { MoviePagination } from "@/components/movie-pagination"
import { MovieSearch } from "@/components/movie-search"
import { movieAPI } from "@/entities/movie"
import { Badge } from "@/shared/ui/bagde"

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Page({ searchParams }: PageProps) {
  const query = (searchParams.query || "") as string
  const page = Number(searchParams.page) || 1
  const queryReturn = await movieAPI.getAllQuery({ query, page })
  const queryMovies = queryReturn.results || []

  return (
    <main className="container flex-1 space-y-8 py-4">
      <MovieSearch />
      {queryMovies.length === 0 || query === "" ? (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-xl font-semibold tracking-tight">No results.</h1>
        </div>
      ) : (
        <>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-semibold tracking-tight">{query}</h1>
                <Badge>{queryMovies.length}</Badge>
              </div>
              <MoviePagination currentPage={Number(queryReturn.currentPage)} hasNextPage={queryReturn.hasNextPage} />
            </div>
            <MovieList movies={queryMovies} />
          </div>
        </>
      )}
    </main>
  )
}
