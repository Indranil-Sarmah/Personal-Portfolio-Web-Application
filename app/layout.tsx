import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/components/header";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Indranil Sarmah',
  description: 'Portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-50 relative`}>
        <div className='bg-[#e1e5f6] -z-10 absolute top-[-6] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]' ></div>
        <div className='bg-[#b2bfe4] -z-10 absolute top-[-1] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
        <Header />
        {children}
        
        </body>
    </html>
  )
}
