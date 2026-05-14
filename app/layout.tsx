import type { Metadata, Viewport } from 'next'
import './globals.css'

const SITE_URL = 'https://hocvibecode.vercel.app'
const SITE_NAME = 'VibeCode — Học Lập trình AI #1 Việt Nam'

export const viewport: Viewport = {
  themeColor: '#F97316',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'VibeCode — Học Vibe Coding & Lập trình AI #1 Việt Nam',
    template: '%s | VibeCode',
  },
  description: 'Học Vibe Coding — phong cách lập trình kết hợp AI đang thịnh hành nhất 2025-2026. Khóa học lập trình AI, tạo website, plugin WordPress, chatbot GPT. Cộng đồng 1,200+ dev Việt Nam.',
  keywords: [
    'vibe coding', 'vibecoding', 'vibe code', 'học vibe coding',
    'lập trình AI', 'học lập trình AI', 'lập trình với AI',
    'khóa học lập trình AI Việt Nam', 'học lập trình online',
    'tạo website bằng AI', 'tạo app bằng AI', 'AI coding',
    'Claude AI lập trình', 'ChatGPT lập trình', 'Cursor AI',
    'học lập trình web', 'lập trình web Việt Nam',
    'tạo plugin WordPress AI', 'tạo extension Chrome AI',
    'chatbot AI Python', 'khóa học AI Việt Nam',
    'vibecode', 'hocvibecode', 'lập trình AI 2025', 'lập trình AI 2026',
  ],
  authors: [{ name: 'VibeCode Team', url: SITE_URL }],
  creator: 'VibeCode',
  publisher: 'VibeCode',
  category: 'Education',
  classification: 'Online Learning Platform',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'VibeCode — Học Vibe Coding & Lập trình AI #1 Việt Nam',
    description: 'Học Vibe Coding — phong cách lập trình kết hợp AI đang thịnh hành nhất. Khóa học thực tế, cộng đồng 1,200+ dev, hỗ trợ 24/7.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VibeCode — Học Vibe Coding & Lập trình AI #1 Việt Nam',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VibeCode — Học Vibe Coding & Lập trình AI #1 Việt Nam',
    description: 'Học Vibe Coding — phong cách lập trình kết hợp AI đang thịnh hành nhất. Cộng đồng 1,200+ dev Việt Nam.',
    images: ['/og-image.png'],
    creator: '@vibecode_vn',
  },
  alternates: {
    canonical: SITE_URL,
    languages: { 'vi-VN': SITE_URL },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/icons/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
  verification: {
    google: 'ADD_YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN_HERE',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'VibeCode',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/icons/icon-512.png`,
        width: 512,
        height: 512,
      },
      description: 'Nền tảng học Vibe Coding và lập trình AI hàng đầu Việt Nam',
      foundingDate: '2025',
      areaServed: 'VN',
      knowsAbout: ['Vibe Coding', 'Lập trình AI', 'Web Development', 'WordPress', 'Python AI', 'Chrome Extension'],
      sameAs: [
        'https://github.com/Tranvanthuan1805',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'VibeCode',
      description: 'Nền tảng học Vibe Coding và lập trình AI #1 Việt Nam',
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'vi-VN',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${SITE_URL}/courses?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'EducationalOrganization',
      '@id': `${SITE_URL}/#edu`,
      name: 'VibeCode Academy',
      url: SITE_URL,
      description: 'Học viện lập trình AI và Vibe Coding hàng đầu Việt Nam với 1,200+ học viên',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Khóa học Lập trình AI',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Tạo trò chơi HTML với AI' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Lập trình Plugin WordPress với AI' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Lập trình Web chuyên sâu với AI' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Chatbot AI với Python & GPT' } },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Vibe Coding là gì?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vibe Coding là phương pháp lập trình hiện đại kết hợp với AI (như Claude, ChatGPT, Cursor) để tạo ra phần mềm nhanh hơn và hiệu quả hơn. Thay vì viết từng dòng code thủ công, bạn mô tả ý tưởng và AI sẽ tạo code cho bạn.',
          },
        },
        {
          '@type': 'Question',
          name: 'Học Vibe Coding có cần biết lập trình trước không?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Không cần! VibeCode có các khóa học từ cơ bản đến nâng cao, phù hợp cho người mới hoàn toàn. Chỉ cần có máy tính và kết nối internet là có thể bắt đầu ngay.',
          },
        },
        {
          '@type': 'Question',
          name: 'Khóa học Vibe Coding tốt nhất ở đâu?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'VibeCode (hocvibecode.vercel.app) là nền tảng học Vibe Coding hàng đầu Việt Nam với 6+ khóa học thực tế, cộng đồng 1,200+ dev và 3 buổi học miễn phí để bạn trải nghiệm trước.',
          },
        },
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
