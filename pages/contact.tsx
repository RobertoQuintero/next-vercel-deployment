import { Inter } from 'next/font/google'
import { MainLayout } from '@/components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  return (
    <MainLayout>
      <code className='code'>pages/contact.tsx</code>
    </MainLayout>
    
  )
}
