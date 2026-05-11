import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Abel Desta',
  description: 'Detailed overview of featured projects and work samples.',
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
