import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ChatBot from '@/components/ChatBot'
import Link from 'next/link'
import { COURSES, getCourseBySlug } from '../data'
import {
  BookOpen, Clock, Users, Star, CheckCircle, ChevronRight,
  Shield, Award, Play, AlertCircle, ArrowLeft,
} from 'lucide-react'
import CopyButton from './CopyButton'

export function generateStaticParams() {
  return COURSES.map((c) => ({ slug: c.slug }))
}

const fmt = (n: number) => n.toLocaleString('vi-VN') + '₫'

const BANK = {
  name: 'VIETCOMBANK',
  account: '1036665746',
  owner: 'TRAN VAN THUAN',
}

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = getCourseBySlug(params.slug)
  if (!course) notFound()

  const discount = Math.round((1 - course.price / course.oldPrice) * 100)

  return (
    <div className="min-h-screen" style={{ background: '#ffffff' }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-24 pb-0 relative overflow-hidden">
        <div className="grid-pattern absolute inset-0" />
        <div className="orb w-96 h-96 -top-10 -right-10" style={{ background: `${course.colors[0]}22` }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6 pt-4">
            <Link href="/" className="hover:text-orange-500 transition-colors">Trang chủ</Link>
            <ChevronRight size={14} />
            <Link href="/courses" className="hover:text-orange-500 transition-colors">Khóa học</Link>
            <ChevronRight size={14} />
            <span className="text-slate-700 font-medium truncate">{course.title}</span>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 pb-12">
            {/* Left — course info */}
            <div className="lg:col-span-3 space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                <span className={`tag ${course.levelTag}`}>{course.level}</span>
                <span className="tag tag-new">{course.cat}</span>
                {course.badge && (
                  <span className="px-2.5 py-1 rounded-lg text-xs font-black text-white"
                    style={{ background: course.badge === 'HOT' ? 'linear-gradient(135deg,#ef4444,#f97316)' : course.badge === 'MỚI' ? 'linear-gradient(135deg,#F97316,#F59E0B)' : 'linear-gradient(135deg,#f59e0b,#d97706)' }}>
                    {course.badge}
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">{course.title}</h1>
              <p className="text-lg text-orange-400 font-semibold">{course.tagline}</p>
              <p className="text-gray-500 leading-relaxed">{course.longDesc}</p>

              {/* Stats row */}
              <div className="flex flex-wrap gap-5 text-sm">
                <span className="flex items-center gap-1.5 text-yellow-400 font-bold">
                  <Star size={15} fill="currentColor" /> {course.rating}/5
                </span>
                <span className="flex items-center gap-1.5 text-gray-500">
                  <Users size={15} /> {course.students.toLocaleString()} học viên
                </span>
                <span className="flex items-center gap-1.5 text-gray-500">
                  <BookOpen size={15} /> {course.lessons} bài học
                </span>
                <span className="flex items-center gap-1.5 text-gray-500">
                  <Clock size={15} /> {course.hours} giờ
                </span>
                <span className="flex items-center gap-1.5 text-gray-500">
                  <Award size={15} /> Chứng chỉ hoàn thành
                </span>
              </div>

              {/* Course thumbnail image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '16/9' }}>
                <div className="w-full h-full flex flex-col items-center justify-center relative"
                  style={{ background: `linear-gradient(135deg, ${course.colors[0]}, ${course.colors[1]})` }}>
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)',
                      backgroundSize: '40px 40px',
                    }} />
                  {/* VibeCode watermark */}
                  <div className="absolute top-5 left-5 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-white/20">
                      <span className="text-white font-black text-xs">V</span>
                    </div>
                    <span className="text-white/80 text-sm font-bold tracking-wider">VibeCode</span>
                  </div>
                  {/* Center content */}
                  <span className="text-[100px] sm:text-[130px] leading-none mb-4 drop-shadow-lg" style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))' }}>
                    {course.icon}
                  </span>
                  <h2 className="text-white font-black text-xl sm:text-3xl text-center px-8 leading-tight drop-shadow-lg"
                    style={{ textShadow: '0 2px 12px rgba(0,0,0,0.3)' }}>
                    {course.title}
                  </h2>
                  <div className="mt-4 px-5 py-2 rounded-full bg-white/20 text-white font-bold text-sm">
                    {course.level} · {course.hours} giờ · {course.lessons} bài học
                  </div>
                  {/* Shine effect */}
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)' }} />
                </div>
              </div>
            </div>

            {/* Right — sticky payment card */}
            <div className="lg:col-span-2">
              <div className="glass rounded-3xl p-6 neon-border shadow-2xl sticky top-24">
                {/* Price */}
                <div className="mb-5">
                  <div className="flex items-end gap-3 mb-1">
                    <span className="text-4xl font-black gradient-text">{fmt(course.price)}</span>
                    <span className="text-lg line-through text-gray-500 mb-1">{fmt(course.oldPrice)}</span>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-bold text-white"
                    style={{ background: 'linear-gradient(135deg,#ef4444,#f97316)' }}>
                    Tiết kiệm {discount}%
                  </span>
                </div>

                {/* Quick info */}
                <div className="space-y-2.5 mb-6 pb-6 border-b border-orange-100">
                  {[
                    { icon: <BookOpen size={15} />, label: `${course.lessons} bài học` },
                    { icon: <Clock size={15} />, label: `${course.hours} giờ video` },
                    { icon: <Play size={15} />, label: 'Truy cập trọn đời' },
                    { icon: <Shield size={15} />, label: 'Bảo hành 30 ngày hoàn tiền' },
                    { icon: <Award size={15} />, label: 'Chứng chỉ hoàn thành' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <span className="text-orange-400">{item.icon}</span>
                      {item.label}
                    </div>
                  ))}
                </div>

                {/* Payment — Bank Transfer */}
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-black"
                      style={{ background: 'linear-gradient(135deg,#F97316,#F59E0B)' }}>
                      ₫
                    </div>
                    <h3 className="font-bold text-slate-800">Thanh toán chuyển khoản</h3>
                  </div>

                  <div className="rounded-2xl p-4 space-y-3 text-sm" style={{ background: 'rgba(249,115,22,0.06)', border: '1px solid rgba(249,115,22,0.2)' }}>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Ngân hàng</span>
                      <span className="font-black text-slate-800">{BANK.name}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Số tài khoản</span>
                      <div className="flex items-center gap-1.5">
                        <span className="font-black text-orange-500 text-base tracking-wide">{BANK.account}</span>
                        <CopyButton text={BANK.account} />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Chủ tài khoản</span>
                      <span className="font-bold text-slate-800">{BANK.owner}</span>
                    </div>
                    <div className="flex justify-between items-start gap-2 pt-1 border-t border-orange-100">
                      <span className="text-gray-500 flex-shrink-0">Nội dung CK</span>
                      <span className="font-bold text-orange-600 text-right text-xs">
                        [Email] + {course.slug.slice(0, 20)}...
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 mt-3 text-xs text-gray-500">
                    <AlertCircle size={13} className="flex-shrink-0 mt-0.5 text-orange-400" />
                    <span>Sau khi chuyển khoản, gửi ảnh bill vào Zalo/Facebook của VibeCode để kích hoạt khóa học trong vòng 24 giờ.</span>
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="space-y-3">
                  <a href={`https://zalo.me/0123456789`}
                    className="w-full btn-brand py-3.5 rounded-2xl font-bold text-center flex items-center justify-center gap-2">
                    <span className="relative z-10">Đăng ký học ngay</span>
                  </a>
                  <Link href="/contact"
                    className="w-full py-3 rounded-2xl font-semibold text-center text-sm text-gray-600 glass glass-hover border border-orange-100 flex items-center justify-center gap-2 transition-all">
                    Tư vấn miễn phí
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUTCOMES ── */}
      <section className="py-16" style={{ background: 'rgba(249,115,22,0.04)', borderTop: '1px solid rgba(249,115,22,0.12)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* What you'll learn */}
            <div>
              <h2 className="text-2xl font-black text-white mb-6">Bạn sẽ học được gì?</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {course.outcomes.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={17} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div>
              <h2 className="text-2xl font-black text-white mb-6">Yêu cầu</h2>
              <div className="space-y-3">
                {course.requirements.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: '#F97316' }} />
                    <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CURRICULUM ── */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white mb-2">Nội dung khóa học</h2>
          <p className="text-gray-500 mb-8">{course.lessons} bài học · {course.hours} giờ học</p>

          <div className="space-y-4">
            {course.curriculum.map((module, mi) => (
              <div key={mi} className="glass rounded-2xl overflow-hidden neon-border">
                {/* Module header */}
                <div className="p-4 flex items-center gap-3" style={{ background: 'rgba(249,115,22,0.08)' }}>
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm font-black text-white flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${course.colors[0]}, ${course.colors[1]})` }}>
                    {mi + 1}
                  </div>
                  <h3 className="font-bold text-slate-800">{module.title}</h3>
                  <span className="ml-auto text-xs text-gray-500 flex-shrink-0">{module.lessons.length} bài</span>
                </div>

                {/* Lessons */}
                <div className="divide-y divide-orange-50">
                  {module.lessons.map((lesson, li) => (
                    <div key={li} className="px-4 py-3 flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(249,115,22,0.1)' }}>
                        <Play size={12} className="text-orange-400" />
                      </div>
                      <span className="text-sm text-gray-700 flex-1">{lesson.name}</span>
                      <span className="text-xs text-gray-400 flex-shrink-0">{lesson.duration}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-16" style={{ background: 'rgba(249,115,22,0.06)', borderTop: '1px solid rgba(249,115,22,0.15)' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-5xl mb-4">{course.icon}</div>
          <h2 className="text-3xl font-black text-white mb-3">Sẵn sàng bắt đầu?</h2>
          <p className="text-gray-500 mb-2">Chỉ <span className="text-3xl font-black gradient-text">{fmt(course.price)}</span></p>
          <p className="text-sm text-gray-500 mb-8">Chuyển khoản <strong className="text-slate-700">{BANK.name}</strong> · STK: <strong className="text-orange-500">{BANK.account}</strong> · {BANK.owner}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-brand px-8 py-4 rounded-2xl font-bold">
              <span className="relative z-10">Đăng ký học ngay</span>
            </Link>
            <Link href="/courses" className="flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold glass glass-hover text-gray-600 border border-orange-200 transition-all">
              <ArrowLeft size={16} /> Xem khóa khác
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </div>
  )
}
