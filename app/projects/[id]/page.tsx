'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Github, Globe, ExternalLink } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const projectsData: Record<string, {
  title: string
  description: string
  image: string
  tech: string[]
  problem: string
  features: string[]
  github: string
  demo: string
  fullDescription: string
  challenges: string[]
  results: string[]
}> = {
  'digital-bookshelf': {
    title: 'Digital Bookshelf',
    description: 'A modern web app for managing and discovering digital books with an intuitive interface and powerful search capabilities.',
    image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=1200&h=600&fit=crop',
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
    fullDescription: 'Digital Bookshelf is a comprehensive web application designed for book enthusiasts who want to organize, discover, and manage their digital reading collection. The application provides an intuitive interface that makes it easy to add, categorize, and track reading progress.',
    challenges: [
      'Implementing efficient search and filtering across large datasets',
      'Creating a responsive design that works across all devices',
      'Managing state for multiple user collections and preferences',
      'Optimizing performance for smooth interactions',
    ],
    results: [
      'Successfully launched with 100+ concurrent users',
      '95+ Lighthouse performance score',
      'Positive user feedback on UX and design',
      'Clean, maintainable codebase for future enhancements',
    ],
  },
  'taskflow-pro': {
    title: 'TaskFlow Pro',
    description: 'Enterprise-grade task management platform designed for teams to collaborate efficiently and manage projects seamlessly.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
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
    fullDescription: 'TaskFlow Pro is an enterprise-grade task management platform that simplifies team collaboration and project tracking. With an intuitive kanban interface and real-time updates, teams can stay organized and maintain visibility across all ongoing projects.',
    challenges: [
      'Building real-time collaboration features',
      'Designing an intuitive kanban interface',
      'Managing complex state for team workspaces',
      'Ensuring data consistency across multiple clients',
    ],
    results: [
      'Intuitive interface requiring minimal training',
      'Real-time synchronization between team members',
      'Improved team productivity and project visibility',
      'Scalable architecture for growing teams',
    ],
  },
  'todo-app': {
    title: 'Todo App',
    description: 'A beautifully designed todo application with smart features to help you stay organized and productive.',
    image: 'https://images.unsplash.com/photo-1533615552471-38ec1f36266e?w=1200&h=600&fit=crop',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Local Storage'],
    problem: 'Users needed a simple yet elegant way to manage daily tasks with a distraction-free interface.',
    features: [
      'Intuitive task creation and management',
      'Smart categorization system',
      'Progress tracking',
      'Dark mode support',
    ],
    github: 'https://github.com/abelabd/to-do-app',
    demo: '#',
    fullDescription: 'A minimalist todo application that focuses on simplicity and usability. The app provides just the right amount of features to keep users productive without overwhelming them with options.',
    challenges: [
      'Creating a minimal yet powerful interface',
      'Implementing persistent storage',
      'Ensuring smooth animations and transitions',
      'Maintaining simplicity while adding useful features',
    ],
    results: [
      'Clean, minimal design that\'s easy to use',
      'Smooth animations and transitions',
      'Persistent data storage for seamless experience',
      'Positive user feedback on design and usability',
    ],
  },
}

export default function ProjectDetail() {
  const params = useParams()
  const projectId = params.id as string
  const project = projectsData[projectId]

  if (!project) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Project not found</h1>
          <Link href="/#projects" className="text-primary hover:underline">
            Back to projects
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <article className="pt-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative h-96 md:h-[500px] overflow-hidden bg-muted"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </motion.div>

        <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
            >
              <ArrowLeft size={20} />
              Back to projects
            </Link>
          </motion.div>

          {/* Title & Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-foreground/60 text-balance">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-sm px-4 py-2 rounded-full bg-primary/10 text-primary font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-16 pb-16 border-b border-border"
          >
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-card border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:border-primary/50 transition-colors"
            >
              <Github size={20} />
              View Code
            </a>
            {project.demo !== '#' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                <Globe size={20} />
                Live Demo
                <ExternalLink size={18} />
              </a>
            )}
          </motion.div>

          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Overview</h2>
            <p className="text-foreground/70 leading-relaxed text-lg">
              {project.fullDescription}
            </p>
          </motion.div>

          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">The Problem</h3>
              <p className="text-foreground/70 leading-relaxed">
                {project.problem}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">Key Features</h3>
              <ul className="space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-foreground/70">
                    <span className="text-primary text-xl leading-none">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Challenges & Results */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">Challenges</h3>
              <ul className="space-y-3">
                {project.challenges.map((challenge) => (
                  <li key={challenge} className="flex items-start gap-3 text-foreground/70">
                    <span className="text-secondary text-xl leading-none">⚡</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">Results</h3>
              <ul className="space-y-3">
                {project.results.map((result) => (
                  <li key={result} className="flex items-start gap-3 text-foreground/70">
                    <span className="text-accent text-xl leading-none">✨</span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="py-12 text-center border-t border-border"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Interested in working together?
            </h3>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
