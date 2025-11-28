import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Marketing Agency',
  description: 'Your digital transformation partner delivering innovative solutions for web design, SEO, and marketing.',
}

export default function Home() {
  return (
    <main>
      <h1>Welcome to Digital Marketing Agency</h1>
      <p>Your digital transformation partner</p>
    </main>
  )
}
