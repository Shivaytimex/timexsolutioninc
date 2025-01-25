import ContactPage from "../components/ContactUs-Components/ContactPage";
import FaqSection from "../components/ContactUs-Components/FaqSection";
import BookACall from "../components/ContactUs-Components/BookACall";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import { Stars } from "../components/Stars";

export default function ContactUs() {
  return (
    <div className="bg-black relative z-20">
      <Stars />
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300  to-slate-500 py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-8xl"
        >
          Contact US
        </motion.h1>
      </LampContainer>
      <BookACall />
      <ContactPage />
      <FaqSection />
    </div>
  );
}
