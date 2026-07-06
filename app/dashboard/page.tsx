import { DashboardGrid } from '@/components/dashboard/DashboardGrid'
import { ActivityFeed } from '@/components/dashboard/ActivityFeed'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Welcome back! 👋</h1>
          <p className="text-slate-400">Here's what's happening in your learning journey</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <DashboardGrid />
          </div>
          <div>
            <ActivityFeed />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
