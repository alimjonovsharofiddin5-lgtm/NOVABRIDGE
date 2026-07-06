import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export default function TutorPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20 min-h-[calc(100vh-200px)]">
        <h1 className="text-4xl font-bold text-white mb-8">🤖 AI Tutor</h1>
        <div className="card h-[600px] flex flex-col">
          <div className="flex-1 overflow-y-auto mb-4 space-y-4">
            <div className="flex justify-start">
              <div className="bg-blue-500/20 text-white p-4 rounded-lg max-w-xs">
                Hello! I'm your AI tutor. How can I help you today?
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Ask me anything..."
              className="flex-1 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="btn-primary px-6">
              Send
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
