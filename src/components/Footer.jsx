// src/components/Footer.js
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = [
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/prajwal-patil-782848227",
    name: "LinkedIn",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/_p_raj_wal_",
    name: "Instagram",
  },
  {
    icon: <FaWhatsapp />,
    url: "https://wa.me/918855930177",
    name: "WhatsApp",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1a1a40] via-[#2e1a47] to-[#1e1a70] text-gray-300 py-6 mt-1">
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-4">
        <p className="text-sm">© {new Date().getFullYear()} Prajwal Patil. All rights reserved.</p>

        <div className="flex space-x-6 text-xl">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300"
              whileHover={{
                scale: 1.3,
                color: "#fff",
                textShadow: "0 0 8px rgba(255,255,255,0.6)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              aria-label={link.name}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
