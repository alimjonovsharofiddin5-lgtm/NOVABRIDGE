'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const jokeFeatures = [
  {
    emoji: '😄',
    title: 'Random Jokes',
    description: 'Get thousands of random jokes from multiple categories'
  },
  {
    emoji: '⚡',
    title: 'Instant Delivery',
    description: 'Fast API responses with smooth loading animations'
  },
  {
    emoji: '📚',
    title: 'Multiple Categories',
    description: 'Programming, general, knock-knock, and more'
  },
  {
    emoji: '💾',
    title: 'History Tracking',
    description: 'View your recently generated jokes anytime'
  },
  {
    emoji: '🎨',
    title: 'Beautiful UI',
    description: 'Modern design with dark mode and animations'
  },
  {
    emoji: '🔄',
    title: 'Share Ready',
    description: 'Copy and share jokes with your friends
  }
]

export function JokesFeatures() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Joke Generator Features</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Everything you need to laugh and have fun
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {jokeFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card"
            >
              <div className="text-5xl mb-4">{feature.emoji}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <Link href="/jokes" className="btn-primary text-lg inline-block">
            Start Laughing Now 😄
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
