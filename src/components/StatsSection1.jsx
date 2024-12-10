const StatsSection = () => {

    const cardData = [
        {
            id: 1,
            value: "14+",
            title: "Years of Experience",
            description: "Allowing us to navigate the industry's nuances with ease.",
        },
        {
            id: 2,
            value: "15K+",
            title: "Clients Trust Us",
            description: "Let us show you why they choose us.",
        },
        {
            id: 3,
            value: "4",
            title: "Convenient Branches",
            description: "We're here to help whenever you need us.",
        },
        {
            id: 4,
            value: "Icon",
            title: "Expert Guidance",
            description: "We'll support you every step of the way.",
        },
    ];

    return (
        <div className="bg-gray-50 py-10">
            <div className="px-8">
                {/* Section Title */}
                <div className="mb-8">
                    <h2 className="text-2xl md:text-4xl font-bold text-purple-600">
                        What sets us apart
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base flex items-center">
                        What sets us apart from other providers in the industry?{" "}
                        <span className="ml-2 text-purple-600">&rarr;</span>
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cardData.map((card) => (
                        <div
                            key={card.id}
                            className="bg-purple-600 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                        >
                            <h3 className="text-4xl font-bold">{card.value}</h3>
                            <p className="mt-2 text-lg font-semibold">{card.title}</p>
                            <p className="mt-2 text-sm font-thin">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StatsSection;