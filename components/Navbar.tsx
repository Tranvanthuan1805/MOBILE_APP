'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Code2, ChevronDown, User, LogOut, LayoutDashboard } from 'lucide-react'

const navLinks = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Giới thiệu', href: '/about' },
  { label: 'Khóa học', href: '/courses' },
  { label: 'Học miễn phí', href: '/free', badge: 'FREE' },
  { label: 'Sản phẩm', href: '/products' },
  { label: 'Thiết kế Web', href: '/design' },
  { label: 'Blog AI', href: '/blog' },
  { label: 'Liên hệ', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [user, setUser] = useState<{ name: string; role: string } | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    const stored = localStorage.getItem('vibecode_user')
    if (stored) setUser(JSON.parse(stored))
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('vibecode_user')
    setUser(null)
    setUserMenuOpen(false)
    window.location.href = '/'
  }

  const roleLabel: Record<string, string> = {
    admin: 'Quản trị viên',
    collaborator: 'Cộng tác viên',
    user: 'Học viên',
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid #fed7aa',
        boxShadow: scrolled ? '0 2px 20px rgba(249,115,22,0.1)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-md"
              style={{ background: 'linear-gradient(135deg,#F97316,#EA580C)' }}>
              <Code2 size={20} color="white" />
            </div>
            <div>
              <span className="font-black text-lg leading-none gradient-text block">VibeCode</span>
              <span className="text-[10px] font-bold tracking-widest text-orange-400 leading-none">AI PLATFORM</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href}
                className="nav-link px-3 py-2 text-sm font-medium text-slate-600 hover:text-orange-600 rounded-lg hover:bg-orange-50 transition-all flex items-center gap-1.5">
                {link.label}
                {'badge' in link && link.badge && (
                  <span className="text-[9px] font-black px-1.5 py-0.5 rounded-md text-white leading-none" style={{ background: 'linear-gradient(135deg,#F97316,#F59E0B)' }}>
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            {user ? (
              <div className="relative">
                <button onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl border border-orange-200 bg-orange-50 hover:bg-orange-100 transition-all">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm text-white"
                    style={{ background: 'linear-gradient(135deg,#F97316,#EA580C)' }}>
                    {user.name[0].toUpperCase()}
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-slate-800 leading-none">{user.name}</div>
                    <div className="text-[10px] text-orange-500 font-semibold mt-0.5">{roleLabel[user.role]}</div>
                  </div>
                  <ChevronDown size={14} className={`text-slate-400 transition-transform ${userMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl py-2 shadow-xl border border-orange-100">
                    <Link href="/dashboard" className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-600 hover:text-orange-600 hover:bg-orange-50 transition-colors" onClick={() => setUserMenuOpen(false)}>
                      <LayoutDashboard size={15} /> Dashboard
                    </Link>
                    <Link href="/dashboard/profile" className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-600 hover:text-orange-600 hover:bg-orange-50 transition-colors" onClick={() => setUserMenuOpen(false)}>
                      <User size={15} /> Hồ sơ của tôi
                    </Link>
                    <div className="my-1 border-t border-slate-100" />
                    <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 w-full transition-colors">
                      <LogOut size={15} /> Đăng xuất
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/login" className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-orange-600 rounded-lg hover:bg-orange-50 transition-all">
                  Đăng nhập
                </Link>
                <Link href="/register" className="btn-brand px-5 py-2.5 rounded-xl text-sm font-bold shadow-md">
                  <span className="relative z-10">Đăng ký</span>
                </Link>
              </>
            )}
          </div>

          <button className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-orange-600 hover:bg-orange-50 transition-all" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden py-4 border-t border-orange-100">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href}
                className="flex items-center gap-2 px-4 py-3 text-slate-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all font-medium"
                onClick={() => setOpen(false)}>
                {link.label}
                {'badge' in link && link.badge && (
                  <span className="text-[9px] font-black px-1.5 py-0.5 rounded-md text-white leading-none" style={{ background: 'linear-gradient(135deg,#F97316,#F59E0B)' }}>
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
            <div className="mt-3 flex gap-2 px-2">
              <Link href="/login" className="flex-1 text-center py-2.5 rounded-xl border border-orange-200 text-sm font-semibold text-orange-600 hover:bg-orange-50 transition-colors" onClick={() => setOpen(false)}>
                Đăng nhập
              </Link>
              <Link href="/register" className="flex-1 text-center py-2.5 rounded-xl btn-brand text-sm font-bold" onClick={() => setOpen(false)}>
                <span className="relative z-10">Đăng ký</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
