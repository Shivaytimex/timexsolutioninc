// src/hooks/useScrollVisibility.js
import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const useScrollVisibility = () => {
    const { scrollYProgress } = useScroll();
    const [visible, setVisible] = useState(false);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        if (typeof current === "number") {
            let direction = current - scrollYProgress.getPrevious();

            if (scrollYProgress.get() < 0.05) {
                setVisible(false);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });

    return visible;
};

export default useScrollVisibility;
