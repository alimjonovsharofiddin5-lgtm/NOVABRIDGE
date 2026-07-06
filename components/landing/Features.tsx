'use client'

import { motion } from 'framer-motion'

const features = [
  {
    icon: '🤖',
    title: 'AI Teacher',
    description: 'Personalized learning with AI tutors available 24/7'
  },
  {
    icon: '📚',
    title: 'Digital Library',
    description: 'Access thousands of books, PDFs, and research papers'
  },
  {
    icon: '🔬',
    title: '3D Lab',
    description: 'Virtual experiments in Physics, Chemistry, and Biology'
  },
  {
    icon: '🎓',
    title: 'University AI',
    description: 'Get admission probabilities and university recommendations'
  },
  {
    icon: '💼',
    title: 'Marketplace',
    description: 'Buy/sell templates, websites, and AI prompts'
  },
  {
    icon: '💰',
    title: 'Freelance Jobs',
    description: 'Find remote work opportunities and earn money'
  }
]

export function Features() {
  return (
    <section id="features" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Powerful Features</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Everything you need to succeed in your education and career journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
