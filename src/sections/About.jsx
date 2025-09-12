import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProfilePic from "../Assests/Profile.jpg";

// Skill icons
import bootStrapIcon from "../Assests/skills/Bootstrap.jpg";
import cssIcon from "../Assests/skills/Css.png";
import dockerIcon from "../Assests/skills/Docker.png";
import gitIcon from "../Assests/skills/Git.png";
import gitHubIcon from "../Assests/skills/Github.jpg";
import htmlIcon from "../Assests/skills/html.jpg";
import javaIcon from "../Assests/skills/Java.png";
import jiraIcon from "../Assests/skills/Jira.webp";
import jsIcon from "../Assests/skills/Js.webp";
import mongoIcon from "../Assests/skills/MongoDB.png";
import muiIcon from "../Assests/skills/MUI.png";
import nodeIcon from "../Assests/skills/Node.png";
import postmanIcon from "../Assests/skills/postman.png";
import ReactIcon from "../Assests/skills/React.png";
import sassIcon from "../Assests/skills/Sass.png";
import sqlIcon from "../Assests/skills/Sql.png";
import tailwindIcon from "../Assests/skills/Tailwind.png";
import typeScriptIcon from "../Assests/skills/TypeScript.png";

const allSkills = [
  { name: "HTML5", icon: htmlIcon, category: "Frontend" },
  { name: "CSS3", icon: cssIcon, category: "Frontend" },
  { name: "JavaScript", icon: jsIcon, category: "Frontend" },
  { name: "React.js", icon: ReactIcon, category: "Frontend" },
  { name: "TypeScript", icon: typeScriptIcon, category: "Frontend" },
  { name: "Tailwind CSS", icon: tailwindIcon, category: "Frontend" },
  { name: "BootStrap", icon: bootStrapIcon, category: "Frontend" },
  { name: "SASS", icon: sassIcon, category: "Frontend" },
  { name: "MUI", icon: muiIcon, category: "Frontend" },

  { name: "Node.js", icon: nodeIcon, category: "Backend" },
  { name: "MongoDB", icon: mongoIcon, category: "Backend" },
  { name: "MySQL", icon: sqlIcon, category: "Backend" },
  { name: "Java", icon: javaIcon, category: "Backend" },

  { name: "Git", icon: gitIcon, category: "Tools" },
  { name: "GitHub", icon: gitHubIcon, category: "Tools" },
  { name: "Docker", icon: dockerIcon, category: "Tools" },
  { name: "Postman", icon: postmanIcon, category: "Tools" },
  { name: "Jira", icon: jiraIcon, category: "Tools" },
];

const categories = ["All", "Frontend", "Backend", "Tools"];

// Variants for animations
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 10 },
  },
  exit: { opacity: 0, scale: 0.6, y: 30, transition: { duration: 0.2 } },
};

const About = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredSkills =
    activeFilter === "All"
      ? allSkills
      : allSkills.filter((skill) => skill.category === activeFilter);

  return (
    <section
      id="about"
      className="min-h-screen py-20 px-4 bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900"
    >
      {/* About Section */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <motion.img
          src={ProfilePic}
          alt="Profile"
          className="w-52 h-52 object-cover rounded-full shadow-xl ring-4 ring-yellow-400/40"
          initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 0.8 }}
        />

        <div className="text-center md:text-left">
          <motion.h2
            className="text-4xl font-bold mb-4 text-yellow-300"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-lg md:text-2xl font-light mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            ✨ I'm a passionate Frontend Developer with 2 years of experience
            building responsive and user-friendly web applications using
            React.js and JavaScript. I enjoy crafting clean, efficient code and
            turning ideas into interactive, real-world solutions.
          </motion.p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-16 max-w-5xl mx-auto">
        <motion.h3
          className="text-3xl font-semibold mb-6 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h3>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                activeFilter === cat
                  ? "bg-yellow-400 text-gray-900 shadow-lg"
                  : "bg-white/20 text-white hover:bg-yellow-300 hover:text-gray-900"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid with AnimatePresence */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={skillVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                whileHover={{ scale: 1.15, rotate: 3 }}
                className="flex flex-col items-center bg-white/10 rounded-xl p-4 shadow-lg hover:shadow-yellow-400/40 transition"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-16 h-16 object-contain mb-2 rounded-md"
                />
                <p className="text-sm text-white">{skill.name}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
