import './globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'React World',
  description: 'React World',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
