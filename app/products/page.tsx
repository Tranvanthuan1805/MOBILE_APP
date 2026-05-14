import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ChatBot from '@/components/ChatBot'
import Link from 'next/link'
import { ShoppingBag, Star, Search, Package } from 'lucide-react'

const PRODUCTS = [
  { name: 'Kira Zalo AI', desc: 'Chatbot tự động trả lời tin nhắn Zalo bằng AI thông minh. Tích hợp dễ dàng với Zalo OA.', price: 990000, rating: 4.9, reviews: 128, icon: '💬', tag: 'Zalo Bot', features: ['Trả lời tự động 24/7','Học từ lịch sử chat','Tích hợp API Zalo OA','Dashboard quản lý'] },
  { name: 'Kira Form AI', desc: 'Form thông minh tự điền và xử lý dữ liệu với AI, tích hợp website WordPress dễ dàng.', price: 180000, rating: 4.7, reviews: 89, icon: '📋', tag: 'Plugin', features: ['Tự động điền form','Validate dữ liệu AI','Xuất Excel/CSV','Gửi email tự động'] },
  { name: 'Kira Chatbox AI', desc: 'Hộp chat AI tích hợp website, trả lời 24/7 tự động, hỗ trợ đa ngôn ngữ.', price: 190000, rating: 4.8, reviews: 156, icon: '🤖', tag: 'Chatbot', features: ['Chat widget đẹp','AI đa ngôn ngữ','Lưu lịch sử chat','Báo cáo chi tiết'], badge: 'PHỔ BIẾN' },
  { name: 'Kira Fanpage AI', desc: 'Tự động hoá quản lý Fanpage Facebook: đăng bài, trả lời comment và inbox bằng AI.', price: 290000, rating: 4.6, reviews: 74, icon: '📣', tag: 'Facebook', features: ['Đăng bài tự động','Trả lời comment AI','Quản lý inbox','Lên lịch bài viết'] },
  { name: 'Kira TTS AI', desc: 'Chuyển văn bản thành giọng nói tự nhiên với AI. Hỗ trợ tiếng Việt và 20+ ngôn ngữ.', price: 169000, rating: 4.8, reviews: 203, icon: '🔊', tag: 'AI Tool', features: ['20+ ngôn ngữ','Giọng tự nhiên','Xuất MP3/WAV','API tích hợp'] },
  { name: 'Kira Image AI', desc: 'Tạo và chỉnh sửa hình ảnh bằng AI chuyên nghiệp, tích hợp trực tiếp vào WordPress.', price: 179000, rating: 4.7, reviews: 91, icon: '🎨', tag: 'AI Art', features: ['Tạo ảnh từ text','Chỉnh sửa ảnh AI','Upscale độ phân giải','Tích hợp WordPress'] },
  { name: 'Kira Review AI', desc: 'Thu thập và phân tích đánh giá khách hàng tự động, tổng hợp insights thông minh.', price: 169000, rating: 4.5, reviews: 67, icon: '⭐', tag: 'Plugin', features: ['Thu thập review','Phân tích cảm xúc','Báo cáo insights','Trả lời tự động'] },
  { name: 'Kira Content AI', desc: 'Tạo nội dung, bài viết SEO tự động bằng AI. Hỗ trợ đa dạng loại content.', price: 180000, rating: 4.9, reviews: 312, icon: '✍️', tag: 'Content', features: ['Viết bài SEO','Tạo meta description','Đề xuất từ khóa','Đa dạng ngôn ngữ'], badge: 'HOT' },
  { name: 'Kira AI FAQ', desc: 'Hệ thống hỏi đáp thông minh tích hợp AI, tự học từ nội dung website của bạn.', price: 99000, rating: 4.6, reviews: 145, icon: '❓', tag: 'Plugin', features: ['Tự học từ website','Trả lời 24/7','Tích hợp dễ dàng','Thống kê câu hỏi'] },
]

const fmt = (n: number) => n.toLocaleString('vi-VN') + '₫'

export default function ProductsPage() {
  return (
    <div className="min-h-screen" style={{ background: '#ffffff' }}>
      <Navbar />
      <section className="pt-28 pb-16 relative overflow-hidden">
        <div className="grid-pattern absolute inset-0" />
        <div className="orb w-80 h-80 top-0 left-1/4" style={{ background: 'rgba(245,158,11,0.08)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-badge mb-4 mx-auto"><ShoppingBag size={13} /> Marketplace</div>
          <h1 className="text-5xl font-black text-white mb-4">Plugin & Sản phẩm <span className="gradient-text">AI</span></h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto mb-8">Bộ công cụ AI được phát triển bởi VibeCode giúp tự động hóa và tối ưu doanh nghiệp.</p>
          <div className="relative max-w-lg mx-auto">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input placeholder="Tìm kiếm sản phẩm..." className="input-brand pl-11 py-4 text-base rounded-2xl w-full" />
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-4 mb-8 flex flex-wrap gap-6 items-center justify-center sm:justify-between text-sm text-gray-500">
            <span><strong className="text-slate-800">{PRODUCTS.length}</strong> sản phẩm</span>
            <span className="flex items-center gap-2"><Package size={14} /> Cập nhật mới nhất: 13/05/2026</span>
            <span className="flex items-center gap-2"><Star size={14} className="text-yellow-400" /> Đánh giá TB <strong className="text-slate-800">4.74/5</strong></span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map(p => (
              <div key={p.name} className="group glass glass-hover rounded-2xl p-6 flex flex-col relative">
                {p.badge && (
                  <span className="absolute top-4 right-4 px-2.5 py-1 rounded-lg text-xs font-black text-white"
                    style={{ background: p.badge === 'HOT' ? 'linear-gradient(135deg,#ef4444,#f97316)' : 'linear-gradient(135deg,#F97316,#F59E0B)' }}>
                    {p.badge}
                  </span>
                )}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                    style={{ background: '#fff7ed' }}>{p.icon}</div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-black text-slate-800 text-lg group-hover:text-purple-300 transition-colors">{p.name}</h3>
                    </div>
                    <span className="tag tag-new">{p.tag}</span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>
                <ul className="space-y-1.5 mb-5">
                  {p.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />{f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 mb-4">
                  <span className="stars text-sm">{'★'.repeat(5)}</span>
                  <span className="text-yellow-400 text-sm font-bold">{p.rating}</span>
                  <span className="text-gray-500 text-xs">({p.reviews} đánh giá)</span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-orange-100">
                  <span className="text-2xl font-black text-white">{fmt(p.price)}</span>
                  <button className="btn-brand px-5 py-2.5 rounded-xl text-sm font-bold">
                    <span className="relative z-10">Mua ngay</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <ChatBot />
    </div>
  )
}
