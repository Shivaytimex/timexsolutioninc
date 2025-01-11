// Description: Tailwind CSS configuration file
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "shake-rotate": "shake-rotate 0.5s ease-in-out", // New shake and rotate animation
        fade: "fade 2s ease-in-out",
        slide: "slide 2s ease-in-out",
        "skew-scroll": "skew-scroll 20s linear infinite",
        shine: "shine 5s linear infinite",
      },
      keyframes: {
        "shake-rotate": {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-15deg)" },
          "50%": { transform: "rotate(15deg)" },
          "75%": { transform: "rotate(-15deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slide: {
          "0%": { transform: "translateX(100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "skew-scroll": {
          "0%": {
            transform:
              "rotatex(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(0)",
          },
          "100%": {
            transform:
              "rotatex(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(-100%)",
          },
        },
      },
      colors: {
        Purple5: "#a855f7",
        Indigo6: "#4f46e5",
        primary: "#751f8c",
        secondary: "#fcd2d2",
        PurpleLight: "#CC9BF8",
        PurpleDark: "#A64FF3",
        VeryLight: "#F2E6FD",
        PurpleHeading: "#9039db",
        DarkText : '#3d3d3d'
      },
    },
  },
  plugins: [],
};
