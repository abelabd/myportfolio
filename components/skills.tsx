'use client'

import { motion } from 'framer-motion'
import { Code2, Wrench, Lightbulb } from 'lucide-react'

const skillsData = [
  {
    category: 'Frontend',
    icon: Code2,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML/CSS'],
  },
  {
    category: 'Tools & Platform',
    icon: Wrench,
    skills: ['Git & GitHub', 'Vercel', 'VS Code', 'Figma', 'npm/pnpm', 'REST APIs'],
  },
  {
    category: 'Concepts',
    icon: Lightbulb,
    skills: ['Responsive Design', 'Performance Optimization', 'Component Architecture', 'UI/UX Principles', 'SEO', 'Accessibility'],
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-foreground/60 text-lg">
            A comprehensive overview of my technical capabilities and professional toolkit.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillsData.map((skillGroup) => {
            const IconComponent = skillGroup.icon
            return (
              <motion.div
                key={skillGroup.category}
                variants={item}
                className="p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <IconComponent size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {skillGroup.category}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {skillGroup.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-foreground/70"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
