'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

interface Joke {
  id: number
  type: string
  setup: string
  delivery: string
  category: string
}

export default function JokePage() {
  const [joke, setJoke] = useState<Joke | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [jokeHistory, setJokeHistory] = useState<Joke[]>([])

  const fetchJoke = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=twopart')
      if (!response.ok) {
        throw new Error('Failed to fetch joke')
      }
      const data = await response.json()
      
      if (data.error) {
        throw new Error('Could not retrieve joke')
      }

      const newJoke: Joke = {
        id: Date.now(),
        type: data.type,
        setup: data.setup || data.joke,
        delivery: data.delivery || '',
        category: data.category || 'General'
      }

      setJoke(newJoke)
      setJokeHistory(prev => [newJoke, ...prev.slice(0, 9)])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20 min-h-[calc(100vh-200px)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            😄 Random Joke Generator
          </h1>
          <p className="text-xl text-slate-300">
            Get a random joke from a massive collection powered by JokeAPI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Joke Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="card min-h-[300px] flex flex-col justify-between"
            >
              {joke ? (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold">
                      {joke.category}
                    </span>
                    <span className="text-sm text-slate-400">
                      Type: {joke.type}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-slate-400 text-sm mb-2">Setup:</p>
                      <p className="text-white text-lg font-semibold">{joke.setup}</p>
                    </div>

                    {joke.delivery && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="pt-4 border-t border-slate-700"
                      >
                        <p className="text-slate-400 text-sm mb-2">Punchline:</p>
                        <p className="text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-lg font-bold">
                          {joke.delivery}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-center">
                  <div>
                    <p className="text-3xl mb-4">😄</p>
                    <p className="text-slate-400">
                      Click the button below to get your first joke!
                    </p>
                  </div>
                </div>
              )}
            </motion.div>

            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300"
              >
                ⚠️ {error}
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={fetchJoke}
              disabled={loading}
              className="w-full mt-6 btn-primary py-4 text-lg font-semibold disabled:opacity-50"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="animate-spin">⏳</span> Getting a joke...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  🎲 Get Next Joke
                </span>
              )}
            </motion.button>
          </div>

          {/* History Sidebar */}
          <div className="card">
            <h2 className="text-2xl font-bold text-white mb-6">📜 Joke History</h2>
            {jokeHistory.length === 0 ? (
              <p className="text-slate-400 text-center py-8">
                No jokes yet. Start generating!
              </p>
            ) : (
              <div className="space-y-3 max-h-[500px] overflow-y-auto">
                {jokeHistory.map((h, index) => (
                  <motion.div
                    key={h.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition cursor-pointer group"
                    onClick={() => setJoke(h)}
                  >
                    <p className="text-sm text-slate-300 group-hover:text-white transition line-clamp-2">
                      {h.setup}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">{h.category}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="card text-center">
            <div className="text-4xl mb-3">🌐</div>
            <h3 className="text-lg font-bold text-white mb-2">API Powered</h3>
            <p className="text-slate-400 text-sm">
              Uses JokeAPI v2 for unlimited jokes
            </p>
          </div>
          <div className="card text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-lg font-bold text-white mb-2">Lightning Fast</h3>
            <p className="text-slate-400 text-sm">
              Instant joke delivery with smooth animations
            </p>
          </div>
          <div className="card text-center">
            <div className="text-4xl mb-3">💾</div>
            <h3 className="text-lg font-bold text-white mb-2">History Saved</h3>
            <p className="text-slate-400 text-sm">
              Access your 10 most recent jokes anytime
            </p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  )
}
