/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export const TypeWriterText = ({ text, speed = 85 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <i className="text-sm lg:text-lg text-gray-400 leading-relaxed">
      {displayedText}
    </i>
  );
};
