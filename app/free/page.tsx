import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ChatBot from '@/components/ChatBot'
import Link from 'next/link'
import { Play, BookOpen, Users, Clock, ChevronRight, Star, Gift } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Học Vibe Coding Miễn Phí — 3 Buổi Trực Tiếp | VibeCode',
  description: 'Xem miễn phí 3 buổi học Vibe Coding được ghi lại: Giới thiệu AI tools, Xây dựng dự án thực tế, Kỹ thuật nâng cao. Không cần đăng ký, xem ngay tại VibeCode.',
  keywords: [
    'học vibe coding miễn phí', 'vibe coding free', 'xem học lập trình AI miễn phí',
    'video học lập trình AI', 'vibe coding youtube', 'học AI coding không cần kinh nghiệm',
    'buổi học vibe coding', 'lập trình AI cho người mới',
  ],
  alternates: { canonical: 'https://hocvibecode.vercel.app/free' },
  openGraph: {
    title: 'Học Vibe Coding Miễn Phí — 3 Buổi Trực Tiếp | VibeCode',
    description: 'Xem miễn phí 3 buổi học Vibe Coding: AI tools, dự án thực tế, kỹ thuật nâng cao. Không cần đăng ký!',
    url: 'https://hocvibecode.vercel.app/free',
    type: 'website',
  },
}

const FREE_LESSONS = [
  {
    id: 1,
    title: 'Buổi 1 — Giới thiệu Vibe Coding & Công cụ AI',
    desc: 'Khám phá Vibe Coding là gì, tại sao nó thay đổi cách chúng ta lập trình và các công cụ AI mạnh nhất hiện nay như Claude, Cursor, v0.dev.',
    videoId: 'm3sssbK3ytM',
    duration: '~60 phút',
    topics: ['Vibe Coding là gì?', 'AI tools tốt nhất 2026', 'Thiết lập môi trường', 'Demo thực tế'],
  },
  {
    id: 2,
    title: 'Buổi 2 — Xây dựng dự án thực tế với AI',
    desc: 'Thực hành xây dựng một dự án web hoàn chỉnh từ đầu bằng AI. Học cách viết prompt hiệu quả và tối ưu code với sự hỗ trợ của AI.',
    videoId: 'iVmGVXCe_qQ',
    duration: '~60 phút',
    topics: ['Prompt engineering cơ bản', 'Tạo UI với AI', 'Debug bằng AI', 'Deploy lên Vercel'],
  },
  {
    id: 3,
    title: 'Buổi 3 — Nâng cao & Chia sẻ kinh nghiệm',
    desc: 'Đi sâu vào các kỹ thuật nâng cao, chia sẻ kinh nghiệm thực chiến và lộ trình học tập hiệu quả nhất để trở thành Vibe Coder chuyên nghiệp.',
    videoId: 'WAe3bxp8M6Y',
    duration: '~60 phút',
    topics: ['Kỹ thuật nâng cao', 'Tích hợp API', 'Thực chiến thực tế', 'Lộ trình tiếp theo'],
  },
]

export default function FreeLessonsPage() {
  return (
    <div className="min-h-screen" style={{ background: '#ffffff' }}>
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-14 relative overflow-hidden">
        <div className="grid-pattern absolute inset-0" />
        <div className="orb w-96 h-96 -top-20 -right-10" style={{ background: 'rgba(249,115,22,0.1)' }} />
        <div className="orb w-80 h-80 -bottom-10 -left-10" style={{ background: 'rgba(245,158,11,0.08)' }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 section-badge mb-5">
            <Gift size={13} /> Hoàn toàn miễn phí
          </div>
          <h1 className="text-5xl font-black text-white mb-4 leading-tight">
            Học <span className="gradient-text">Vibe Coding</span> miễn phí
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            3 buổi học trực tiếp được ghi lại — từ zero đến hero với AI. Không cần kinh nghiệm, chỉ cần sự tò mò.
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-500">
            <span className="flex items-center gap-1.5 glass px-4 py-2 rounded-full"><Play size={14} className="text-orange-400" /> 3 buổi học</span>
            <span className="flex items-center gap-1.5 glass px-4 py-2 rounded-full"><Clock size={14} className="text-orange-400" /> ~3 giờ video</span>
            <span className="flex items-center gap-1.5 glass px-4 py-2 rounded-full"><Users size={14} className="text-orange-400" /> 1,200+ đã xem</span>
            <span className="flex items-center gap-1.5 glass px-4 py-2 rounded-full"><Star size={14} className="text-yellow-400" /> 4.9/5 đánh giá</span>
          </div>
        </div>
      </section>

      {/* Video list */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {FREE_LESSONS.map((lesson) => (
            <div key={lesson.id} className="glass rounded-3xl overflow-hidden neon-border">
              {/* Video embed */}
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${lesson.videoId}`}
                  title={lesson.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 'none' }}
                />
              </div>

              {/* Info */}
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-1 rounded-lg text-xs font-black text-white" style={{ background: 'linear-gradient(135deg,#F97316,#F59E0B)' }}>
                        MIỄN PHÍ
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-500"><Clock size={11} /> {lesson.duration}</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-white leading-snug">{lesson.title}</h2>
                  </div>
                  <div className="text-4xl font-black" style={{ background: 'linear-gradient(135deg,#F97316,#F59E0B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    #{lesson.id}
                  </div>
                </div>

                <p className="text-gray-500 leading-relaxed mb-5">{lesson.desc}</p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {lesson.topics.map((topic) => (
                    <div key={topic} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#F97316' }} />
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.08), rgba(245,158,11,0.05))', borderTop: '1px solid rgba(249,115,22,0.15)' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="section-badge mb-5 mx-auto"><BookOpen size={13} /> Tiếp theo</div>
          <h2 className="text-4xl font-black text-white mb-4">
            Sẵn sàng học <span className="gradient-text">chuyên sâu hơn?</span>
          </h2>
          <p className="text-gray-500 text-lg mb-8 leading-relaxed">
            Đăng ký các khóa học trả phí để được hướng dẫn chi tiết, bài tập thực hành và hỗ trợ 1-1 từ instructor.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/courses" className="btn-brand px-8 py-4 rounded-2xl font-bold text-base flex items-center gap-2">
              <span className="relative z-10">Xem tất cả khóa học</span>
              <ChevronRight size={16} className="relative z-10" />
            </Link>
            <Link href="/register" className="px-8 py-4 rounded-2xl font-bold text-base glass glass-hover text-gray-600 border border-orange-200 transition-all">
              Đăng ký miễn phí
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </div>
  )
}
