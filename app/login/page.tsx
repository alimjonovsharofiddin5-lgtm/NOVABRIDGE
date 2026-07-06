import { LoginForm } from '@/components/auth/LoginForm'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <div className="flex items-center justify-center min-h-[calc(100vh-120px)] px-4">
        <LoginForm />
      </div>
      <Footer />
    </main>
  )
}
