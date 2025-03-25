"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "ClinicFlow AI",
    link: "https://devpost.com/software/clinicflow-ai",
    image: "/clinicflow.png",
    description:
      "A voice‑powered AI assistant for student clinics that automates scheduling and patient triage through natural speech interactions.",
    technologies: ["Next.js", "Retell AI", "LangGraph", "MongoDB", "n8n"],
    achievements: [
      "Orchestrates multi‑agent workflows with Retell AI and LangGraph",
      "Provides real-time dashboards for patients, prescriptions, and appointments",
      "Integrated Twilio and OpenAI’s speech API to enhance patient experience",
    ],
  },
  {
    title: "ResQ",
    link: "https://devpost.com/software/resq-vqd3wl",
    image: "/resq.png",
    description:
      "An AI‑driven platform that trains emergency dispatchers through simulated scenarios, live call simulations, and GPT-4 analysis.",
    technologies: ["Python", "Flask", "React", "Twilio", "Retell"],
    achievements: [
      "Used GPT-4 to analyze dispatcher conversations and provide performance insights",
      "Integrated Twilio for realistic call simulations and Retell for automated feedback",
      "Developed a React front end and Flask back end for scenario logic",
    ],
  },
  {
    title: "Amulet",
    link: "https://devpost.com/software/a-9dhg30",
    image: "/amulet.png",
    description:
      "An AI‑powered caregiving assistant that uses Meta Ray‑Ban smart glasses and fine‑tuned Gemini models to interpret video and audio in real time.",
    technologies: ["JavaScript", "Python", "Gemini", "Meta Ray-Ban"],
    achievements: [
      "Won First Prize, Healthcare Track at Hacklytics 2025",
      "Leverages few-shot learning for rapid adaptation",
      "Provides real-time caregiving guidance via audio and video analysis",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>

        <motion.p
          className="text-secondary text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Here are some of my recent hackathon projects and achievements
        </motion.p>

        <div className="max-w-5xl mx-auto space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass-card hover-card rounded-xl border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="md:flex">
                <div className="md:w-1/4 relative overflow-hidden flex items-center justify-center p-4">
                  <motion.div
                    className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-100 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>

                <div className="md:w-3/4 p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                    <h3 className="text-2xl font-semibold text-primary">
                      {project.title}
                    </h3>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm px-4 py-2 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View on Devpost
                    </motion.a>
                  </div>

                  <p className="text-gray-600 mb-6">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-secondary mb-2">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + techIndex * 0.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-secondary mb-2">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {project.achievements.map(
                        (achievement, achievementIndex) => (
                          <motion.li
                            key={achievement}
                            className="flex items-center text-gray-600"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: index * 0.1 + achievementIndex * 0.1,
                            }}
                          >
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            {achievement}
                          </motion.li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
