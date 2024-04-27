import Link from "next/link"
import { InfoIcon } from "lucide-react"

export default function NotFound() {
  return (
    <div className="h-full w-full max-w-sm mx-auto flex flex-col items-center justify-center text-center">
      <InfoIcon className="w-10 h-10 text-primary" />
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="text-lg">The page you are looking for does not exist.</p>
      <Link href="/" className="text-primary mt-2">
        Go home
      </Link>
    </div>
  )
}
