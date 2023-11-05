import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Joaquim',
  description: 'Página pessoal de Joaquim Pessôa Filho',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
      <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
