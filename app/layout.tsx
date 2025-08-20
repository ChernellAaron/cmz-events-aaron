import type React from "react"
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar"  // Changed from Header to Navbar
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "CMZ Events - Premium Event Production Services",
  description:
    "CMZ Events delivers premium event production services including sound equipment, DJ services, lighting, and microphones for weddings, conferences, and special occasions.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <Navbar />  {/* Replaced Header with new Navbar component */}
        <main className="container mx-auto px-4 py-6 md:py-8 w-full">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-6 md:py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="mb-6 md:mb-0">
                <h3 className="text-xl font-bold mb-4">CMZ Events</h3>
                <p className="max-w-md">
                  Premium event production services for weddings, conferences, and special occasions.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
                <div className="flex flex-col">
                  <p>082 650 9344</p>
                  <p>062 008 0319</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center">
              <p>&copy; {new Date().getFullYear()} CMZ Events. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}