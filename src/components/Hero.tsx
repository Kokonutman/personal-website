"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";

export default function Hero() {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Kokonutman", label: "GitHub" },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/arjun-k-iyer/",
      label: "LinkedIn",
    },
    {
      icon: SiDevpost,
      href: "https://devpost.com/arjun-iyer42",
      label: "Devpost",
    },
  ];

  return (
    <section className="min-h-[100vh] relative flex items-center page-gradient pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between gap-12">
          {/* Photo - Shown first on mobile */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
            <motion.div
              className="relative w-64 h-64 md:w-96 md:h-96"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl" />
              <div className="relative w-full h-full rounded-full border-4 border-white shadow-2xl overflow-hidden">
                <img
                  src="/photo.jpg"
                  alt="Arjun Iyer"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Text content - Shown second on mobile */}
          <div className="w-full md:w-1/2 text-center md:text-left relative z-10 order-2 md:order-1">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 gradient-text leading-normal md:leading-tight py-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Arjun Iyer
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-secondary mb-8 inline-block leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Freshman at UMD studying Computer Science and Mathematics
            </motion.p>

            <motion.p
              className="text-gray-600 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I’m Arjun, an aspiring computer scientist specializing in AI,
              machine learning, and quantum information. I love turning
              cutting-edge ideas into real-world projects, from AI-powered
              healthcare to emergency response systems.
            </motion.p>

            <motion.div
              className="flex justify-center md:justify-start gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <motion.a
                href="#contact"
                className="gradient-bg text-white px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>

              <motion.a
                href="#projects"
                className="bg-white border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/5 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
