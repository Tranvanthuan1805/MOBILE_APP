import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ChatBot from '@/components/ChatBot'
import Link from 'next/link'
import { BookOpen, Clock, ChevronRight, TrendingUp } from 'lucide-react'

const POSTS = [
  { title: 'Vibe Coding là gì? Xu hướng lập trình với AI năm 2026', excerpt: 'Khám phá phong cách lập trình mới kết hợp với AI, nơi mà sáng tạo và tự động hoá hội tụ để tạo ra những sản phẩm phi thường.', date: '12/05/2026', readTime: '5 phút', cat: 'Vibe Coding', icon: '💡', featured: true },
  { title: 'Top 10 Prompt AI hiệu quả nhất để lập trình web', excerpt: 'Những câu lệnh AI được tối ưu nhất giúp bạn code nhanh hơn 10 lần với Claude và GPT-4o trong năm 2026.', date: '10/05/2026', readTime: '8 phút', cat: 'AI Prompts', icon: '🎯' },
  { title: 'Hướng dẫn tạo Extension Chrome bằng AI từ A đến Z', excerpt: 'Step-by-step hướng dẫn xây dựng tiện ích Chrome hoàn chỉnh chỉ trong 2 giờ với sức mạnh của AI.', date: '08/05/2026', readTime: '12 phút', cat: 'Tutorial', icon: '🧩' },
  { title: 'ChatGPT vs Claude vs Gemini: Cái nào tốt nhất cho lập trình?', excerpt: 'So sánh chi tiết 3 mô hình AI hàng đầu, đánh giá khả năng coding, debug và tạo code từ prompt.', date: '06/05/2026', readTime: '10 phút', cat: 'AI News', icon: '⚡' },
  { title: 'Xây dựng Chatbot AI cho website trong 30 phút', excerpt: 'Hướng dẫn tích hợp chatbot AI thông minh vào website WordPress hoặc Next.js cực kỳ nhanh chóng.', date: '04/05/2026', readTime: '7 phút', cat: 'Tutorial', icon: '🤖' },
  { title: 'Plugin Development 2026: AI thay đổi cách tạo plugin như thế nào', excerpt: 'Khám phá cách AI đang cách mạng hóa quy trình phát triển plugin, từ ideation đến deployment.', date: '02/05/2026', readTime: '9 phút', cat: 'Plugin Dev', icon: '🔌' },
]

const CATS = ['Tất cả', 'Vibe Coding', 'AI Prompts', 'Tutorial', 'AI News', 'Plugin Dev']

export default function BlogPage() {
  const featured = POSTS[0]
  const rest = POSTS.slice(1)

  return (
    <div className="min-h-screen" style={{ background: '#ffffff' }}>
      <Navbar />
      <section className="pt-28 pb-12 relative overflow-hidden">
        <div className="grid-pattern absolute inset-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-badge mb-4 mx-auto"><TrendingUp size={13} /> AI Knowledge Hub</div>
          <h1 className="text-5xl font-black text-white mb-4">Blog & <span className="gradient-text">Kiến thức AI</span></h1>
          <p className="text-gray-500 text-xl max-w-xl mx-auto">Cập nhật xu hướng AI, hướng dẫn lập trình và tin tức công nghệ mới nhất.</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <div className="flex gap-2 flex-wrap mb-10">
            {CATS.map(cat => (
              <button key={cat} className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${cat === 'Tất cả' ? 'btn-brand' : 'glass glass-hover text-gray-600'}`}>
                {cat === 'Tất cả' ? <span className="relative z-10">{cat}</span> : cat}
              </button>
            ))}
          </div>

          {/* Featured */}
          <div className="glass glass-hover rounded-2xl overflow-hidden mb-8 group">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="flex items-center justify-center p-16"
                style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.2), rgba(245,158,11,0.2))' }}>
                <span className="text-8xl group-hover:scale-110 transition-transform">{featured.icon}</span>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-black text-white" style={{ background: 'linear-gradient(135deg,#F97316,#F59E0B)' }}>BÀI NỔI BẬT</span>
                  <span className="tag tag-new">{featured.cat}</span>
                </div>
                <h2 className="text-2xl font-black text-white mb-3 leading-snug group-hover:text-purple-300 transition-colors">{featured.title}</h2>
                <p className="text-gray-500 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <span className="flex items-center gap-1.5"><BookOpen size={13} /> {featured.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={13} /> {featured.readTime} đọc</span>
                </div>
                <Link href="/blog" className="btn-brand px-6 py-3 rounded-xl font-bold text-sm inline-flex items-center gap-2 w-fit">
                  <span className="relative z-10 flex items-center gap-2">Đọc bài viết <ChevronRight size={15} /></span>
                </Link>
              </div>
            </div>
          </div>

          {/* Rest */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map(post => (
              <Link href="/blog" key={post.title} className="group glass glass-hover rounded-2xl overflow-hidden flex flex-col">
                <div className="flex items-center justify-center p-10"
                  style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.1), rgba(245,158,11,0.1))' }}>
                  <span className="text-5xl group-hover:scale-110 transition-transform">{post.icon}</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="tag tag-new">{post.cat}</span>
                    <span className="text-xs text-gray-500">{post.date} · {post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-slate-800 mb-2 leading-snug group-hover:text-purple-300 transition-colors flex-1">{post.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="flex items-center gap-1 text-purple-400 text-sm font-semibold group-hover:gap-2 transition-all">
                    Đọc thêm <ChevronRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="btn-brand px-8 py-3.5 rounded-2xl font-bold">
              <span className="relative z-10">Tải thêm bài viết</span>
            </button>
          </div>
        </div>
      </section>
      <Footer />
      <ChatBot />
    </div>
  )
}
