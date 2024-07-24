import Navbar from '@/components/Navbar/index.jsx'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nontonin Anime',
  description: 'Anime Sub Indo Gratis',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar/>
        <div  className="px-5 lg:px-20">
        {children}
        </div>
      </body>
    </html>
  )
}
