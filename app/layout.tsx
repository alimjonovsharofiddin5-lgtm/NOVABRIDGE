import type { Metadata } from 'next'
import { Providers } from '@/components/Providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'NOVABRIDGE - AI Educational Platform',
  description: 'Transform your learning with AI-powered education',
  viewport: 'width=device-width, initial-scale=1',
  authors: [{ name: 'NOVABRIDGE Team' }],
  keywords: ['education', 'AI', 'learning', 'courses', 'university'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="overflow-x-hidden">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
