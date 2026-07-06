import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export default function MarketplacePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20 min-h-[calc(100vh-200px)]">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">🛍️ Marketplace</h1>
          <button className="btn-primary">Sell Item</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="card">
              <div className="w-full h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mb-4"></div>
              <h3 className="text-lg font-bold text-white mb-2">Premium Website Template</h3>
              <p className="text-slate-400 text-sm mb-3">Beautiful and responsive design</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-green-400">$49</span>
                <button className="btn-primary px-4 py-1 text-sm">Buy</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
