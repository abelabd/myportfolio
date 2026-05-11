'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="text-2xl font-bold text-primary">
              AD
            </Link>
            <p className="text-foreground/60 text-sm">
              Frontend Engineer & Designer
            </p>
          </div>

          <p className="text-foreground/60 text-sm text-center md:text-right">
            © {currentYear} Abel Desta. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
