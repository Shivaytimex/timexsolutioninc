/* eslint-disable react/prop-types */
import { motion, useReducedMotion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CardSpotlight, CinematicSweep } from "../ServiceMotion";
import { handleSpotlightMove } from "../serviceMotionUtils";
import { getResponsiveSrcSet } from "../../utils/responsiveImage";

const cardReveal = {
  hidden: { y: 28, scale: 0.985 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const Card = ({ index, title, description, img, subServices, link, featured, flow }) => {
  const reduceMotion = useReducedMotion();
  const PrimaryIcon = subServices[0]?.icon;
  const highlights = subServices.slice(0, featured ? 4 : 2);

  return (
    <motion.article
      variants={cardReveal}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onPointerMove={handleSpotlightMove}
      whileHover={reduceMotion ? undefined : { y: -6, scale: 1.006 }}
      className={`group relative flex min-h-[455px] w-[86vw] flex-none snap-center flex-col overflow-hidden rounded-3xl border border-purple-500/25 bg-gradient-to-br from-purple-950/80 via-[#180724] to-indigo-950/75 shadow-xl transition-shadow duration-500 hover:border-purple-300/40 hover:shadow-2xl hover:shadow-purple-500/15 sm:min-h-[490px] sm:w-auto sm:min-w-0 ${featured ? "sm:col-span-2 xl:col-span-2" : ""}`}
    >
      <CardSpotlight size={featured ? 620 : 440} opacity={0.16} />

      <div className={`relative overflow-hidden ${featured ? "h-52 sm:h-56" : "h-44 sm:h-48"}`}>
        <motion.img
          src={img || "/placeholder.svg"}
          srcSet={getResponsiveSrcSet(img)}
          sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 86vw"
          alt=""
          width="1600"
          height="1000"
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover opacity-80"
          initial={reduceMotion ? false : { scale: 1.02 }}
          whileHover={reduceMotion ? undefined : { scale: 1.07 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#180724] via-purple-950/20 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950/30 via-transparent to-indigo-950/20 mix-blend-color" />
        {featured ? <CinematicSweep duration={8.4} delay={0.8} /> : null}

        {PrimaryIcon && (
          <div className="absolute left-5 top-5 z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-200/20 bg-gradient-to-br from-PurpleDark to-PurpleLight shadow-lg shadow-purple-950/50 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105 sm:left-6 sm:top-6">
            <PrimaryIcon className="h-7 w-7 text-white" />
          </div>
        )}

        <span aria-hidden="true" className="absolute right-5 top-5 text-4xl text-white/10 sm:right-6 sm:top-6">
          0{index + 1}
        </span>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-PurpleLight/80 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-PurpleLight shadow-[0_0_12px_rgba(204,155,248,0.9)]" />
          <p className="text-xs uppercase tracking-[0.22em] text-purple-100/80">Focused capability</p>
        </div>

        <h3 className="text-2xl font-bold leading-tight text-white sm:text-[1.7rem]">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-300">{description}</p>

        {featured && flow ? (
          <ol className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4" aria-label="AI automation workflow">
            {flow.map((step, flowIndex) => (
              <li
                key={step}
                className="relative rounded-xl border border-purple-300/15 bg-black/30 px-3 py-3 text-center text-xs uppercase tracking-[0.12em] text-purple-100"
              >
                <span className="mb-1 block text-xs text-PurpleLight/70">0{flowIndex + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        ) : (
          <ul className="mt-5 flex flex-wrap gap-2">
            {highlights.map((service) => (
              <li
                key={service.title}
                className="rounded-full border border-purple-400/15 bg-black/30 px-3 py-2 text-xs text-purple-100 backdrop-blur-sm transition-colors duration-300 group-hover:border-purple-300/25 group-hover:bg-purple-500/10"
              >
                {service.title}
              </li>
            ))}
          </ul>
        )}

        <div aria-hidden="true" className="mt-auto flex min-h-12 items-center pt-5 text-sm text-white transition-colors duration-300 group-hover:text-PurpleLight">
          Explore {title}
          <span className="ml-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-purple-300/20 bg-gradient-to-r from-PurpleDark to-PurpleLight shadow-lg shadow-purple-950/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-105">
            <FaArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>

      <Link
        to={link}
        className="absolute inset-1 z-20 rounded-[1.35rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-PurpleLight focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        aria-label={`Explore ${title}`}
      >
        <span className="sr-only">Explore {title}</span>
      </Link>
    </motion.article>
  );
};

export default Card;
