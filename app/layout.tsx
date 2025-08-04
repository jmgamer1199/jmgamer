import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { Navigation } from '@/components/Navigation'
import { ScrollProgress } from '@/components/ScrollProgress'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

const inter = Inter({ subsets: ['latin'] })

// Metadatos para SEO. Se pueden personalizar.
export const metadata: Metadata = {
  title: {
    template: '%s | Jmgamer',
    default: 'Jmgamer | Desarrollador de Software',
  },
  description: 'Portafolio de Jmgamer, un entusiasta creador de software y artista digital en formación.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <ScrollProgress />
          <Navigation />
          <div className="pt-16">
            {children}
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}