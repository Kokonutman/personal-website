'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const navItems = [
  { label: 'About', href: '#' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' }
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm transition-all duration-300 ${
        scrolled ? 'border-b border-gray-200 shadow-sm' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <motion.a
            href="/"
            className="text-xl font-bold gradient-text py-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Arjun Iyer
          </motion.a>
          
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a 
                  href={item.href}
                  className="nav-link"
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
    </motion.header>
  )
}