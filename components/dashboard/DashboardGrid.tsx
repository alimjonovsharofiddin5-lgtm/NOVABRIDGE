'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const dashboardCards = [
  {
    title: 'My Courses',
    icon: '📚',
    count: '5',
    link: '/dashboard/courses'
  },
  {
    title: 'AI Tutor',
    icon: '🤖',
    description: 'Chat with AI',
    link: '/dashboard/tutor'
  },
  {
    title: '3D Labs',
    icon: '🔬',
    description: 'Virtual experiments',
    link: '/dashboard/labs'
  },
  {
    title: 'Marketplace',
    icon: '🛍️',
    description: 'Buy & Sell',
    link: '/dashboard/marketplace'
  },
  {
    title: 'University AI',
    icon: '🎓',
    description: 'Get recommendations',
    link: '/dashboard/university'
  },
  {
    title: 'Freelance Jobs',
    icon: '💼',
    count: '12',
    link: '/dashboard/jobs'
  }
]

export function DashboardGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {dashboardCards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link href={card.link}>
            <div className="card cursor-pointer group h-40 flex flex-col justify-between">
              <div className="text-5xl group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition">
                  {card.title}
                </h3>
                {card.count && (
                  <p className="text-slate-400 text-sm">{card.count} active</p>
                )}
                {card.description && (
                  <p className="text-slate-400 text-sm">{card.description}</p>
                )}
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
