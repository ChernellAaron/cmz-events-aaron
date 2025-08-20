"use client"

import { useState, useEffect } from "react"

const images = [
  "/event2.jpg",
  "/event5.jpg",
  "/event6.jpg",
  "/event1.jpg",
  "/event7.jpg",
  "/event8.jpg",
  "/event10.jpg",
  "/event11.jpg",
  "/event12.jpg",
  "/event13.jpg",
  "/event14.jpg",
  "/event15.jpg",
  "/event16.jpg",
  "/event17.jpg",
  "/event18.jpg",
  "/event19.jpg",
  "/event22.jpg",
  "/event24.jpg",
  "/event25.jpg",
  "/event26.jpg",
  "/event27.jpg",
  "/event28.jpg",
  "/event29.jpg",
  "/event30.jpg",
  "/event31.jpg",
  "/event32.jpg",
  "/event33.jpg",
  "/event34.jpg",
  "/event35.jpg",
  "/event36.jpg",
  "/event3.jpg",
  "/event4.jpg",
  "/event45.jpg",
  "/event46.jpg",
  "/event47.jpg",
  "/event48.jpg",
   "/event7 (2).jpg",
]

// Function to shuffle array randomly
const shuffleArray = (array: string[]) => {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export default function Slideshow() {
  const [shuffledImages, setShuffledImages] = useState<string[]>([])
  const [currentImage, setCurrentImage] = useState(0)

  // Shuffle images on component mount
  useEffect(() => {
    setShuffledImages(shuffleArray(images))
  }, [])

  useEffect(() => {
    if (shuffledImages.length === 0) return
    
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % shuffledImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [shuffledImages])

  if (shuffledImages.length === 0) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="relative w-full" style={{ paddingTop: "75%" }}>
          <div className="absolute top-0 left-0 w-full h-full bg-gray-200 flex items-center justify-center">
            <div className="text-gray-500">Loading images...</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative w-full" style={{ paddingTop: "75%" }}>
        {shuffledImages.map((src, index) => (
          <div
            key={src}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={src || "/placeholder.svg"}
              alt={`Event ${index + 1}`}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
    </div>
  )
}