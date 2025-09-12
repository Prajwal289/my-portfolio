// src/sections/Projects.jsx
import { motion } from "framer-motion";
import techademyOne from "../Assests/techademyOne.png";
import b2a from "../Assests/TechCampus.jpg";
import lxp from "../Assests/B2A.png";


const projects = [
   {
    title: "TechademyOne",
    description: [
      "Configured SAML 2.0 authentication using Keycloak as Identity Provider and enforced role-based access control across the application.",
      "Includes sales analytics and charts.",
      "Real-time updates using SignalR.",
      "Role-based access control.",
      "Connected to SQL database.",
    ],
    tech: ["React.js", "Redux", "Redux-Saga", "JavaScript"],
    link: "#",
    image: techademyOne,
  },
   {
    title: "Techademy Campus (B2A)",
    description: [
      "Built with React and Tailwind CSS.",
      "Smooth animations using Framer Motion.",
      "Fully responsive across devices.",
      "Deployed on GitHub Pages.",
      "Includes project showcase & contact form.",
    ],
    tech: ["React.js", "Redux", "Redux-Saga", "JavaScript"],
    link: "#",
    image: b2a, // Optional image
  },
  {
    title: "Techademy B2B",
    description: [
      "Automates internal workflows.",
      "Built with Power Apps and Power Automate.",
      "Integrates with SharePoint lists.",
      "Uses Azure services for security.",
      "Low-code/no-code development approach.",
    ],
    tech: ["React.js", "Redux", "Redux-Saga", "JavaScript"],
    link: "#",
    image: lxp,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden p-0 relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover border border-gray-200 rounded-t-lg transition-transform duration-500 group-hover:scale-110"
                />            
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-indigo-600">
                  {project.title}
                </h3>

                {/* Description as bullet points */}
                <ul className="text-gray-600 mb-4 list-disc list-inside space-y-1">
                  {project.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 text-sm text-indigo-500">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-indigo-100 px-2 py-1 rounded transition-transform duration-300 hover:scale-110"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Projects;
