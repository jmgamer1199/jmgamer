import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { Analytics } from "@vercel/analytics/react"

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
          {/* Colocamos el ThemeSwitcher en una esquina fija */}
          <div className="fixed bottom-5 right-5 z-50">
            <ThemeSwitcher />
          </div>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}