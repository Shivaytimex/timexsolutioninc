import { InfiniteMovingCards } from "./../ui/infinite-moving-cards"

export default function InfiniteMovingPartners() {
    return (
        <div className="px-4 md:px-8">
            <div className="rounded-3xl py-10 bg-purple-900/30 flex flex-col antialiased items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards items={logos} direction="left" speed="slow" />
                <div className="h-8" /> {/* Spacer */}
                <InfiniteMovingCards items={logos} direction="right" speed="slow" />
            </div>
        </div>
    )
}

const logos = [
    {
        "src": "/logos/logo-1.webp",
        "alt": "Arrive-Logistics"
    },
    {
        "src": "/logos/logo-2.webp",
        "alt": "Black-Bear-Diner"
    },
    {
        "src": "/logos/logo-3.webp",
        "alt": "C.R.England"
    },
    {
        "src": "/logos/logo-4.webp",
        "alt": "Cheema-Freightlines"
    },
    {
        "src": "/logos/logo-5.webp",
        "alt": "Jack"
    },
    {
        "src": "/logos/logo-6.webp",
        "alt": "Kay-Jewelers"
    },
    {
        "src": "/logos/logo-7.webp",
        "alt": "Varied layouts"
    },
    {
        "src": "/logos/logo-8.webp",
        "alt": "Parallax"
    }
]


