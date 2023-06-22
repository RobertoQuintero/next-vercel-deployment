import { Inter } from 'next/font/google'
import { MainLayout } from '@/components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainLayout>
      <code className='code'>pages/index.tsx</code>
    </MainLayout>
  )
}
