import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Danilo Mosqueira | Portafolio',
  description: 'Desarrollador Backend especializado en Python y Azure',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        {/* <div className="min-h-screen flex flex-col items-center justify-center p-8 gap-12 bg-white text-gray-800"> */}  
        {children}
      </body>
    </html>
  )
}
