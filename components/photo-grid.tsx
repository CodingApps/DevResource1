"use client"

import Image from "next/image"
import { useState, useRef } from "react"
import { PhotoModal } from "./photo-modal"

interface Photo {
  id: number
  src: string
  alt: string
}

interface PhotoGridProps {
  photos: Photo[]
}

export function PhotoGrid({ photos }: PhotoGridProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  const handlePhotoSelect = (photo: Photo) => {
    setSelectedPhoto(photo)
  }

  const handleCloseModal = () => {
    setSelectedPhoto(null)
  }

  return (
    <>
      <div ref={gridRef} className="grid grid-cols-3 gap-1">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="relative aspect-square cursor-pointer overflow-hidden group"
            onClick={() => handlePhotoSelect(photo)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                handlePhotoSelect(photo)
              }
            }}
          >
            <Image
              src={photo.src || "/placeholder.svg"}
              alt={photo.alt}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 33vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        ))}
      </div>

      <PhotoModal isOpen={!!selectedPhoto} onClose={handleCloseModal} photo={selectedPhoto} />
    </>
  )
}

