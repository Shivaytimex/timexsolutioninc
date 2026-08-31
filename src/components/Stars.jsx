  /* eslint-disable react/prop-types */
  import { useMemo } from 'react';

  const Star = ({ top, left, size, opacity, twinkle }) => (
    <div
      className={`absolute rounded-full bg-white ${twinkle ? 'motion-safe:animate-pulse' : ''}`}
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
    const stars = useMemo(() => {
      return Array.from({ length: 34 }, (_, i) => ({
        id: i,
        top: `${(i * 7.3 + 13) % 100}%`,
        left: `${(i * 11.7 + 23) % 100}%`,
        size: (i % 2) + 1,
        opacity: 0.28 + (i % 5) * 0.09,
        twinkle: i % 17 === 0,
      }));
    }, []);

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
          <Star key={star.id} {...star} />
        ))}
      </div>
    )
  }
