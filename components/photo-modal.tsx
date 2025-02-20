"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface PhotoModalProps {
  isOpen: boolean
  onClose: () => void
  photo: {
    src: string
    alt: string
  } | null
}

export function PhotoModal({ isOpen, onClose, photo }: PhotoModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!isOpen || !photo) return null

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-end justify-center bg-black/40 pb-12 sm:pb-24 px-4",
        "opacity-0 transition-opacity duration-300",
        isOpen && "opacity-100",
      )}
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className={cn(
          "relative w-full sm:w-[80vw] md:w-[60vw] h-[30vh] sm:h-[40vh]",
          "bg-white rounded-lg overflow-hidden border-4 border-white",
          "scale-75 opacity-0 transition-all duration-300 shadow-xl",
          isOpen && "scale-100 opacity-100",
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={photo.src || "/placeholder.svg"}
          alt={photo.alt}
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
          sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, 60vw"
          priority
        />
      </div>
    </div>
  )
}

