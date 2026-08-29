"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { IoChatbubbleEllipsesOutline, IoClose } from "react-icons/io5";
import PropTypes from "prop-types";

/**
 * Floating WhatsApp button + quick chat panel.
 * Mirrors the behavior/feel from `calcost/app/components/WhatsAppFloat.tsx`.
 */
export default function WhatsAppFloat({
  phoneNumber = "+1 559-505-3443",
  message = "Hello! I'm interested in your services. Can you help me?",
  position = "bottom-right",
  pulseAnimation = true,
}) {
  const [isOpen, setIsOpen] = useState(false);
  /** Hide FAB when the viewport is at (or past) the document bottom so it does not sit on the footer. */
  const [hideAtPageBottom, setHideAtPageBottom] = useState(false);

  useEffect(() => {
    const thresholdPx = 72;

    const update = () => {
      const scrollEl = document.scrollingElement ?? document.documentElement;
      const scrollTop = scrollEl.scrollTop;
      const viewportH = window.innerHeight;
      const scrollHeight = scrollEl.scrollHeight;
      const isScrollable = scrollHeight > viewportH + 8;
      const atBottom =
        isScrollable && scrollTop + viewportH >= scrollHeight - thresholdPx;
      setHideAtPageBottom(atBottom);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    if (hideAtPageBottom) setIsOpen(false);
  }, [hideAtPageBottom]);

  const positionClasses = useMemo(
    () => ({
      "bottom-right":
        "right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] sm:right-6 sm:bottom-6 md:right-8 md:bottom-8",
      "bottom-left":
        "left-[max(1rem,env(safe-area-inset-left))] bottom-[max(1rem,env(safe-area-inset-bottom))] sm:left-6 sm:bottom-6 md:left-8 md:bottom-8",
    }),
    []
  );

  const panelAlignClasses = useMemo(
    () => ({
      "bottom-right": "right-0",
      "bottom-left": "left-0",
    }),
    []
  );

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${String(phoneNumber).replace(
      /\D/g,
      ""
    )}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      className={`fixed z-[100] ${positionClasses[position] ?? ""}`}
      initial={false}
      animate={{
        opacity: hideAtPageBottom ? 0 : 1,
        y: hideAtPageBottom ? 24 : 0,
      }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      style={{ pointerEvents: hideAtPageBottom ? "none" : "auto" }}
      aria-hidden={hideAtPageBottom}
    >
      <div className="relative h-14 w-14 shrink-0">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="wa-panel"
              initial={{ opacity: 0, y: 16, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.94 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
              className={`absolute bottom-full mb-3 w-[min(18rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-primary/35 bg-black/95 shadow-xl shadow-primary/20 backdrop-blur-xl ${
                panelAlignClasses[position] ?? "right-0"
              }`}
            >
              <div className="flex items-center justify-between border-b border-primary/25 bg-gradient-to-r from-black via-purple-950/90 to-black px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/25 text-white ring-1 ring-primary/40">
                    <IoChatbubbleEllipsesOutline
                      className="h-5 w-5"
                      aria-hidden
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-white sm:text-base">
                    WhatsApp
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-1.5 text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="Close"
                >
                  <IoClose className="h-5 w-5" aria-hidden />
                </button>
              </div>

              <div className="bg-gradient-to-b from-zinc-950 to-black p-4">
                <p className="mb-4 text-sm leading-relaxed text-gray-400">
                  Hi there! Chat with us on WhatsApp for quick assistance.
                </p>
                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-opacity hover:opacity-95 active:opacity-90"
                >
                  <FaWhatsapp className="h-5 w-5" aria-hidden />
                  Start chat
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={() => setIsOpen((o) => !o)}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary via-primary to-purple-700 text-white shadow-lg shadow-primary/40 ring-2 ring-white/15 transition-shadow hover:shadow-primary/55 hover:ring-primary/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close WhatsApp menu" : "Open WhatsApp chat"}
        >
          {pulseAnimation && !isOpen && (
            <span
              className="absolute inset-0 rounded-full bg-primary opacity-50 motion-safe:animate-ping"
              aria-hidden
            />
          )}
          <FaWhatsapp className="relative z-[1] h-7 w-7" aria-hidden />
        </motion.button>
      </div>
    </motion.div>
  );
}

WhatsAppFloat.propTypes = {
  phoneNumber: PropTypes.string,
  message: PropTypes.string,
  position: PropTypes.oneOf(["bottom-right", "bottom-left"]),
  pulseAnimation: PropTypes.bool,
};
