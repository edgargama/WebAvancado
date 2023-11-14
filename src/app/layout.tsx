import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Projeto API',
  description: 'Criando o Projeto',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <h1> Sistema Api</h1>

          <nav>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/Users">Usuario</Link></li>
              <li><Link href="/Login">Login</Link></li>
              
            </ul>
          </nav>
        
        
        {children}</body>
    </html>
  )
}
