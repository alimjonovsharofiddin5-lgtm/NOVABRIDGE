import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export default function LabsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20 min-h-[calc(100vh-200px)]">
        <h1 className="text-4xl font-bold text-white mb-8">🔬 Virtual 3D Labs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {['Physics Lab', 'Chemistry Lab', 'Biology Lab', 'Electronics Lab'].map((lab) => (
            <div key={lab} className="card cursor-pointer hover:shadow-2xl transition-all">
              <div className="w-full h-48 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg mb-4 flex items-center justify-center text-6xl">
                🧪
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{lab}</h3>
              <p className="text-slate-400 mb-4">Interactive experiments and simulations</p>
              <button className="btn-primary w-full">Enter Lab</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
