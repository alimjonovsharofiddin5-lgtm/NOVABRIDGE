'use client'

import { motion } from 'framer-motion'

const modules = [
  {
    number: '01',
    title: 'AI Education',
    description: 'AI Teachers, Homework Help, Quiz Generator, Exam Prep, 3D Labs, Digital Library',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    number: '02',
    title: 'Marketplace',
    description: 'Buy/Sell Websites, Templates, AI Prompts, Freelance Services',
    color: 'from-purple-500 to-pink-500'
  },
  {
    number: '03',
    title: 'University AI',
    description: 'Admission Probability, University Recommendations, Tuition Analysis',
    color: 'from-green-500 to-emerald-500'
  },
  {
    number: '04',
    title: 'Freelance Jobs',
    description: 'Web Development, Graphic Design, Video Editing, Writing, Programming',
    color: 'from-orange-500 to-red-500'
  }
]

export function Modules() {
  return (
    <section id="modules" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Our Modules</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Everything integrated into one powerful platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group cursor-pointer"
            >
              <div className={`text-5xl font-bold bg-gradient-to-r ${module.color} bg-clip-text text-transparent mb-4`}>
                {module.number}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                {module.title}
              </h3>
              <p className="text-slate-300">{module.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
