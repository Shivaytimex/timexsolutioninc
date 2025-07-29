import React from 'react';
import { Stars } from '../components/Stars';

export default function PortfolioShowcase({ image, title, description, buttons = [], reverse = false }) {
  const sectionBgColor = reverse ? 'bg-gradient-to-bl from-primary via-black to-primary' : 'bg-gradient-to-br from-primary via-black to-primary';
  
  // const sectionBgColor = reverse ? 'bg-gradient-to-bl from-primary via-black to-primary' : 'bg-gradient-to-br from-primary via-black to-primary';
  
  return (
      <div className={`w-full ${sectionBgColor} flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-center justify-center gap-8 py-10 md:py-16 relative relative px-4`}>  
      <Stars className="absolute inset-0 z-0" />
      {/* Image Section */}
      <div className="flex-1 flex items-center justify-center min-w-[280px] max-w-lg relative z-10 relative z-10">
        {typeof image === 'string' ? (
          <img src={image} alt={title} className="rounded-lg shadow-2xl w-full object-cover" />
        ) : (
          image
        )}
      </div>
      {/* Text Section */}
      <div className="flex-1 text-left max-w-xl relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h2>
        <div className="text-white text-base md:text-lg mb-6 whitespace-pre-line">{description}</div>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {buttons.map((btn, idx) => (
            <a
              key={idx}
              href={btn.href || '#'}
              className="text-sm inline-block font-bold text-white bg-transparent border-0 underline underline-offset-4 hover:text-cyan-300 transition md:text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              {btn.label} <span className="ml-1 hidden md:inline">&rarr;</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
} 