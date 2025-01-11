import React from 'react'

const Star = ({ top, left, size, opacity }) => (
  <div
    className="absolute rounded-full bg-white"
    style={{
      top,
      left,
      width: `${size}px`,
      height: `${size}px`,
      opacity,
    }}
  />
)

export const Stars = () => {
  const stars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.5 + 0.5,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <Star key={star.id} {...star} />
      ))}
    </div>
  )
}

