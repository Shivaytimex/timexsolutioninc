import { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
}) => {
    const containerRef = useRef(null)
    const scrollerRef = useRef(null)
    const [start, setStart] = useState(false)

    useEffect(() => {
        const container = containerRef.current
        const scroller = scrollerRef.current
        if (!container || !scroller) return undefined

        const originalItems = Array.from(scroller.children)
        const duplicatedItems = originalItems.map((item) => {
            const duplicate = item.cloneNode(true)
            duplicate.setAttribute("aria-hidden", "true")
            scroller.appendChild(duplicate)
            return duplicate
        })

        container.style.setProperty(
            "--animation-direction",
            direction === "left" ? "forwards" : "reverse"
        )
        const duration = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"
        container.style.setProperty("--animation-duration", duration)
        setStart(true)

        return () => {
            duplicatedItems.forEach((item) => item.remove())
        }
    }, [direction, speed])
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

InfiniteMovingCards.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
        })
    ).isRequired,
    direction: PropTypes.oneOf(["left", "right"]),
    speed: PropTypes.oneOf(["fast", "normal", "slow"]),
    pauseOnHover: PropTypes.bool,
}
