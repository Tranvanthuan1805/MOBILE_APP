import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HocVibeCode – Nền tảng Lập trình × AI #1 Việt Nam',
  description: 'Học lập trình, xây dựng website, tạo ứng dụng chuyên nghiệp với AI. Nền tảng giáo dục lập trình hàng đầu Việt Nam.',
  keywords: 'vibecode, học lập trình, AI, website, khóa học lập trình, vietnam',
  icons: { icon: '/favicon.ico', apple: '/icons/apple-touch-icon.png' },
  manifest: '/manifest.json',
  themeColor: '#7C3AED',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
