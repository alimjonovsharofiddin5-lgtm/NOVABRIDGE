import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20 min-h-[calc(100vh-200px)]">
        <h1 className="text-4xl font-bold text-white mb-8">My Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((course) => (
            <div key={course} className="card">
              <div className="w-full h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold text-white mb-2">Course {course}: Python Basics</h3>
              <div className="w-full bg-slate-700/50 rounded-full h-2 mb-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${Math.random() * 100}%` }}></div>
              </div>
              <p className="text-slate-400 text-sm">75% completed</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
