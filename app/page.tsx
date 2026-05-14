import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ChatBot from '@/components/ChatBot'
import Link from 'next/link'
import {
  BookOpen, Users, Package, Star, ChevronRight, Play,
  Code2, Zap, Shield, Globe, Cpu, Layers, ArrowRight,
  Clock, BarChart2, Award, TrendingUp, CheckCircle,
  Bot, Rocket, Brain, Sparkles, MonitorPlay, Database,
  MessageSquare, ShoppingBag
} from 'lucide-react'

/* ── DATA ── */
const COURSES = [
  {
    title: 'Tạo trò chơi HTML với AI',
    desc: 'Học cách sử dụng AI để tạo ra các trò chơi HTML thú vị và hấp dẫn từ đầu.',
    lessons: 2, hours: 3, level: 'beginner', price: 299000, oldPrice: 599000,
    rating: 4.9, students: 320, tag: 'tag-beginner', levelLabel: 'Cơ bản',
    icon: '🎮', color: 'from-green-500/20 to-emerald-500/20', border: 'border-green-500/20',
  },
  {
    title: 'Lập trình Plugin với AI',
    desc: 'Phát triển plugin WordPress chuyên nghiệp kết hợp sức mạnh của AI để tự động hóa.',
    lessons: 3, hours: 6, level: 'advanced', price: 999000, oldPrice: 1999000,
    rating: 4.8, students: 185, tag: 'tag-advanced', levelLabel: 'Nâng cao',
    icon: '🔌', color: 'from-red-500/20 to-orange-500/20', border: 'border-red-500/20',
  },
  {
    title: 'Lập trình Web chuyên sâu với AI',
    desc: 'Khóa học toàn diện từ HTML/CSS/JS đến React, NodeJS kết hợp AI để xây dựng ứng dụng thực tế.',
    lessons: 12, hours: 24, level: 'advanced', price: 3990000, oldPrice: 7990000,
    rating: 5.0, students: 92, tag: 'tag-advanced', levelLabel: 'Nâng cao',
    icon: '🌐', color: 'from-purple-500/20 to-blue-500/20', border: 'border-purple-500/20',
    badge: 'HOT',
  },
  {
    title: 'Tạo Website với AI từ A-Z',
    desc: 'Học cách xây dựng website hoàn chỉnh bằng AI, từ thiết kế đến deploy lên server.',
    lessons: 3, hours: 6, level: 'beginner', price: 999000, oldPrice: 1499000,
    rating: 4.7, students: 410, tag: 'tag-beginner', levelLabel: 'Cơ bản',
    icon: '💻', color: 'from-blue-500/20 to-cyan-500/20', border: 'border-blue-500/20',
  },
  {
    title: 'Tạo Extensions Chrome với AI',
    desc: 'Xây dựng tiện ích mở rộng Chrome thực tế, tích hợp AI để nâng cao trải nghiệm người dùng.',
    lessons: 2, hours: 4, level: 'intermediate', price: 799000, oldPrice: 1199000,
    rating: 4.8, students: 230, tag: 'tag-intermediate', levelLabel: 'Trung cấp',
    icon: '🧩', color: 'from-yellow-500/20 to-amber-500/20', border: 'border-yellow-500/20',
  },
]

const PRODUCTS = [
  { name: 'Kira Zalo AI', desc: 'Chatbot tự động trả lời tin nhắn Zalo bằng AI thông minh', price: 990000, icon: '💬', tag: 'Zalo Bot' },
  { name: 'Kira Form AI', desc: 'Form thông minh tự điền và xử lý dữ liệu với AI', price: 180000, icon: '📋', tag: 'Plugin' },
  { name: 'Kira Chatbox AI', desc: 'Hộp chat AI tích hợp website, trả lời 24/7 tự động', price: 190000, icon: '🤖', tag: 'Chatbot' },
  { name: 'Kira Fanpage AI', desc: 'Tự động hoá quản lý Fanpage Facebook bằng AI', price: 290000, icon: '📣', tag: 'Facebook' },
  { name: 'Kira TTS AI', desc: 'Chuyển văn bản thành giọng nói tự nhiên với AI', price: 169000, icon: '🔊', tag: 'AI Tool' },
  { name: 'Kira Image AI', desc: 'Tạo và chỉnh sửa hình ảnh bằng AI chuyên nghiệp', price: 179000, icon: '🎨', tag: 'AI Art' },
  { name: 'Kira Review AI', desc: 'Thu thập và phân tích đánh giá khách hàng tự động', price: 169000, icon: '⭐', tag: 'Plugin' },
  { name: 'Kira Content AI', desc: 'Tạo nội dung, bài viết SEO tự động bằng AI', price: 180000, icon: '✍️', tag: 'Content' },
  { name: 'Kira AI FAQ', desc: 'Hệ thống hỏi đáp thông minh tích hợp AI', price: 99000, icon: '❓', tag: 'Plugin' },
]

const SERVICES = [
  { icon: <Bot size={24} />, title: 'AI Chatbot', desc: 'Tích hợp chatbot AI thông minh cho website, Zalo, Facebook Messenger.' },
  { icon: <MessageSquare size={24} />, title: 'Zalo Bot AI', desc: 'Tự động hóa chăm sóc khách hàng qua Zalo OA với AI tiên tiến.' },
  { icon: <Globe size={24} />, title: 'Thiết kế Website', desc: 'Thiết kế website chuẩn SEO, tốc độ cao, giao diện chuyên nghiệp.' },
  { icon: <TrendingUp size={24} />, title: 'SEO & Analytics', desc: 'Tối ưu SEO, phân tích dữ liệu, tăng traffic và chuyển đổi.' },
  { icon: <Layers size={24} />, title: 'Fanpage Automation', desc: 'Tự động đăng bài, trả lời comment và inbox Facebook bằng AI.' },
  { icon: <Sparkles size={24} />, title: 'Nội dung AI', desc: 'Tạo nội dung, hình ảnh, video bằng AI cho marketing.' },
]

const AI_STORE = [
  {
    name: 'Gemini Sharing', icon: '✨', price: 240000, period: 'tháng',
    features: ['Gemini 1.5 Pro', 'Flash & Pro models', 'Không giới hạn requests', 'Chia sẻ tài khoản'],
    color: 'from-blue-600/20 to-cyan-600/20', border: 'border-blue-500/30',
  },
  {
    name: 'Claude Pro', icon: '🧠', price: 550000, period: 'tháng',
    features: ['Claude 3.5 Sonnet', 'Claude 3 Opus', '5x sử dụng nhiều hơn Free', 'Priority access'],
    color: 'from-purple-600/20 to-violet-600/20', border: 'border-purple-500/30',
    popular: true,
  },
  {
    name: 'Claude Max', icon: '🚀', price: 2600000, period: 'tháng',
    features: ['Claude 3.5 Sonnet', '20x sử dụng nhiều hơn Free', 'Projects nâng cao', 'API access'],
    color: 'from-amber-600/20 to-orange-600/20', border: 'border-amber-500/30',
  },
]

const BLOG_POSTS = [
  {
    title: 'Vibe Coding là gì? Xu hướng lập trình với AI năm 2026',
    excerpt: 'Khám phá phong cách lập trình mới kết hợp với AI, nơi mà sáng tạo và tự động hoá hội tụ.',
    date: '12/05/2026', readTime: '5 phút', category: 'Vibe Coding', icon: '💡',
  },
  {
    title: 'Top 10 Prompt AI hiệu quả nhất để lập trình web',
    excerpt: 'Những câu lệnh AI được tối ưu nhất giúp bạn code nhanh hơn 10 lần với Claude và GPT-4.',
    date: '10/05/2026', readTime: '8 phút', category: 'AI Prompts', icon: '🎯',
  },
  {
    title: 'Hướng dẫn tạo Extension Chrome bằng AI từ A đến Z',
    excerpt: 'Step-by-step hướng dẫn xây dựng tiện ích Chrome hoàn chỉnh chỉ trong 2 giờ với AI.',
    date: '08/05/2026', readTime: '12 phút', category: 'Tutorial', icon: '🧩',
  },
]

const STATS = [
  { icon: <BookOpen size={28} />, value: '5+', label: 'Khóa học', color: 'from-purple-500 to-blue-500' },
  { icon: <Users size={28} />, value: '1,200+', label: 'Học viên', color: 'from-blue-500 to-cyan-500' },
  { icon: <Package size={28} />, value: '50+', label: 'Sản phẩm', color: 'from-cyan-500 to-green-500' },
  { icon: <Star size={28} />, value: '98%', label: 'Hài lòng', color: 'from-green-500 to-yellow-500' },
]

const FEATURES = [
  { icon: <Brain size={20} />, title: 'AI-Powered Learning', desc: 'Học tập được cá nhân hoá bởi AI, phù hợp tốc độ và mục tiêu của bạn.' },
  { icon: <MonitorPlay size={20} />, title: 'Video HD chất lượng cao', desc: 'Bài giảng video 1080p, phụ đề tiếng Việt, tải offline học mọi lúc.' },
  { icon: <Users size={20} />, title: 'Cộng đồng 1,200+ dev', desc: 'Tham gia Discord, nhóm học tập, mentoring 1-1 với instructors.' },
  { icon: <Award size={20} />, title: 'Chứng chỉ công nhận', desc: 'Nhận certificate sau khi hoàn thành, được nhiều doanh nghiệp công nhận.' },
  { icon: <Zap size={20} />, title: 'Cập nhật liên tục', desc: 'Nội dung khóa học được cập nhật theo xu hướng công nghệ mới nhất.' },
  { icon: <Shield size={20} />, title: 'Học trọn đời', desc: 'Thanh toán một lần, truy cập trọn đời kể cả khi nội dung được cập nhật.' },
]

const formatPrice = (n: number) => n.toLocaleString('vi-VN') + '₫'

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: '#ffffff' }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="grid-pattern absolute inset-0" />
        <div className="orb w-[600px] h-[600px] -top-20 -left-20" style={{ background: '#fff7ed' }} />
        <div className="orb w-[500px] h-[500px] -bottom-10 -right-10" style={{ background: 'rgba(245,158,11,0.08)' }} />
        <div className="orb w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ background: 'rgba(245,200,66,0.06)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass neon-border text-sm font-medium text-purple-300" style={{ animationDelay: '0s' }}>
            <Sparkles size={14} className="text-yellow-400 animate-bounce-slow" />
            Nền tảng Lập trình × AI #1 Việt Nam
            <Sparkles size={14} className="text-yellow-400 animate-bounce-slow" />
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6">
            <span className="text-slate-800">Master</span>{' '}
            <span className="gradient-text text-glow">Coding</span>
            <br />
            <span className="text-slate-800">with </span>
            <span className="gradient-text">AI Power</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
            Học <strong className="text-purple-400">vibe coding</strong>, xây dựng website, tạo ứng dụng & plugin chuyên nghiệp
            bằng sức mạnh của AI. Từ người mới đến chuyên gia trong thời gian kỷ lục.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/courses" className="group btn-brand px-8 py-4 rounded-2xl text-base font-bold flex items-center gap-2 justify-center">
              <span className="relative z-10 flex items-center gap-2">
                <BookOpen size={18} />
                Xem khóa học
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/free" className="group flex items-center gap-2 justify-center px-8 py-4 rounded-2xl text-base font-bold glass neon-border text-white hover:bg-orange-50 transition-all">
              <Play size={18} className="text-purple-400" />
              Học miễn phí ngay
            </Link>
          </div>

          {/* Floating code card */}
          <div className="relative max-w-2xl mx-auto">
            <div className="glass rounded-2xl p-4 text-left neon-border shadow-2xl animate-float">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-gray-500 font-mono">vibecode.tsx</span>
              </div>
              <pre className="text-xs sm:text-sm font-mono text-left leading-relaxed overflow-x-auto">
                <span className="text-purple-400">const</span>{' '}
                <span className="text-blue-400">createApp</span>{' '}
                <span className="text-slate-800">= </span>
                <span className="text-yellow-400">async</span>{' '}
                <span className="text-slate-800">() =&gt; {'{'}</span>{'\n'}
                <span className="text-gray-500">  // 🤖 AI viết code cho bạn</span>{'\n'}
                <span className="text-slate-800">  </span>
                <span className="text-purple-400">const</span>{' '}
                <span className="text-blue-300">app</span>{' '}
                <span className="text-slate-800">= </span>
                <span className="text-purple-400">await</span>{' '}
                <span className="text-green-400">AI.generate</span>
                <span className="text-slate-800">{'({'}</span>{'\n'}
                <span className="text-slate-800">    </span>
                <span className="text-yellow-300">prompt</span>
                <span className="text-slate-800">: </span>
                <span className="text-green-300">&quot;Build a full-stack app&quot;</span>
                <span className="text-slate-800">,</span>{'\n'}
                <span className="text-slate-800">    </span>
                <span className="text-yellow-300">stack</span>
                <span className="text-slate-800">: </span>
                <span className="text-green-300">&quot;Next.js + AI&quot;</span>{'\n'}
                <span className="text-slate-800">  {'}'})</span>{'\n'}
                <span className="text-slate-800">  </span>
                <span className="text-purple-400">return</span>{' '}
                <span className="text-blue-300">app</span>
                <span className="text-slate-800">.</span>
                <span className="text-yellow-400">deploy</span>
                <span className="text-slate-800">()</span>{'\n'}
                <span className="text-slate-800">{'}'}</span>
              </pre>
            </div>

            {/* Floating badges */}
            <div className="absolute -left-8 top-4 glass rounded-xl px-3 py-2 text-xs font-semibold text-green-400 neon-border hidden sm:block animate-float" style={{ animationDelay: '1s' }}>
              ✅ Build thành công!
            </div>
            <div className="absolute -right-8 bottom-4 glass rounded-xl px-3 py-2 text-xs font-semibold text-blue-400 neon-border hidden sm:block animate-float" style={{ animationDelay: '2s' }}>
              🚀 Đã deploy!
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
          <span className="text-xs">Cuộn xuống</span>
          <div className="w-5 h-8 rounded-full border border-gray-600 flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-purple-400 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-16" style={{ background: 'rgba(249,115,22,0.05)', borderTop: '1px solid rgba(249,115,22,0.15)', borderBottom: '1px solid rgba(249,115,22,0.15)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="text-center group">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-3 bg-gradient-to-br ${s.color} bg-opacity-20 group-hover:scale-110 transition-transform`}
                  style={{ background: `linear-gradient(135deg, rgba(249,115,22,0.15), rgba(245,158,11,0.15))` }}>
                  <span className="text-purple-400">{s.icon}</span>
                </div>
                <div className="text-3xl lg:text-4xl font-black gradient-text mb-1">{s.value}</div>
                <div className="text-gray-500 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSES ── */}
      <section className="py-24 relative">
        <div className="orb w-[400px] h-[400px] top-20 right-0" style={{ background: 'rgba(249,115,22,0.06)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-badge mb-4"><Code2 size={13} /> Vibe Code Courses</div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Khóa học <span className="gradient-text">lập trình</span> nổi bật
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Học từ những chuyên gia hàng đầu, áp dụng AI để code nhanh hơn và hiệu quả hơn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {COURSES.map((c) => (
              <Link href="/courses" key={c.title}
                className="group glass glass-hover rounded-2xl overflow-hidden flex flex-col cursor-pointer"
              >
                {/* Card header */}
                <div className={`relative p-6 bg-gradient-to-br ${c.color} border-b ${c.border}`}>
                  {c.badge && (
                    <span className="absolute top-4 right-4 px-2.5 py-1 rounded-lg text-xs font-black bg-red-500 text-white animate-pulse-slow">{c.badge}</span>
                  )}
                  <div className="text-4xl mb-3">{c.icon}</div>
                  <div className="flex gap-2 flex-wrap">
                    <span className={`tag ${c.tag}`}>{c.levelLabel}</span>
                    <span className="tag tag-new">{c.lessons} bài học</span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-slate-800 text-lg mb-2 group-hover:text-purple-300 transition-colors">{c.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{c.desc}</p>

                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1"><Clock size={12} /> {c.hours}h</span>
                    <span className="flex items-center gap-1"><Users size={12} /> {c.students} học viên</span>
                    <span className="flex items-center gap-1 stars">{'★'.repeat(5)}</span>
                    <span className="text-yellow-400 font-semibold">{c.rating}</span>
                  </div>

                  {/* Progress bar */}
                  <div className="progress-bar mb-4">
                    <div className="progress-fill" style={{ width: `${Math.round(c.students / 5)}%` }} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-black text-white">{formatPrice(c.price)}</span>
                      <span className="text-xs ml-2 price-old">{formatPrice(c.oldPrice)}</span>
                    </div>
                    <button className="btn-brand px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1">
                      <span className="relative z-10 flex items-center gap-1">Xem ngay <ChevronRight size={12} /></span>
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/courses" className="group inline-flex items-center gap-2 btn-brand px-8 py-3.5 rounded-2xl font-bold">
              <span className="relative z-10 flex items-center gap-2">
                Xem tất cả khóa học
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FREE LESSONS ── */}
      <section className="py-24 relative" style={{ background: 'rgba(249,115,22,0.04)', borderTop: '1px solid rgba(249,115,22,0.12)' }}>
        <div className="orb w-80 h-80 top-0 left-0" style={{ background: 'rgba(249,115,22,0.06)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="section-badge mb-4 mx-auto"><Play size={13} /> Học thử miễn phí</div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              3 buổi học <span className="gradient-text">hoàn toàn miễn phí</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Xem ngay 3 buổi học Vibe Coding được ghi lại — không cần đăng ký, không cần thẻ tín dụng.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { id: 1, videoId: 'm3sssbK3ytM', title: 'Buổi 1 — Giới thiệu Vibe Coding & Công cụ AI', duration: '~60 phút' },
              { id: 2, videoId: 'iVmGVXCe_qQ', title: 'Buổi 2 — Xây dựng dự án thực tế với AI', duration: '~60 phút' },
              { id: 3, videoId: 'WAe3bxp8M6Y', title: 'Buổi 3 — Nâng cao & Chia sẻ kinh nghiệm', duration: '~60 phút' },
            ].map((v) => (
              <Link href="/free" key={v.id} className="group glass glass-hover rounded-2xl overflow-hidden flex flex-col">
                <div className="relative overflow-hidden" style={{ paddingTop: '56.25%' }}>
                  <img
                    src={`https://img.youtube.com/vi/${v.videoId}/hqdefault.jpg`}
                    alt={v.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.35)' }}>
                    <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"
                      style={{ background: 'rgba(249,115,22,0.9)' }}>
                      <Play size={22} color="white" />
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-black text-white" style={{ background: 'linear-gradient(135deg,#F97316,#F59E0B)' }}>
                    MIỄN PHÍ
                  </span>
                  <span className="absolute bottom-3 right-3 px-2 py-1 rounded-lg text-xs font-semibold text-white" style={{ background: 'rgba(0,0,0,0.7)' }}>
                    {v.duration}
                  </span>
                </div>
                <div className="p-4">
                  <div className="text-xs text-orange-400 font-bold mb-1">Buổi {v.id}</div>
                  <h3 className="font-bold text-slate-800 text-sm leading-snug group-hover:text-purple-300 transition-colors">{v.title}</h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/free" className="group inline-flex items-center gap-2 btn-brand px-8 py-3.5 rounded-2xl font-bold">
              <span className="relative z-10 flex items-center gap-2">
                Xem tất cả video miễn phí
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY VIBECODE ── */}
      <section className="py-24" style={{ background: '#fff7ed' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-badge mb-4"><Rocket size={13} /> Tại sao chọn VibeCode</div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Học lập trình <span className="gradient-text">thế hệ mới</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="glass glass-hover rounded-2xl p-6 group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-purple-400 group-hover:text-white transition-colors"
                  style={{ background: '#fff7ed' }}>
                  {f.icon}
                </div>
                <h3 className="font-bold text-slate-800 mb-2 group-hover:text-purple-300 transition-colors">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARKETPLACE ── */}
      <section className="py-24 relative">
        <div className="orb w-[350px] h-[350px] bottom-0 left-0" style={{ background: 'rgba(245,158,11,0.07)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-badge mb-4"><ShoppingBag size={13} /> Marketplace</div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Plugin & Sản phẩm <span className="gradient-text">AI</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Bộ sưu tập plugin và công cụ AI được phát triển bởi đội ngũ VibeCode
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRODUCTS.map((p) => (
              <Link href="/products" key={p.name}
                className="group glass glass-hover rounded-2xl p-5 flex items-start gap-4 cursor-pointer"
              >
                <div className="text-3xl flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl"
                  style={{ background: 'rgba(249,115,22,0.12)' }}>
                  {p.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-slate-700 text-sm group-hover:text-purple-300 transition-colors">{p.name}</h3>
                    <span className="tag tag-new text-[10px]">{p.tag}</span>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed mb-2">{p.desc}</p>
                  <div className="font-black text-purple-400 text-sm">{formatPrice(p.price)}</div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/products" className="group inline-flex items-center gap-2 btn-brand px-8 py-3.5 rounded-2xl font-bold">
              <span className="relative z-10 flex items-center gap-2">
                Xem tất cả sản phẩm <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24" style={{ background: '#fff7ed' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-14 items-center">
            <div className="lg:w-1/2">
              <div className="section-badge mb-4"><Cpu size={13} /> Dịch vụ thiết kế</div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-5">
                Giải pháp <span className="gradient-text">AI toàn diện</span>
                <br />cho doanh nghiệp
              </h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Chúng tôi cung cấp giải pháp số toàn diện, từ chatbot AI đến thiết kế website và marketing automation.
              </p>
              <ul className="space-y-3 mb-8">
                {['Tư vấn chiến lược AI miễn phí', 'Triển khai nhanh trong 7-14 ngày', 'Hỗ trợ 24/7 sau triển khai', 'Đảm bảo hoàn tiền nếu không đạt'].map(t => (
                  <li key={t} className="flex items-center gap-3 text-gray-600">
                    <CheckCircle size={18} className="text-green-400 flex-shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="group inline-flex items-center gap-2 btn-brand px-7 py-3.5 rounded-2xl font-bold">
                <span className="relative z-10 flex items-center gap-2">Liên hệ tư vấn <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></span>
              </Link>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              {SERVICES.map((s) => (
                <div key={s.title} className="glass glass-hover rounded-2xl p-5 group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 text-purple-400"
                    style={{ background: '#fff7ed' }}>
                    {s.icon}
                  </div>
                  <h3 className="font-bold text-slate-700 text-sm mb-1.5 group-hover:text-purple-300 transition-colors">{s.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── AI STORE ── */}
      <section className="py-24 relative">
        <div className="orb w-[400px] h-[400px] top-0 left-1/2 -translate-x-1/2" style={{ background: '#fff7ed' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-badge mb-4"><Sparkles size={13} /> AI Store</div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Tài khoản AI <span className="gradient-text">cao cấp</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Truy cập các mô hình AI mạnh nhất với giá chia sẻ hợp lý
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {AI_STORE.map((plan) => (
              <div key={plan.name}
                className={`relative glass glass-hover rounded-2xl p-6 bg-gradient-to-br ${plan.color} border ${plan.border} ${plan.popular ? 'ring-2 ring-purple-500/50 scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-black text-white" style={{ background: 'linear-gradient(135deg,#F97316,#F59E0B)' }}>
                    PHỔ BIẾN NHẤT
                  </div>
                )}
                <div className="text-4xl mb-3">{plan.icon}</div>
                <h3 className="font-black text-slate-800 text-xl mb-1">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-black gradient-text">{formatPrice(plan.price)}</span>
                  <span className="text-gray-500 text-sm">/{plan.period}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle size={14} className="text-green-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${plan.popular ? 'btn-brand' : 'border border-purple-500/40 text-purple-300 hover:bg-purple-500/10'}`}>
                  <span className="relative z-10">Mua ngay</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section className="py-24" style={{ background: '#fff7ed' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-badge mb-4"><BarChart2 size={13} /> AI Knowledge Hub</div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Blog & <span className="gradient-text">Kiến thức AI</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {BLOG_POSTS.map((post) => (
              <Link href="/blog" key={post.title}
                className="group glass glass-hover rounded-2xl overflow-hidden flex flex-col"
              >
                <div className="p-5 rounded-t-2xl flex items-center justify-center h-40"
                  style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.15), rgba(245,158,11,0.15))' }}>
                  <span className="text-6xl">{post.icon}</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="tag tag-new">{post.category}</span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <span className="text-xs text-gray-500">· {post.readTime} đọc</span>
                  </div>
                  <h3 className="font-bold text-slate-800 mb-2 leading-snug group-hover:text-purple-300 transition-colors">{post.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-1 text-purple-400 text-sm font-semibold group-hover:gap-2 transition-all">
                    Đọc thêm <ChevronRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/blog" className="group inline-flex items-center gap-2 btn-brand px-8 py-3.5 rounded-2xl font-bold">
              <span className="relative z-10 flex items-center gap-2">Xem tất cả bài viết <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="grid-pattern absolute inset-0" />
        <div className="orb w-[500px] h-[500px] top-0 left-1/2 -translate-x-1/2" style={{ background: 'rgba(249,115,22,0.12)' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-badge mb-6 mx-auto"><Rocket size={13} /> Bắt đầu ngay hôm nay</div>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-5">
            Sẵn sàng <span className="gradient-text">Vibe Coding</span> chưa?
          </h2>
          <p className="text-gray-500 text-xl mb-10 max-w-xl mx-auto">
            Tham gia cùng <strong className="text-slate-800">1,200+ học viên</strong> đang học lập trình với AI tại VibeCode ngay hôm nay!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="group btn-brand px-10 py-4 rounded-2xl text-lg font-black flex items-center gap-2 justify-center">
              <span className="relative z-10 flex items-center gap-2">
                <Rocket size={20} />
                Đăng ký miễn phí
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/courses" className="group flex items-center gap-2 justify-center px-10 py-4 rounded-2xl text-lg font-bold glass neon-border text-white hover:bg-orange-50 transition-all">
              <BookOpen size={20} /> Xem khóa học
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </div>
  )
}
