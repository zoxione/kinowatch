import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { RedirectType, redirect } from "next/navigation"

const MovieSearch = () => {
  const searchMovie = async (formData: FormData) => {
    "use server"
    redirect(`?query=${formData.get("query")}`, RedirectType.replace)
  }

  return (
    <form action={searchMovie} className="flex w-full items-center gap-2">
      <Input type="text" name="query" placeholder="Type something" />
      <Button type="submit">Search</Button>
    </form>
  )
}

export { MovieSearch }
