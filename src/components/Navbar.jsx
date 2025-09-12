// src/components/Navbar.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const links = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* <h1 className="text-2xl font-bold text-indigo-600">MyPortfolio</h1> */}
       <a href="#home" className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold cursor-pointer">
  PP
</a>



        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          {links.map((link) => (
            <li key={link} className="relative group">
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-indigo-500 transition-colors duration-300"
              >
                {link}
              </a>
              {/* Animated underline */}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div className="md:hidden" onClick={toggleMenu}>
          <motion.button
            className="focus:outline-none text-3xl"
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            &#9776;
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white px-4 pb-4 space-y-2 shadow-md"
          >
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block py-2 border-b border-gray-100 hover:text-indigo-500 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
