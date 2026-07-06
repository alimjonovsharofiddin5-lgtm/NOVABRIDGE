'use client'

import { motion } from 'framer-motion'

const recentActivities = [
  {
    type: 'course',
    title: 'Completed Python Basics',
    time: '2 hours ago',
    icon: '✅'
  },
  {
    type: 'tutor',
    title: 'AI helped with Math problem',
    time: '4 hours ago',
    icon: '💬'
  },
  {
    type: 'marketplace',
    title: 'Sold HTML template for $45',
    time: '1 day ago',
    icon: '💰'
  },
  {
    type: 'job',
    title: 'Applied for Web Dev freelance job',
    time: '2 days ago',
    icon: '📤'
  }
]

export function ActivityFeed() {
  return (
    <div className="card">
      <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
      <div className="space-y-4">
        {recentActivities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-center gap-4 pb-4 border-b border-slate-700/50 last:border-0"
          >
            <div className="text-2xl">{activity.icon}</div>
            <div className="flex-1">
              <p className="text-white font-medium">{activity.title}</p>
              <p className="text-slate-400 text-sm">{activity.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
