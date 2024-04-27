"use client"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/shared/ui/pagination"
import { usePathname, useSearchParams } from "next/navigation"

interface MoviePaginationProps {
  currentPage: number
  hasNextPage: boolean
}

const MoviePagination = ({ currentPage, hasNextPage }: MoviePaginationProps) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const query = searchParams.get("query")

  return (
    <Pagination className="mx-0 w-fit items-center gap-4">
      <PaginationContent className="gap-0">
        {currentPage > 1 ? (
          <PaginationItem>
            <PaginationPrevious href={`${pathname}?query=${query}&page=${currentPage - 1}`} />
          </PaginationItem>
        ) : (
          <PaginationItem>
            <PaginationPrevious href={``} className="opacity-50 pointer-events-none" />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink href={``} className="opacity-50 pointer-events-none">
            {currentPage}
          </PaginationLink>
        </PaginationItem>
        {hasNextPage ? (
          <PaginationItem>
            <PaginationNext href={`${pathname}?query=${query}&page=${currentPage + 1}`} />
          </PaginationItem>
        ) : (
          <PaginationItem>
            <PaginationNext href={``} className="opacity-50 pointer-events-none" />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  )
}

export { MoviePagination }
