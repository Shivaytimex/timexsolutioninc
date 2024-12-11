/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

const Typewriter = () => {
    const texts = ["PPC Campaigns", "Google Ads", "Web Development", "Digital Services"];
    const [currentText, setCurrentText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typingSpeed = 150; // Speed of typing
        const deletingSpeed = 100; // Speed of deleting
        const switchDelay = 2000; // Delay before switching text

        let timer;

        if (isDeleting) {
            // Delete text
            timer = setTimeout(() => {
                setCurrentText((prev) => prev.slice(0, prev.length - 1));
            }, deletingSpeed);
        } else {
            // Type text
            timer = setTimeout(() => {
                setCurrentText((prev) => texts[textIndex].slice(0, prev.length + 1));
            }, typingSpeed);
        }

        // If current text is fully typed, start deleting after some time
        if (currentText === texts[textIndex] && !isDeleting) {
            setTimeout(() => setIsDeleting(true), switchDelay);
        } else if (currentText === "" && isDeleting) {
            setIsDeleting(false);
            setTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Loop through texts
        }

        return () => clearTimeout(timer); // Clean up the timer on component unmount

    }, [currentText, isDeleting, textIndex, texts]);

    return (
        <>
            <span className="text-purple-600">{currentText}</span>
            <span className="animate-pulse text-purple-600">|</span> {/* Blinking cursor */}
        </>
    );
};

export default Typewriter;
