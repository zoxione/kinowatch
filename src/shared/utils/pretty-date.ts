const prettyDate = (dateStr: string) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString("ru-RU", { day: "numeric", month: "2-digit", year: "numeric" })
}

export { prettyDate }
