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
        <div className="py-10 my-10">
            <div className="px-8 grid grid-cols-1 md:md:grid-cols-[22%,auto] gap-8 relative">
                <div className="absolute inset-0 bg-[#e9d2fa] z-[1] rounded-lg top-[20%] hidden lg:flex" style={{ height: '60%' }}></div>
                {/* Section Title */}
                <div className="flex justify-center flex-col relative z-10">
                    <h2 className="text-4xl md:text-2xl font-bold text-PurpleEnd">
                        What sets us apart
                    </h2>
                    <p className="text-gray-600 text-base md:text-sm flex items-center">
                        What sets us apart from other providers in the industry?{" "}
                        <span className="ml-2 text-PurpleEnd text-4xl">&rarr;</span>
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cardData.map((card) => (
                        <div
                            key={card.id}
                            className="relative z-10 bg-PurpleEnd text-white p-4 h-[250px] flex flex-col justify-center rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                        >
                            {/* Background Layer */}
                            {/* <div className="absolute inset-0 bg-PurpleEnd z-[-1] rounded-lg" style={{ height: '90%' }}></div> */}
                            <h3 className="text-4xl font-bold">{card.value}</h3>
                            <p className="mt-2 text-lg font-semibold">{card.title}</p>
                            <p className="mt-2 text-xs font-thin">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StatsSection;
