'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-3xl text-center"
      >
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance"
        >
          Building Premium{' '}
          <span className="text-primary">Web Experiences</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-xl md:text-2xl text-foreground/60 mb-8 text-balance font-light"
        >
          Frontend engineer crafting elegant, performant interfaces with React & Next.js. I focus on clean code, thoughtful design, and user-centered solutions.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Link
            href="#projects"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            View My Work
            <ArrowRight size={18} />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 border border-border bg-card text-foreground px-8 py-3 rounded-lg font-medium hover:bg-card/50 transition-colors"
          >
            Get in Touch
          </Link>
        </motion.div>

        <motion.div
          variants={item}
          className="flex justify-center gap-6"
        >
          <a
            href="https://github.com/abelabd"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 hover:bg-card rounded-lg transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} className="text-foreground/60 hover:text-primary transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/abel-desta-385526178/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 hover:bg-card rounded-lg transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} className="text-foreground/60 hover:text-primary transition-colors" />
          </a>
          <a
            href="mailto:abeldesta140@gmail.com"
            className="p-3 hover:bg-card rounded-lg transition-colors"
            aria-label="Email"
          >
            <Mail size={24} className="text-foreground/60 hover:text-primary transition-colors" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
