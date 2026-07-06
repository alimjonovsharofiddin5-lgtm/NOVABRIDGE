import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export default function JobsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20 min-h-[calc(100vh-200px)]">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">💼 Freelance Jobs</h1>
          <button className="btn-primary">Post Job</button>
        </div>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((job) => (
            <div key={job} className="card">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Build a React Web Application</h3>
                  <p className="text-slate-400">by Company XYZ</p>
                </div>
                <span className="text-green-400 font-bold">$500-$1000</span>
              </div>
              <p className="text-slate-400 mb-4">We need an experienced React developer to build a custom web application with authentication, database, and payment integration.</p>
              <div className="flex gap-2 flex-wrap mb-4">
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">MongoDB</span>
              </div>
              <button className="btn-primary">Apply Now</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
