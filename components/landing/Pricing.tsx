'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const plans = [
  {
    name: 'Free',
    price: '0',
    period: 'forever',
    features: [
      'Limited AI access',
      '5 quizzes per month',
      'Basic library access',
      'Community support'
    ],
    highlighted: false
  },
  {
    name: 'Pro Monthly',
    price: '29',
    period: 'month',
    features: [
      'Unlimited AI access',
      'Unlimited quizzes',
      'Full library access',
      'Priority support',
      '3D Labs access',
      'University AI',
      'Marketplace access'
    ],
    highlighted: true
  },
  {
    name: 'Pro Yearly',
    price: '290',
    period: 'year',
    features: [
      'Everything in Pro Monthly',
      'Save 17%',
      'Early access to new features',
      'Premium community',
      'Dedicated support'
    ],
    highlighted: false,
    badge: 'BEST VALUE'
  }
]

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Choose the perfect plan for your learning journey
          </p>

          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                billingCycle === 'yearly'
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              Yearly
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500/50 shadow-2xl scale-105'
                  : 'glass border-slate-700/50'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 right-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {plan.badge}
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">${plan.price}</span>
                <span className="text-slate-400 ml-2">/{plan.period}</span>
              </div>

              <button className={`w-full py-2 rounded-lg font-semibold mb-8 transition-all ${
                plan.highlighted
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg'
                  : 'bg-slate-700 text-white hover:bg-slate-600'
              }`}>
                Get Started
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-slate-300">
                    <span className="w-5 h-5 mr-3 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400 text-sm">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
