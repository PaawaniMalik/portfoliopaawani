"use client"

import React, { useCallback, useEffect, useMemo, useRef } from "react"
import { motion, useAnimationControls } from "motion/react"
import { v4 as uuidv4 } from "uuid"

import { cn } from "@/lib/utils"
import { useDimensions } from "@/hooks/use-dimensions"

interface PixelTrailProps {
  pixelSize: number // px
  fadeDuration?: number // ms
  delay?: number // ms
  className?: string
  pixelClassName?: string
  useGlobalMouse?: boolean
}

const PixelTrail: React.FC<PixelTrailProps> = ({
  pixelSize = 20,
  fadeDuration = 500,
  delay = 0,
  className,
  pixelClassName,
  useGlobalMouse = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const dimensions = useDimensions(containerRef)
  const trailId = useRef(uuidv4())

  const paintPixelAtPosition = useCallback(
    (clientX: number, clientY: number) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const localX = clientX - rect.left
      const localY = clientY - rect.top

      if (localX < 0 || localY < 0 || localX > rect.width || localY > rect.height) {
        return
      }

      const x = Math.floor(localX / pixelSize)
      const y = Math.floor(localY / pixelSize)

      const pixelElement = document.getElementById(
        `${trailId.current}-pixel-${x}-${y}`
      )
      if (pixelElement) {
        const animatePixel = (pixelElement as any).__animatePixel
        if (animatePixel) animatePixel()
      }
    },
    [pixelSize]
  )

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      paintPixelAtPosition(e.clientX, e.clientY)
    },
    [paintPixelAtPosition]
  )

  useEffect(() => {
    if (!useGlobalMouse) return

    const handleWindowMouseMove = (e: MouseEvent) => {
      paintPixelAtPosition(e.clientX, e.clientY)
    }

    window.addEventListener("mousemove", handleWindowMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove)
    }
  }, [paintPixelAtPosition, useGlobalMouse])

  const columns = useMemo(
    () => Math.ceil(dimensions.width / pixelSize),
    [dimensions.width, pixelSize]
  )
  const rows = useMemo(
    () => Math.ceil(dimensions.height / pixelSize),
    [dimensions.height, pixelSize]
  )

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 w-full h-full",
        useGlobalMouse ? "pointer-events-none" : "pointer-events-auto",
        className
      )}
      onMouseMove={useGlobalMouse ? undefined : handleMouseMove}
    >
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <PixelDot
              key={`${colIndex}-${rowIndex}`}
              id={`${trailId.current}-pixel-${colIndex}-${rowIndex}`}
              size={pixelSize}
              fadeDuration={fadeDuration}
              delay={delay}
              className={pixelClassName}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default PixelTrail

interface PixelDotProps {
  id: string
  size: number
  fadeDuration: number
  delay: number
  className?: string
}

const PixelDot: React.FC<PixelDotProps> = React.memo(
  ({ id, size, fadeDuration, delay, className }) => {
    const controls = useAnimationControls()

    const animatePixel = useCallback(() => {
      controls.start({
        opacity: [1, 0],
        transition: { duration: fadeDuration / 1000, delay: delay / 1000 },
      })
    }, [])

    // Attach the animatePixel function to the DOM element
    const ref = useCallback(
      (node: HTMLDivElement | null) => {
        if (node) {
          ;(node as any).__animatePixel = animatePixel
        }
      },
      [animatePixel]
    )

    return (
      <motion.div
        id={id}
        ref={ref}
        className={cn("cursor-pointer-none", className)}
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
        initial={{ opacity: 0 }}
        animate={controls}
        exit={{ opacity: 0 }}
      />
    )
  }
)

PixelDot.displayName = "PixelDot"
