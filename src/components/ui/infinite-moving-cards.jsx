/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from "react"

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
}) => {
    const containerRef = useRef(null)
    const scrollerRef = useRef(null)

    useEffect(() => {
        addAnimation()
    }, [])
    const [start, setStart] = useState(false)
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children)

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true)
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem)
                }
            })

            getDirection()
            getSpeed()
            setStart(true)
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty("--animation-direction", "forwards")
            } else {
                containerRef.current.style.setProperty("--animation-direction", "reverse")
            }
        }
    }
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s")
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s")
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s")
            }
        }
    }
    return (
        <div
            ref={containerRef}
            className={"scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"}
        >
            <ul
                ref={scrollerRef}
                className={`flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap 
                    ${start ? "animate-scroll" : ""} 
                    ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
            >
                {items.map((item, idx) => (
                    <li key={idx} className="w-[80px] sm:w-[100px] md:w-[150px] max-w-full relative flex-shrink-0">
                        <img
                            src={item.src || "/placeholder.svg"}
                            alt={item.alt}
                            className="object-contain w-full h-auto"
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

