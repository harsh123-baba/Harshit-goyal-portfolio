import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Harshit's Portfolio",
  description: 'Built on NextJS + Sanity',
}

export default  async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

 

  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-10 bg-[#F7FAF7]">
        
          <header className='flex items-center justify-between'>
            <Link 
              href="/" 
              className = "bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold">
                Harshit
            </Link>
            <div className='flex items-center gap-5 text-sm text-gray-600'>

              <Link href = '/about'>About</Link>
              <Link href = "/skills">Skills</Link>
              <Link href = "/contact">Contact</Link>
              <Link href = "/experience">Experience</Link>

            </div>
          </header>
        <main className='py-20'>
          {children}
        </main>
        
        
        </body>
    </html>
  )
}
