"use client"

import { cn } from "@/shared/utils/cn"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface HeaderProps {
  className?: string
}

const Header = ({ className }: HeaderProps) => {
  const pathname = usePathname()

  return (
    <header
      className={cn(
        "w-full sticky top-0 z-50 border-b border-b-border backdrop-blur-sm bg-background/80 p-4",
        className,
      )}
    >
      <div className="container flex items-center justify-center gap-4">
        <Link href="/" className={pathname === "/" ? "text-primary" : "hover:text-primary transition-colors"}>
          Home
        </Link>
        <Link href="/" className="text-lg font-semibold hover:text-primary transition-colors">
          Kinowatch
        </Link>
        <Link
          href="/search"
          className={pathname === "/search" ? "text-primary" : "hover:text-primary transition-colors"}
        >
          Search
        </Link>
      </div>
    </header>
  )
}

export { Header }
