'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Code2, Eye, EyeOff, Loader2, Lock, Mail, Sparkles } from 'lucide-react'

const DEMO_ACCOUNTS = [
  { email: 'admin@vibecode.vn', password: 'admin123', role: 'admin', name: 'Admin VibeCode' },
  { email: 'collab@vibecode.vn', password: 'collab123', role: 'collaborator', name: 'Nguyễn Cộng Tác' },
  { email: 'user@vibecode.vn', password: 'user123', role: 'user', name: 'Trần Học Viên' },
]

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    await new Promise(r => setTimeout(r, 800))
    const acc = DEMO_ACCOUNTS.find(a => a.email === email && a.password === password)
    if (!acc) {
      setError('Email hoặc mật khẩu không đúng. Hãy thử tài khoản demo bên dưới.')
      setLoading(false)
      return
    }
    localStorage.setItem('vibecode_user', JSON.stringify({ name: acc.name, role: acc.role, email: acc.email }))
    router.push('/dashboard')
  }

  const loginDemo = (acc: typeof DEMO_ACCOUNTS[0]) => {
    setEmail(acc.email)
    setPassword(acc.password)
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: '#ffffff' }}>
      <div className="grid-pattern absolute inset-0" />
      <div className="orb w-96 h-96 -top-20 -left-20" style={{ background: '#fff7ed' }} />
      <div className="orb w-96 h-96 -bottom-20 -right-20" style={{ background: 'rgba(245,158,11,0.08)' }} />

      <div className="relative z-10 w-full max-w-md px-4">
        <div className="glass rounded-3xl p-8 neon-border shadow-2xl" style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.5)' }}>
          {/* Logo */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg animate-glow" style={{ background: 'linear-gradient(135deg,#F97316,#F59E0B)' }}>
                <Code2 size={28} color="white" />
              </div>
              <span className="font-black text-2xl gradient-text">VibeCode</span>
            </Link>
            <h1 className="text-2xl font-black text-white mt-4 mb-1">Đăng nhập</h1>
            <p className="text-gray-500 text-sm">Chào mừng bạn quay trở lại! 👋</p>
          </div>

          {/* Demo accounts */}
          <div className="mb-6 p-4 rounded-2xl" style={{ background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.2)' }}>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={14} className="text-yellow-400" />
              <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Tài khoản Demo</span>
            </div>
            <div className="space-y-2">
              {DEMO_ACCOUNTS.map(acc => {
                const colors: Record<string, string> = { admin: 'badge-role-admin', collaborator: 'badge-role-colla', user: 'badge-role-user' }
                const labels: Record<string, string> = { admin: 'Admin', collaborator: 'CTV', user: 'User' }
                return (
                  <button key={acc.email} onClick={() => loginDemo(acc)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs text-gray-600 hover:bg-orange-50 transition-all group"
                  >
                    <span className="font-mono text-gray-500 group-hover:text-gray-200 transition-colors">{acc.email}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-gray-500">{acc.password}</span>
                      <span className={`tag ${colors[acc.role]}`}>{labels[acc.role]}</span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2">Email</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="email@example.com"
                  className="input-brand pl-10"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2">Mật khẩu</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type={showPass ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="input-brand pl-10 pr-10"
                  required
                />
                <button type="button" onClick={() => setShowPass(!showPass)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-600 transition-colors">
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="p-3 rounded-xl text-sm text-red-400" style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)' }}>
                {error}
              </div>
            )}

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded" />
                <span className="text-gray-500">Ghi nhớ đăng nhập</span>
              </label>
              <Link href="/forgot-password" className="text-purple-400 hover:text-purple-300 transition-colors">
                Quên mật khẩu?
              </Link>
            </div>

            <button type="submit" disabled={loading}
              className="w-full btn-brand py-3.5 rounded-2xl font-bold text-base flex items-center justify-center gap-2 disabled:opacity-60">
              {loading ? <><Loader2 size={18} className="animate-spin" /><span className="relative z-10">Đang đăng nhập...</span></> : <span className="relative z-10">Đăng nhập</span>}
            </button>
          </form>

          <p className="text-center text-gray-500 text-sm mt-6">
            Chưa có tài khoản?{' '}
            <Link href="/register" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors">
              Đăng ký ngay miễn phí
            </Link>
          </p>
        </div>

        <p className="text-center text-gray-600 text-xs mt-4">
          © 2026 VibeCode · <Link href="/terms" className="hover:text-gray-500">Điều khoản</Link> · <Link href="/privacy" className="hover:text-gray-500">Bảo mật</Link>
        </p>
      </div>
    </div>
  )
}
