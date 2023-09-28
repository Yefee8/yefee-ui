import Header from '@/components/Header/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "500", "700"] })

export const metadata: Metadata = {
  title: 'Yefee-UI ~ A Lightweight, Modern, Open Source React UI library',
  description: 'Yefee-UI is a lightweight, modern, open source React UI library. Made By Yefee.',
  authors: [{ name: 'Yefee', url: 'https://yefees-portfolio.vercel.app' }],
  applicationName: 'Yefee-UI',
  keywords: 'yefee-ui, yefee, react library, react lib, yefee-ui react, yefee-ui next.js, made by yefee',
  viewport: 'width=device-width, initial-scale=1'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <div className="flex flex-col gap-16 mx-auto !justify-center !items-center container">
          {children}
        </div>
      </body>
    </html>
  )
}
