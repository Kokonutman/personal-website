'use client'

import { motion } from 'framer-motion'
import { 
  DiJava, DiPython, DiJavascript, DiHtml5, DiCss3, DiReact,
  DiMongodb
} from 'react-icons/di'
import {
  SiCplusplus, SiC, SiR, SiNextdotjs, SiTailwindcss, SiFlask,
  SiOpenai, SiTwilio, SiVisualstudiocode, SiGit, SiGithub,
  SiGooglecloud, SiVercel
} from 'react-icons/si'
import { BsRobot } from 'react-icons/bs'
import { FaCode } from 'react-icons/fa'

const iconColors = {
  DiJava: '#007396',
  SiCplusplus: '#00599C',
  DiPython: '#3776AB',
  SiC: '#A8B9CC',
  DiJavascript: '#F7DF1E',
  DiHtml5: '#E34F26',
  DiCss3: '#1572B6',
  SiR: '#276DC3',
  DiReact: '#61DAFB',
  SiNextdotjs: '#000000',
  SiTailwindcss: '#06B6D4',
  BsRobot: '#FF6B6B',
  FaCode: '#4A4A4A',
  SiFlask: '#000000',
  SiOpenai: '#412991',
  SiVercel: '#000000',
  SiGooglecloud: '#4285F4',
  SiTwilio: '#F22F46',
  SiVisualstudiocode: '#007ACC',
  SiGit: '#F05032',
  SiGithub: '#181717',
  DiMongodb: '#47A248'
}

// Organize skills into rows with React and React Native separated
const rows = [
  [
    { name: 'Java', icon: DiJava },
    { name: 'Python', icon: DiPython },
    { name: 'C++', icon: SiCplusplus },
    { name: 'C', icon: SiC },
    { name: 'JavaScript', icon: DiJavascript },
    { name: 'HTML', icon: DiHtml5 },
    { name: 'CSS', icon: DiCss3 },
    { name: 'React', icon: DiReact }
  ],
  [
    { name: 'MongoDB', icon: DiMongodb },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Flask', icon: SiFlask },
    { name: 'OpenAI', icon: SiOpenai },
    { name: 'GitHub', icon: SiGithub },
    { name: 'Git', icon: SiGit },
    { name: 'VS Code', icon: SiVisualstudiocode }
  ],
  [
    { name: 'R', icon: SiR },
    { name: 'LangGraph', icon: BsRobot },
    { name: 'n8n', icon: FaCode },
    { name: 'React Native', icon: DiReact },
    { name: 'Render', icon: SiVercel },
    { name: 'Google Gemini', icon: SiGooglecloud },
    { name: 'Twilio', icon: SiTwilio },
    { name: 'GitHub Copilot', icon: BsRobot }
  ]
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold text-center mb-4 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & Technologies
        </motion.h2>
        
        <div className="max-w-6xl mx-auto space-y-16 mt-16">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="relative">
              <motion.div
                className="flex space-x-12 absolute"
                animate={{
                  x: rowIndex % 2 === 0 ? [0, -1920] : [-1920, 0]
                }}
                transition={{
                  x: {
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
              >
                {/* Triple the row to ensure smooth infinite scroll */}
                {[...row, ...row, ...row].map((skill, index) => (
                  <motion.div
                    key={`${skill.name}-${index}`}
                    className="flex-shrink-0 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    whileHover={{ scale: 1.1 }}
                  >
                    <skill.icon 
                      className="w-20 h-20" 
                      style={{ 
                        color: iconColors[skill.icon.name as keyof typeof iconColors] || '#4A4A4A'
                      }} 
                    />
                  </motion.div>
                ))}
              </motion.div>
              {/* Create empty space for the scrolling content */}
              <div className="h-28"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}