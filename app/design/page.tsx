import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ChatBot from '@/components/ChatBot'
import Link from 'next/link'
import { Globe, Bot, TrendingUp, Layers, MessageSquare, Sparkles, CheckCircle, ArrowRight } from 'lucide-react'

const SERVICES = [
  {
    icon: <Bot size={28} />, title: 'AI Chatbot', price: 'Từ 2,000,000₫',
    desc: 'Tích hợp chatbot AI thông minh cho website, Zalo OA, Facebook Messenger. Trả lời 24/7 tự động.',
    features: ['Trả lời tự động 24/7', 'Học từ nội dung website', 'Tích hợp đa kênh', 'Dashboard quản lý'],
    color: 'from-purple-500/15 to-blue-500/15', border: 'border-purple-500/20',
  },
  {
    icon: <MessageSquare size={28} />, title: 'Zalo Bot AI', price: 'Từ 1,500,000₫',
    desc: 'Tự động hóa chăm sóc khách hàng qua Zalo OA với AI tiên tiến. Tăng tỷ lệ chuyển đổi đáng kể.',
    features: ['Tự động hóa Zalo OA', 'Broadcast thông minh', 'CRM tích hợp', 'Báo cáo realtime'],
    color: 'from-blue-500/15 to-cyan-500/15', border: 'border-blue-500/20',
  },
  {
    icon: <Globe size={28} />, title: 'Thiết kế Website', price: 'Từ 3,000,000₫',
    desc: 'Thiết kế website chuẩn SEO, tốc độ cao, giao diện chuyên nghiệp. WordPress hoặc Next.js.',
    features: ['Thiết kế chuẩn SEO', 'Tốc độ tải < 2s', 'Responsive hoàn hảo', 'Bảo hành 12 tháng'],
    color: 'from-green-500/15 to-emerald-500/15', border: 'border-green-500/20', popular: true,
  },
  {
    icon: <TrendingUp size={28} />, title: 'SEO & Analytics', price: 'Từ 1,000,000₫/tháng',
    desc: 'Tối ưu SEO toàn diện, phân tích dữ liệu, tăng traffic tự nhiên và tỷ lệ chuyển đổi.',
    features: ['Audit SEO toàn diện', 'Từ khóa đúng mục tiêu', 'Báo cáo hàng tuần', 'Google Analytics 4'],
    color: 'from-yellow-500/15 to-amber-500/15', border: 'border-yellow-500/20',
  },
  {
    icon: <Layers size={28} />, title: 'Fanpage Automation', price: 'Từ 800,000₫/tháng',
    desc: 'Tự động đăng bài, trả lời comment và inbox Facebook bằng AI. Tiết kiệm 80% thời gian.',
    features: ['Đăng bài tự động', 'Trả lời AI thông minh', 'Lên lịch nội dung', 'A/B testing'],
    color: 'from-red-500/15 to-pink-500/15', border: 'border-red-500/20',
  },
  {
    icon: <Sparkles size={28} />, title: 'AI Content Creator', price: 'Từ 500,000₫/tháng',
    desc: 'Tạo nội dung, hình ảnh, video bằng AI cho marketing. Tiết kiệm chi phí nhân sự đáng kể.',
    features: ['Viết bài SEO tự động', 'Tạo ảnh bằng AI', 'Script video', 'Dịch đa ngôn ngữ'],
    color: 'from-cyan-500/15 to-teal-500/15', border: 'border-cyan-500/20',
  },
]

export default function DesignPage() {
  return (
    <div className="min-h-screen" style={{ background: '#ffffff' }}>
      <Navbar />
      <section className="pt-28 pb-16 relative overflow-hidden">
        <div className="grid-pattern absolute inset-0" />
        <div className="orb w-96 h-96 top-0 right-0" style={{ background: 'rgba(249,115,22,0.12)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-badge mb-4 mx-auto"><Globe size={13} /> Thiết kế & Dịch vụ</div>
          <h1 className="text-5xl font-black text-white mb-4">Giải pháp AI <span className="gradient-text">toàn diện</span></h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto">Chúng tôi cung cấp đầy đủ dịch vụ số giúp doanh nghiệp tự động hóa và tăng trưởng với AI.</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {SERVICES.map(s => (
              <div key={s.title}
                className={`relative glass glass-hover rounded-2xl p-6 flex flex-col bg-gradient-to-br ${s.color} border ${s.border} ${s.popular ? 'ring-2 ring-purple-500/40' : ''}`}>
                {s.popular && (
                  <span className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-black text-white" style={{ background: 'linear-gradient(135deg,#F97316,#F59E0B)' }}>PHỔ BIẾN NHẤT</span>
                )}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-purple-400 mb-4 flex-shrink-0" style={{ background: '#fff7ed' }}>
                  {s.icon}
                </div>
                <h3 className="font-black text-slate-800 text-xl mb-1">{s.title}</h3>
                <div className="text-purple-400 font-bold text-sm mb-3">{s.price}</div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{s.desc}</p>
                <ul className="space-y-2 mb-5">
                  {s.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle size={14} className="text-green-400 flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="w-full py-3 rounded-xl font-bold text-sm text-center btn-brand flex items-center justify-center gap-2">
                  <span className="relative z-10 flex items-center gap-2">Tư vấn ngay <ArrowRight size={14} /></span>
                </Link>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="glass rounded-3xl p-10 neon-border text-center">
            <h2 className="text-3xl font-black text-white mb-3">Cần giải pháp tùy chỉnh?</h2>
            <p className="text-gray-500 text-lg mb-6 max-w-xl mx-auto">Liên hệ với chúng tôi để được tư vấn miễn phí và nhận báo giá phù hợp với nhu cầu của bạn.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-brand px-8 py-4 rounded-2xl font-bold flex items-center gap-2 justify-center">
                <span className="relative z-10 flex items-center gap-2">📞 Gọi tư vấn ngay</span>
              </Link>
              <a href="mailto:vibecode.vn@gmail.com" className="glass neon-border px-8 py-4 rounded-2xl font-bold text-white hover:bg-orange-50 transition-all flex items-center gap-2 justify-center">
                ✉️ Gửi email
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ChatBot />
    </div>
  )
}
