import React from 'react';

export default function PortfolioShowcase({ image, title, description, buttons = [], reverse = false }) {
  return (
    <div className={`w-full flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 py-10 md:py-16`}>  
      {/* Image Section */}
      <div className="flex-1 flex items-center justify-center min-w-[280px] max-w-lg">
        {typeof image === 'string' ? (
          <img src={image} alt={title} className="rounded-lg shadow-2xl w-full object-cover" />
        ) : (
          image
        )}
      </div>
      {/* Text Section */}
      <div className="flex-1 text-left max-w-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4">{title}</h2>
        <div className="text-white text-base md:text-lg mb-6 whitespace-pre-line">{description}</div>
        <div className="flex flex-wrap gap-4">
          {buttons.map((btn, idx) => (
            <a
              key={idx}
              href={btn.href || '#'}
              className="inline-block font-bold text-white bg-transparent border-0 underline underline-offset-4 hover:text-cyan-300 transition text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              {btn.label} <span className="ml-1">&rarr;</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
} 