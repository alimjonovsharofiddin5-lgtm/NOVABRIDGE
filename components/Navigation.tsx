'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export function Navigation() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            NOVABRIDGE
          </Link>

          <div className="hidden md:flex gap-8">
            <Link href="/" className="hover:text-blue-500 transition">
              Home
            </Link>
            <Link href="/#features" className="hover:text-blue-500 transition">
              Features
            </Link>
            <Link href="/#modules" className="hover:text-blue-500 transition">
              Modules
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <Link href="/login" className="btn-primary">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
