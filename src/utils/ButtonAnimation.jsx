
/* eslint-disable react/prop-types */
export const AniButton = ({ text, buttonClass, textClass }) => {
  return (
    <button className={`group relative overflow-hidden scale-50 cursor-pointer transition-all duration-300 ease-custom ${buttonClass}`}>
      <span className={`absolute border inset-0 grid place-content-center transition-transform duration-300 ease-custom group-hover:translate-y-full ${textClass}`}>
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
