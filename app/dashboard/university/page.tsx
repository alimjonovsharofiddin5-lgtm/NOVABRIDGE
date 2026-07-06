import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export default function UniversityPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20 min-h-[calc(100vh-200px)]">
        <h1 className="text-4xl font-bold text-white mb-8">🎓 University AI</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="card mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">Get University Recommendations</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-white font-medium mb-2">GPA</label>
                  <input type="number" step="0.01" max="4" placeholder="3.8" className="w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-white" />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">SAT/ACT Score</label>
                  <input type="number" placeholder="1500" className="w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-white" />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Preferred Field</label>
                  <select className="w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-white">
                    <option>Computer Science</option>
                    <option>Engineering</option>
                    <option>Medicine</option>
                    <option>Business</option>
                  </select>
                </div>
                <button type="button" className="btn-primary w-full">Get Recommendations</button>
              </form>
            </div>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold text-white mb-4">Top Universities</h3>
            <div className="space-y-3">
              {['MIT', 'Stanford', 'Harvard', 'Berkeley', 'CMU'].map((uni) => (
                <div key={uni} className="p-3 bg-slate-800/50 rounded-lg">
                  <p className="text-white font-semibold">{uni}</p>
                  <p className="text-green-400 text-sm">92% match</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
