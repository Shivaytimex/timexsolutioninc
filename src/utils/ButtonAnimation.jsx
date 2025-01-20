/* eslint-disable react/prop-types */
export const AniButton = ({ text }) => {
  return (
    <button className="group relative overflow-hidden bg-primary text-white font-semibold px-10 py-5 rounded-full border-2 border-white scale-50 cursor-pointer transition-all duration-300 ease-custom">
      <span className="absolute border inset-0 bg-white text-primary grid place-content-center text-3xl transition-transform duration-300 ease-custom group-hover:translate-y-full">
        {text}
      </span>
      <div className="inline-flex text-3xl whitespace-pre">
        {text.split("").map((letter, index) => (
          <span
            key={index}
            className={`opacity-0 transform transition-all duration-300 ease-custom
                ${letter === " " ? "w-[0.25em]" : ""}
                ${index % 2 === 0 ? "-translate-y-4" : "translate-y-4"}
                group-hover:opacity-100 group-hover:translate-y-0
                ${`group-hover:delay-[${index * 100}ms]`}`}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </div>
    </button>
  );
};
