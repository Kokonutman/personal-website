'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}