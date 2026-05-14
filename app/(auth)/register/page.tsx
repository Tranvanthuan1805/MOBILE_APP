'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Code2, Eye, EyeOff, Loader2, Lock, Mail, User, CheckCircle } from 'lucide-react'

export default function RegisterPage() {
  const router = useRouter()
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [agree, setAgree] = useState(false)

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(p => ({ ...p, [k]: e.target.value }))

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!agree) { setError('Vui lòng đồng ý với điều khoản sử dụng.'); return }
    if (form.password !== form.confirm) { setError('Mật khẩu xác nhận không khớp.'); return }
    if (form.password.length < 6) { setError('Mật khẩu phải có ít nhất 6 ký tự.'); return }
    setLoading(true); setError('')
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, password: form.password }),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error); return }
      localStorage.setItem('vibecode_user', JSON.stringify(data.user))
      router.push('/dashboard')
    } catch {
      setError('Lỗi kết nối. Thử lại sau.')
    } finally {
      setLoading(false)
    }
  }

  const PERKS = ['Truy cập 50+ bài học miễn phí', 'Tham gia cộng đồng 1,200+ dev', 'Nhận newsletter AI hàng tuần', 'Dashboard học tập cá nhân']

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-12" style={{ background: '#ffffff' }}>
      <div className="grid-pattern absolute inset-0" />
      <div className="orb w-96 h-96 -top-20 -right-20" style={{ background: 'rgba(249,115,22,0.12)' }} />
      <div className="orb w-96 h-96 -bottom-20 -left-20" style={{ background: 'rgba(245,158,11,0.08)' }} />

      <div className="relative z-10 w-full max-w-5xl px-4 grid lg:grid-cols-2 gap-8 items-center">
        {/* Left - perks */}
        <div className="hidden lg:block">
          <div className="inline-flex items-center gap-2 mb-4 section-badge">🚀 Tham gia miễn phí</div>
          <h2 className="text-4xl font-black text-white mb-4 leading-tight">
            Bắt đầu hành trình <span className="gradient-text">Vibe Coding</span> của bạn
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Đăng ký tài khoản miễn phí và khám phá thế giới lập trình kết hợp AI. Không cần thẻ tín dụng.
          </p>
          <ul className="space-y-4 mb-10">
            {PERKS.map(p => (
              <li key={p} className="flex items-center gap-3 text-gray-600">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(249,115,22,0.2)' }}>
                  <CheckCircle size={14} className="text-purple-400" />
                </div>
                {p}
              </li>
            ))}
          </ul>
          <div className="glass rounded-2xl p-4 neon-border">
            <div className="flex -space-x-2 mb-3">
              {['A','B','C','D','E'].map((l,i) => (
                <div key={i} className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 border-[#0a0a0a]"
                  style={{ background: `hsl(${i*60+240},70%,55%)` }}>{l}</div>
              ))}
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold border-2 border-[#0a0a0a] text-gray-600" style={{ background: '#1a1a3a' }}>+1.2k</div>
            </div>
            <p className="text-sm text-gray-500"><strong className="text-slate-800">1,200+ học viên</strong> đã tham gia VibeCode</p>
          </div>
        </div>

        {/* Right - form */}
        <div className="glass rounded-3xl p-8 neon-border shadow-2xl" style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.5)' }}>
          <div className="text-center mb-6">
            <Link href="/" className="inline-flex flex-col items-center gap-1.5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#F97316,#F59E0B)' }}>
                <Code2 size={24} color="white" />
              </div>
              <span className="font-black text-xl gradient-text">VibeCode</span>
            </Link>
            <h1 className="text-2xl font-black text-white mt-3 mb-1">Tạo tài khoản</h1>
            <p className="text-gray-500 text-sm">Miễn phí · Không cần thẻ tín dụng</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1.5">Họ và tên</label>
              <div className="relative">
                <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                <input value={form.name} onChange={set('name')} placeholder="Nguyễn Văn A" className="input-brand pl-9" required />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1.5">Email</label>
              <div className="relative">
                <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                <input type="email" value={form.email} onChange={set('email')} placeholder="email@example.com" className="input-brand pl-9" required />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1.5">Mật khẩu</label>
              <div className="relative">
                <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                <input type={showPass ? 'text' : 'password'} value={form.password} onChange={set('password')} placeholder="Tối thiểu 6 ký tự" className="input-brand pl-9 pr-9" required />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-600">
                  {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1.5">Xác nhận mật khẩu</label>
              <div className="relative">
                <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                <input type="password" value={form.confirm} onChange={set('confirm')} placeholder="Nhập lại mật khẩu" className="input-brand pl-9" required />
              </div>
            </div>

            {error && (
              <div className="p-3 rounded-xl text-sm text-red-400" style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)' }}>
                {error}
              </div>
            )}

            <label className="flex items-start gap-2.5 cursor-pointer">
              <input type="checkbox" checked={agree} onChange={e => setAgree(e.target.checked)} className="mt-0.5 rounded" />
              <span className="text-sm text-gray-500">
                Tôi đồng ý với{' '}
                <Link href="/terms" className="text-purple-400 hover:underline">Điều khoản sử dụng</Link>
                {' '}và{' '}
                <Link href="/privacy" className="text-purple-400 hover:underline">Chính sách bảo mật</Link>
                {' '}của VibeCode
              </span>
            </label>

            <button type="submit" disabled={loading}
              className="w-full btn-brand py-3.5 rounded-2xl font-bold text-base flex items-center justify-center gap-2 disabled:opacity-60">
              {loading ? <><Loader2 size={18} className="animate-spin" /><span className="relative z-10">Đang tạo tài khoản...</span></> : <span className="relative z-10">🚀 Đăng ký miễn phí</span>}
            </button>
          </form>

          <p className="text-center text-gray-500 text-sm mt-5">
            Đã có tài khoản?{' '}
            <Link href="/login" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors">Đăng nhập</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
