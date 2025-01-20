export const AnimatedShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <circle cx="10%" cy="10%" r="50" fill="url(#gradient1)">
          <animate
            attributeName="cy"
            values="10%;90%;10%"
            dur="20s"
            repeatCount="indefinite"
          />
        </circle>
        <rect x="80%" y="60%" width="100" height="100" fill="url(#gradient2)">
          <animate
            attributeName="y"
            values="60%;20%;60%"
            dur="15s"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 530 100"
            to="360 530 100"
            dur="10s"
            repeatCount="indefinite"
          />
        </rect>
        <polygon points="50,0 100,86.6 0,86.6" fill="url(#gradient1)">
          <animateMotion
            path="M 250,50 Q 300,250 550,150"
            dur="25s"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="18s"
            repeatCount="indefinite"
          />
        </polygon>
      </svg>
    </div>
  );
};
