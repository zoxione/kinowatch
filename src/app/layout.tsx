import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const font = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Kinowatch",
  description: "Watch movies and series online",
}

interface LayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="ru" className="flex min-h-full">
      <body className={`${font.className} flex flex-col flex-auto overflow-x-hidden m-0 p-0`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
