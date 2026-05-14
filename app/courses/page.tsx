import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ChatBot from '@/components/ChatBot'
import Link from 'next/link'
import { BookOpen, Clock, Users, Star, Filter, Search, Play } from 'lucide-react'
import { COURSES } from './data'

const CATS = ['Tất cả', 'WordPress', 'Full-stack', 'Game Dev', 'Extension', 'AI/ML']

const fmt = (n: number) => n.toLocaleString('vi-VN') + '₫'

export default function CoursesPage() {
  return (
    <div className="min-h-screen" style={{ background: '#ffffff' }}>
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 relative overflow-hidden">
        <div className="grid-pattern absolute inset-0" />
        <div className="orb w-80 h-80 top-0 right-1/4" style={{ background: 'rgba(249,115,22,0.12)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-badge mb-4 mx-auto"><BookOpen size={13} /> Tất cả khóa học</div>
          <h1 className="text-5xl font-black text-white mb-4">
            Khóa học <span className="gradient-text">Lập trình AI</span>
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto mb-10">
            Từ cơ bản đến nâng cao, học lập trình bằng AI để tăng tốc độ và chất lượng code.
          </p>
          <div className="relative max-w-xl mx-auto">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input placeholder="Tìm kiếm khóa học..." className="input-brand pl-11 pr-4 py-4 text-base rounded-2xl w-full" />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 btn-brand px-5 py-2 rounded-xl text-sm font-bold">
              <span className="relative z-10">Tìm</span>
            </button>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="flex items-center gap-1.5 text-sm text-gray-500 font-medium"><Filter size={14} /> Lọc:</span>
            {CATS.map(cat => (
              <button key={cat}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${cat === 'Tất cả' ? 'btn-brand' : 'glass glass-hover text-gray-600'}`}>
                {cat === 'Tất cả' ? <span className="relative z-10">{cat}</span> : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-4 flex flex-wrap gap-6 items-center justify-center sm:justify-between text-sm text-gray-500">
            <span>Hiển thị <strong className="text-slate-800">{COURSES.length}</strong> khóa học</span>
            <span className="flex items-center gap-2"><Users size={14} /> Tổng <strong className="text-slate-800">1,200+</strong> học viên</span>
            <span className="flex items-center gap-2"><Star size={14} className="text-yellow-400" /> Đánh giá TB <strong className="text-slate-800">4.85/5</strong></span>
            <span className="flex items-center gap-2"><Play size={14} /> <strong className="text-slate-800">83+ giờ</strong> video</span>
          </div>
        </div>
      </section>

      {/* Courses grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSES.map(c => (
              <Link href={`/courses/${c.slug}`} key={c.slug}
                className="group glass glass-hover rounded-2xl overflow-hidden flex flex-col cursor-pointer">

                {/* Thumbnail — generated gradient image */}
                <div className="relative overflow-hidden" style={{ paddingTop: '56.25%' }}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${c.colors[0]}, ${c.colors[1]})` }}>
                    {/* Grid pattern overlay */}
                    <div className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                      }} />
                    {/* Shine */}
                    <div className="absolute inset-0"
                      style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%)' }} />
                    {/* Icon */}
                    <span className="text-6xl group-hover:scale-110 transition-transform duration-300 relative z-10 drop-shadow-lg">
                      {c.icon}
                    </span>
                    {/* VibeCode label */}
                    <span className="absolute bottom-3 right-3 text-[10px] font-black text-white/70 tracking-widest">VIBECODE</span>
                  </div>

                  {/* Badge */}
                  {c.badge && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-black text-white z-20"
                      style={{ background: c.badge === 'HOT' ? 'linear-gradient(135deg,#ef4444,#f97316)' : c.badge === 'MỚI' ? 'linear-gradient(135deg,#F97316,#F59E0B)' : 'linear-gradient(135deg,#f59e0b,#d97706)' }}>
                      {c.badge}
                    </span>
                  )}

                  {/* Hover play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    style={{ background: 'rgba(0,0,0,0.25)' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/90 shadow-xl">
                      <Play size={18} className="text-orange-500 ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className={`tag ${c.levelTag}`}>{c.level}</span>
                    <span className="tag tag-new">{c.cat}</span>
                  </div>
                  <h3 className="font-bold text-slate-800 text-base mb-2 leading-snug group-hover:text-orange-500 transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{c.desc}</p>

                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1"><Clock size={11} /> {c.hours}h</span>
                    <span className="flex items-center gap-1"><BookOpen size={11} /> {c.lessons} bài</span>
                    <span className="flex items-center gap-1"><Users size={11} /> {c.students}</span>
                    <span className="flex items-center gap-1 text-yellow-400 font-semibold">★ {c.rating}</span>
                  </div>

                  <div className="progress-bar mb-3">
                    <div className="progress-fill" style={{ width: `${Math.min(95, Math.round(c.students / 5))}%` }} />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <span className="text-2xl font-black gradient-text">{fmt(c.price)}</span>
                      <span className="text-xs ml-2 price-old">{fmt(c.oldPrice)}</span>
                    </div>
                    <span className="btn-brand px-4 py-2 rounded-xl text-xs font-bold">
                      <span className="relative z-10">Xem khóa học</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: 'rgba(15,23,42,0.5)', borderTop: '1px solid rgba(249,115,22,0.15)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-3">Không tìm thấy khóa học phù hợp?</h2>
          <p className="text-gray-500 mb-6">Hãy liên hệ với chúng tôi, chúng tôi sẽ tư vấn lộ trình học phù hợp nhất cho bạn.</p>
          <Link href="/contact" className="btn-brand px-8 py-3.5 rounded-2xl font-bold inline-block">
            <span className="relative z-10">Tư vấn miễn phí</span>
          </Link>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </div>
  )
}
