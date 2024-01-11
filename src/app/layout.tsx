import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { ClerkProvider, UserButton } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
       <html lang="en">
      <body className={inter.className}>
        <main>
          <nav style={{ backgroundColor: 'purple',display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
            <Link href="/">
              Home
            </Link>
            <Link href="/list">
                  ADD
                </Link>
                <div>
                <UserButton afterSignOutUrl="/" />
              </div>
          </nav>
        </main>
        {children}
        </body>
    </html>
    </ClerkProvider>
     
    
  )
}
