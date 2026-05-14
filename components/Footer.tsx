import Link from 'next/link'
import { Code2, Mail, Phone, Facebook, Youtube, Send, Github } from 'lucide-react'

const footerLinks = {
  'Khóa học': [
    { label: 'Lập trình Web', href: '/courses' },
    { label: 'Phát triển App', href: '/courses' },
    { label: 'AI & Machine Learning', href: '/courses' },
    { label: 'Backend NodeJS', href: '/courses' },
    { label: 'Thiết kế UI/UX', href: '/courses' },
  ],
  'Sản phẩm': [
    { label: 'Plugin AI', href: '/products' },
    { label: 'Theme WordPress', href: '/products' },
    { label: 'Chatbot AI', href: '/products' },
    { label: 'Extension Chrome', href: '/products' },
    { label: 'AI Store', href: '/products' },
  ],
  'Công ty': [
    { label: 'Giới thiệu', href: '/about' },
    { label: 'Blog AI', href: '/blog' },
    { label: 'Liên hệ', href: '/contact' },
    { label: 'Điều khoản', href: '/terms' },
    { label: 'Chính sách bảo mật', href: '/privacy' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-8" style={{ background: '#fff7ed', borderTop: '1px solid #fed7aa' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md" style={{ background: 'linear-gradient(135deg,#F97316,#EA580C)' }}>
                <Code2 size={22} color="white" />
              </div>
              <div>
                <span className="font-black text-xl gradient-text block leading-none">VibeCode</span>
                <span className="text-[10px] font-bold tracking-widest text-orange-400">AI PLATFORM</span>
              </div>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
              Nền tảng học lập trình kết hợp AI hàng đầu Việt Nam. Học vibe coding, xây dựng website, tạo ứng dụng chuyên nghiệp.
            </p>
            <div className="flex gap-3 mb-6">
              {[
                { icon: <Facebook size={16} />, href: '#', label: 'Facebook' },
                { icon: <Youtube size={16} />, href: '#', label: 'YouTube' },
                { icon: <Send size={16} />, href: '#', label: 'Telegram' },
                { icon: <Github size={16} />, href: '#', label: 'GitHub' },
              ].map(s => (
                <a key={s.label} href={s.href}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-orange-500 hover:text-white hover:bg-orange-500 border border-orange-200 bg-white transition-all shadow-sm"
                  aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2 text-sm text-slate-500">
              <a href="mailto:vibecode.vn@gmail.com" className="flex items-center gap-2 hover:text-orange-600 transition-colors">
                <Mail size={14} /> vibecode.vn@gmail.com
              </a>
              <a href="tel:0358949680" className="flex items-center gap-2 hover:text-orange-600 transition-colors">
                <Phone size={14} /> 0358 949 680
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-slate-800 mb-4 text-sm uppercase tracking-wider">{title}</h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-slate-500 hover:text-orange-600 transition-colors inline-block hover:translate-x-1">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-6 mb-10 border border-orange-100 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-slate-800 text-lg">Đăng ký nhận tin tức mới nhất</h4>
              <p className="text-slate-500 text-sm mt-1">Cập nhật khóa học, sản phẩm và tin tức AI hàng tuần</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input type="email" placeholder="Email của bạn..." className="input-brand flex-1 md:w-64" />
              <button className="btn-brand px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap shadow-md">
                <span className="relative z-10">Đăng ký</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6 border-t border-orange-100">
          <p className="text-slate-400 text-sm">© 2026 VibeCode. All rights reserved.</p>
          <div className="flex gap-4 text-sm text-slate-400">
            <Link href="/terms" className="hover:text-orange-600 transition-colors">Điều khoản</Link>
            <Link href="/privacy" className="hover:text-orange-600 transition-colors">Bảo mật</Link>
            <Link href="/faq" className="hover:text-orange-600 transition-colors">Hỏi đáp</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
