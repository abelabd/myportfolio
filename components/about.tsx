'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="space-y-6 text-lg text-foreground/70">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="leading-relaxed"
            >
              I&apos;m a passionate frontend engineer with a strong foundation in building clean, performant, and user-centered web applications. My journey in tech has been driven by a desire to create interfaces that not only look beautiful but also solve real problems.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="leading-relaxed"
            >
              With expertise in React and Next.js, I specialize in building scalable applications with modern development practices. I believe in writing clean, maintainable code and paying meticulous attention to user experience and performance.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="leading-relaxed"
            >
              My approach combines technical excellence with design thinking. I&apos;m constantly learning, experimenting with new technologies, and pushing the boundaries of what&apos;s possible on the web.
            </motion.p>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 pt-16 border-t border-border"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Education
          </h3>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-1">
                  BSc in Information Technology
                </h4>
                <p className="text-foreground/60">
                  Mekelle Institute of Technology • 2021
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-1">
                  BA in Business Management
                </h4>
                <p className="text-foreground/60">
                  Rift Valley University College • 2023
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
