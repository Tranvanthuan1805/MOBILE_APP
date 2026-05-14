import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ChatBot from '@/components/ChatBot'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen" style={{ background: '#ffffff' }}>
      <Navbar />
      <section className="pt-28 pb-16 relative overflow-hidden">
        <div className="grid-pattern absolute inset-0" />
        <div className="orb w-80 h-80 top-10 right-10" style={{ background: 'rgba(249,115,22,0.12)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-badge mb-4 mx-auto"><MessageCircle size={13} /> Liên hệ</div>
          <h1 className="text-5xl font-black text-white mb-4">Liên hệ <span className="gradient-text">với chúng tôi</span></h1>
          <p className="text-gray-500 text-xl max-w-xl mx-auto">Có câu hỏi về khóa học hay cần tư vấn? Đội ngũ VibeCode luôn sẵn sàng hỗ trợ bạn 24/7.</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-black text-white mb-6">Thông tin liên hệ</h2>
              <div className="space-y-4 mb-8">
                {[
                  { icon: <Mail size={20} />, label: 'Email', value: 'vibecode.vn@gmail.com', href: 'mailto:vibecode.vn@gmail.com' },
                  { icon: <Phone size={20} />, label: 'Zalo / Phone', value: '0358 949 680', href: 'tel:0358949680' },
                  { icon: <MapPin size={20} />, label: 'Địa chỉ', value: 'Hồ Chí Minh, Việt Nam', href: '#' },
                  { icon: <Clock size={20} />, label: 'Giờ hỗ trợ', value: 'T2 - T7: 8:00 - 22:00', href: '#' },
                ].map(item => (
                  <a key={item.label} href={item.href}
                    className="flex items-center gap-4 p-4 glass glass-hover rounded-2xl group">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-purple-400 flex-shrink-0"
                      style={{ background: '#fff7ed' }}>{item.icon}</div>
                    <div>
                      <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-0.5">{item.label}</div>
                      <div className="text-white font-semibold group-hover:text-purple-300 transition-colors">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social */}
              <div className="glass rounded-2xl p-6 neon-border">
                <h3 className="font-bold text-slate-800 mb-4">Kênh hỗ trợ nhanh</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Facebook Page', icon: '📘', desc: 'Theo dõi tin tức mới nhất' },
                    { label: 'Discord Community', icon: '💬', desc: 'Chat với cộng đồng dev' },
                    { label: 'YouTube Channel', icon: '▶️', desc: 'Video học lập trình miễn phí' },
                    { label: 'Telegram Group', icon: '✈️', desc: 'Nhóm thảo luận AI & Code' },
                  ].map(s => (
                    <button key={s.label} className="glass glass-hover rounded-xl p-3 text-left">
                      <span className="text-2xl block mb-1">{s.icon}</span>
                      <div className="text-xs font-bold text-white">{s.label}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{s.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="glass rounded-3xl p-8 neon-border shadow-2xl">
              <h2 className="text-2xl font-black text-white mb-2">Gửi tin nhắn</h2>
              <p className="text-gray-500 text-sm mb-6">Chúng tôi sẽ phản hồi trong vòng 2-4 giờ làm việc.</p>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1.5">Họ và tên</label>
                    <input placeholder="Nguyễn Văn A" className="input-brand" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1.5">Email</label>
                    <input type="email" placeholder="email@example.com" className="input-brand" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1.5">Số điện thoại / Zalo</label>
                  <input placeholder="0xxx xxx xxx" className="input-brand" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1.5">Chủ đề</label>
                  <select className="input-brand">
                    <option value="">Chọn chủ đề...</option>
                    <option>Tư vấn khóa học</option>
                    <option>Hỗ trợ kỹ thuật</option>
                    <option>Mua sản phẩm</option>
                    <option>Hợp tác / CTV</option>
                    <option>Khác</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1.5">Nội dung</label>
                  <textarea rows={5} placeholder="Mô tả câu hỏi hoặc yêu cầu của bạn..." className="input-brand resize-none" />
                </div>
                <button type="submit" className="w-full btn-brand py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2">
                  <span className="relative z-10 flex items-center gap-2"><Send size={18} /> Gửi tin nhắn</span>
                </button>
                <p className="text-center text-xs text-gray-500">Hoặc nhắn tin trực tiếp qua chatbot bên dưới ↓</p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ChatBot />
    </div>
  )
}
