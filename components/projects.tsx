'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Globe } from 'lucide-react'

const projectsData = [
  {
    id: 'digital-bookshelf',
    title: 'Digital Bookshelf',
    description: 'A modern web app for managing and discovering digital books with an intuitive interface and powerful search capabilities.',
    image: 'https://img.freepik.com/free-vector/digital-library-concept_1284-12676.jpg?semt=ais_hybrid&w=740&q=80',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    problem: 'Book enthusiasts needed a streamlined way to organize and manage their digital library with a clean interface.',
    features: [
      'Intuitive book management system',
      'Advanced search and filtering',
      'Reading progress tracking',
      'Personal library organization',
    ],
    github: 'https://github.com/abelabd/digital-bookshelf',
    demo: '#',
  },
  {
    id: 'taskflow-pro',
    title: 'TaskFlow Pro',
    description: 'Enterprise-grade task management platform designed for teams to collaborate efficiently and manage projects seamlessly.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXEjJawo5rGOK3R_3sSRMlKJc0vvg8ZaFgQA&s',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    problem: 'Teams needed a lightweight yet powerful task management tool that doesn\'t require complex setup.',
    features: [
      'Real-time collaboration',
      'Intuitive kanban board',
      'Team workspace management',
      'Deadline tracking and reminders',
    ],
    github: 'https://github.com/abelabd/taskflow-pro',
    demo: '#',
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

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-foreground/60 text-lg">
            A selection of my recent work showcasing technical expertise and design thinking.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="group bg-background rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-foreground/60 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
                  >
                    View More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
