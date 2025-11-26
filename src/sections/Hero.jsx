import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const staticIcon = "🚀 ";
  const mainText = "Crafting code with creativity";
  const [displayText, setDisplayText] = useState(mainText);

  useEffect(() => {
    let index = mainText.length;
    let isDisappearing = true;

    const loopAnimation = () => {
      let visibleText = mainText.slice(0, index);
      let paddedText = visibleText.padEnd(mainText.length, " "); // keeps the position fixed
      setDisplayText(paddedText);

      if (isDisappearing) {
        if (index > 0) {
          index--;
        } else {
          isDisappearing = false;
        }
      } else {
        if (index < mainText.length) {
          index++;
        } else {
          isDisappearing = true;
          index = mainText.length - 1;
        }
      }
    };

    const interval = setInterval(loopAnimation, 100);
    return () => clearInterval(interval);
  }, [mainText]);
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-100 py-40 px-4 bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900"
    >
      {/* Overlay */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white px-6"
      >
        <motion.p
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="font-mono whitespace-pre text-sm md:text-lg uppercase tracking-widest text-yellow-300 mb-4"
        >
          {staticIcon}
          {displayText}
        </motion.p>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">
          Hey, I'm <span className="text-yellow-300">Prajwal Patil</span> 👋
        </h1>

        <p className="text-xl md:text-2xl font-light mb-8">
          Full Stack Developer · UI/UX Enthusiast · Lifelong Learner
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/Prajwal Padmaraj Patil.pdf"
            download
            className="px-6 py-3 rounded-full bg-yellow-400 text-black font-semibold shadow-md"
          >
            Download CV
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#contact"
            className="px-6 py-3 rounded-full border border-white text-white font-semibold shadow-md"
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
