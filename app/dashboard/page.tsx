'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Code2, LayoutDashboard, BookOpen, ShoppingBag, Users, Settings,
  LogOut, Bell, TrendingUp, Award, Clock, Play, BarChart2,
  PlusCircle, Edit3, Trash2, Eye, Star, CheckCircle, AlertCircle,
  Package, DollarSign, UserCheck, FileText, Upload, Video, MessageCircle, ChevronRight
} from 'lucide-react'

type User = { name: string; role: 'admin' | 'collaborator' | 'user'; email: string }

/* ─── ADMIN DASHBOARD ─── */
function AdminDash() {
  const stats = [
    { label: 'Tổng học viên', value: '1,247', change: '+12%', icon: <Users size={20} />, color: 'from-purple-500/20 to-blue-500/20' },
    { label: 'Doanh thu tháng', value: '48.5M₫', change: '+23%', icon: <DollarSign size={20} />, color: 'from-green-500/20 to-emerald-500/20' },
    { label: 'Khóa học active', value: '5', change: '+1', icon: <BookOpen size={20} />, color: 'from-blue-500/20 to-cyan-500/20' },
    { label: 'Sản phẩm', value: '50', change: '+5', icon: <Package size={20} />, color: 'from-yellow-500/20 to-amber-500/20' },
  ]
  const recentUsers = [
    { name: 'Nguyễn Văn A', email: 'a@gmail.com', role: 'user', joined: '13/05', status: 'active' },
    { name: 'Trần Thị B', email: 'b@gmail.com', role: 'collaborator', joined: '12/05', status: 'active' },
    { name: 'Lê Văn C', email: 'c@gmail.com', role: 'user', joined: '11/05', status: 'pending' },
    { name: 'Phạm Thị D', email: 'd@gmail.com', role: 'user', joined: '10/05', status: 'active' },
  ]
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-black text-white mb-1">Tổng quan hệ thống</h2>
        <p className="text-gray-500 text-sm">Quản lý toàn bộ nền tảng VibeCode</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(s => (
          <div key={s.label} className={`glass glass-hover rounded-2xl p-5 bg-gradient-to-br ${s.color}`}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-purple-400">{s.icon}</span>
              <span className="text-xs font-bold text-green-400">{s.change}</span>
            </div>
            <div className="text-2xl font-black text-white mb-0.5">{s.value}</div>
            <div className="text-xs text-gray-500">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent users */}
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-bold text-slate-800">Học viên mới nhất</h3>
            <button className="text-xs text-purple-400 hover:text-purple-300">Xem tất cả →</button>
          </div>
          <div className="space-y-3">
            {recentUsers.map(u => (
              <div key={u.email} className="flex items-center gap-3 p-3 rounded-xl hover:bg-orange-50 transition-colors">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg,#F97316,#F59E0B)' }}>
                  {u.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-slate-700 text-sm truncate">{u.name}</div>
                  <div className="text-xs text-gray-500 truncate">{u.email}</div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className={`tag ${u.role === 'collaborator' ? 'tag-intermediate' : 'tag-beginner'}`}>
                    {u.role === 'collaborator' ? 'CTV' : 'User'}
                  </span>
                  <span className={`w-1.5 h-1.5 rounded-full ${u.status === 'active' ? 'bg-green-400' : 'bg-yellow-400'}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick actions */}
        <div className="glass rounded-2xl p-6">
          <h3 className="font-bold text-slate-800 mb-5">Hành động nhanh</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: <PlusCircle size={18} />, label: 'Thêm khóa học', color: 'text-purple-400' },
              { icon: <UserCheck size={18} />, label: 'Duyệt CTV', color: 'text-blue-400' },
              { icon: <Package size={18} />, label: 'Thêm sản phẩm', color: 'text-green-400' },
              { icon: <FileText size={18} />, label: 'Đăng bài blog', color: 'text-yellow-400' },
              { icon: <Bell size={18} />, label: 'Gửi thông báo', color: 'text-red-400' },
              { icon: <BarChart2 size={18} />, label: 'Xem báo cáo', color: 'text-cyan-400' },
            ].map(a => (
              <button key={a.label} className="glass glass-hover rounded-xl p-4 flex flex-col items-start gap-2 group">
                <span className={`${a.color} group-hover:scale-110 transition-transform`}>{a.icon}</span>
                <span className="text-xs font-semibold text-gray-600 group-hover:text-white transition-colors">{a.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Role management table */}
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-bold text-slate-800">Quản lý phân quyền</h3>
          <button className="btn-brand px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5">
            <span className="relative z-10 flex items-center gap-1.5"><PlusCircle size={13} /> Thêm người dùng</span>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-orange-100">
                <th className="pb-3 text-gray-500 font-semibold">Tên</th>
                <th className="pb-3 text-gray-500 font-semibold">Email</th>
                <th className="pb-3 text-gray-500 font-semibold">Vai trò</th>
                <th className="pb-3 text-gray-500 font-semibold">Ngày tham gia</th>
                <th className="pb-3 text-gray-500 font-semibold">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { name: 'Admin VibeCode', email: 'admin@vibecode.vn', role: 'admin', joined: '01/01/2026' },
                { name: 'Nguyễn CTV', email: 'collab@vibecode.vn', role: 'collaborator', joined: '15/02/2026' },
                { name: 'Trần User', email: 'user@vibecode.vn', role: 'user', joined: '10/03/2026' },
              ].map(u => (
                <tr key={u.email} className="hover:bg-white/3 transition-colors">
                  <td className="py-3 font-semibold text-white">{u.name}</td>
                  <td className="py-3 text-gray-500">{u.email}</td>
                  <td className="py-3">
                    <span className={`tag ${u.role === 'admin' ? 'badge-role-admin' : u.role === 'collaborator' ? 'badge-role-colla' : 'badge-role-user'}`}>
                      {u.role === 'admin' ? 'Admin' : u.role === 'collaborator' ? 'CTV' : 'User'}
                    </span>
                  </td>
                  <td className="py-3 text-gray-500">{u.joined}</td>
                  <td className="py-3">
                    <div className="flex gap-2">
                      <button className="p-1.5 rounded-lg text-blue-400 hover:bg-blue-500/10 transition-colors"><Edit3 size={13} /></button>
                      <button className="p-1.5 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors"><Trash2 size={13} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

/* ─── COLLABORATOR DASHBOARD ─── */
function CollabDash() {
  const myCourses = [
    { title: 'Tạo trò chơi HTML với AI', students: 320, revenue: '9.56M₫', status: 'published', rating: 4.9 },
    { title: 'Tạo website WordPress với AI', students: 185, revenue: '18.5M₫', status: 'published', rating: 4.8 },
    { title: 'Extension Chrome nâng cao', students: 0, revenue: '0₫', status: 'draft', rating: 0 },
  ]
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-black text-white mb-1">Dashboard Cộng tác viên</h2>
        <p className="text-gray-500 text-sm">Quản lý nội dung và theo dõi hiệu suất của bạn</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Học viên của tôi', value: '505', icon: <Users size={18} />, color: 'text-purple-400' },
          { label: 'Hoa hồng tháng', value: '7.2M₫', icon: <DollarSign size={18} />, color: 'text-green-400' },
          { label: 'Khóa học', value: '3', icon: <BookOpen size={18} />, color: 'text-blue-400' },
          { label: 'Đánh giá TB', value: '4.85 ★', icon: <Star size={18} />, color: 'text-yellow-400' },
        ].map(s => (
          <div key={s.label} className="glass glass-hover rounded-2xl p-5">
            <span className={s.color}>{s.icon}</span>
            <div className="text-2xl font-black text-white mt-2 mb-0.5">{s.value}</div>
            <div className="text-xs text-gray-500">{s.label}</div>
          </div>
        ))}
      </div>

      {/* My courses */}
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-bold text-slate-800">Khóa học của tôi</h3>
          <button className="btn-brand px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5">
            <span className="relative z-10 flex items-center gap-1.5"><PlusCircle size={13} /> Tạo khóa học mới</span>
          </button>
        </div>
        <div className="space-y-4">
          {myCourses.map(c => (
            <div key={c.title} className="flex items-center gap-4 p-4 rounded-xl hover:bg-orange-50 transition-colors glass">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
                style={{ background: '#fff7ed' }}>📚</div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-slate-700 text-sm mb-1">{c.title}</div>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1"><Users size={11} /> {c.students} học viên</span>
                  <span className="flex items-center gap-1"><DollarSign size={11} /> {c.revenue}</span>
                  {c.rating > 0 && <span className="flex items-center gap-1 text-yellow-400">★ {c.rating}</span>}
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className={`tag ${c.status === 'published' ? 'tag-beginner' : 'tag-intermediate'}`}>
                  {c.status === 'published' ? 'Đã đăng' : 'Nháp'}
                </span>
                <button className="p-1.5 rounded-lg text-blue-400 hover:bg-blue-500/10"><Edit3 size={13} /></button>
                <button className="p-1.5 rounded-lg text-gray-500 hover:bg-orange-50"><Eye size={13} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upload content */}
      <div className="glass rounded-2xl p-6">
        <h3 className="font-bold text-slate-800 mb-5">Tải lên nội dung mới</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: <Video size={20} />, label: 'Upload Video', desc: 'Tải lên bài giảng video HD', color: 'text-purple-400' },
            { icon: <FileText size={20} />, label: 'Tạo bài viết', desc: 'Viết blog hoặc tài liệu học tập', color: 'text-blue-400' },
            { icon: <Upload size={20} />, label: 'Upload tài liệu', desc: 'PDF, slide, code template', color: 'text-green-400' },
          ].map(a => (
            <button key={a.label} className="glass glass-hover rounded-xl p-5 text-left group">
              <span className={`${a.color} mb-3 block group-hover:scale-110 transition-transform`}>{a.icon}</span>
              <div className="font-bold text-slate-700 text-sm mb-1 group-hover:text-purple-300 transition-colors">{a.label}</div>
              <div className="text-xs text-gray-500">{a.desc}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── USER DASHBOARD ─── */
function UserDash() {
  const myCourses = [
    { title: 'Tạo trò chơi HTML với AI', progress: 75, lessons: 2, completedLessons: 1, icon: '🎮' },
    { title: 'Tạo website WordPress với AI', progress: 40, lessons: 3, completedLessons: 1, icon: '💻' },
  ]
  const recommended = [
    { title: 'Lập trình Plugin WordPress', price: '999,000₫', icon: '🔌', tag: 'Nâng cao' },
    { title: 'Extensions Chrome với AI', price: '799,000₫', icon: '🧩', tag: 'Trung cấp' },
    { title: 'WordPress chuyên sâu', price: '3,990,000₫', icon: '🌐', tag: 'Nâng cao' },
  ]
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-black text-white mb-1">Hành trình học tập của bạn</h2>
        <p className="text-gray-500 text-sm">Tiếp tục học và đạt mục tiêu của bạn 🚀</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Khóa đang học', value: '2', icon: <BookOpen size={18} />, color: 'text-purple-400' },
          { label: 'Bài đã hoàn thành', value: '7', icon: <CheckCircle size={18} />, color: 'text-green-400' },
          { label: 'Giờ học', value: '12h', icon: <Clock size={18} />, color: 'text-blue-400' },
          { label: 'Điểm tích lũy', value: '850', icon: <Award size={18} />, color: 'text-yellow-400' },
        ].map(s => (
          <div key={s.label} className="glass glass-hover rounded-2xl p-5">
            <span className={s.color}>{s.icon}</span>
            <div className="text-2xl font-black text-white mt-2 mb-0.5">{s.value}</div>
            <div className="text-xs text-gray-500">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Continue learning */}
      <div className="glass rounded-2xl p-6">
        <h3 className="font-bold text-slate-800 mb-5">Tiếp tục học</h3>
        <div className="space-y-4">
          {myCourses.map(c => (
            <div key={c.title} className="p-4 rounded-xl" style={{ background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.15)' }}>
              <div className="flex items-center gap-4 mb-3">
                <div className="text-3xl">{c.icon}</div>
                <div className="flex-1">
                  <div className="font-bold text-slate-700 text-sm mb-0.5">{c.title}</div>
                  <div className="text-xs text-gray-500">{c.completedLessons}/{c.lessons} bài học · {c.progress}% hoàn thành</div>
                </div>
                <button className="btn-brand px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5">
                  <span className="relative z-10 flex items-center gap-1.5"><Play size={12} /> Học tiếp</span>
                </button>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${c.progress}%` }} />
              </div>
              <div className="flex justify-between mt-1.5 text-xs text-gray-500">
                <span>Đã học {c.progress}%</span>
                <span>Còn {100 - c.progress}% nữa</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended */}
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-bold text-slate-800">Khóa học đề xuất cho bạn</h3>
          <Link href="/courses" className="text-xs text-purple-400 hover:text-purple-300">Xem tất cả →</Link>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {recommended.map(c => (
            <Link href="/courses" key={c.title} className="glass glass-hover rounded-xl p-4 group">
              <div className="text-3xl mb-3">{c.icon}</div>
              <div className="font-bold text-slate-700 text-sm mb-1 group-hover:text-purple-300 transition-colors">{c.title}</div>
              <div className="flex items-center justify-between">
                <span className="text-purple-400 font-black text-sm">{c.price}</span>
                <span className="tag tag-advanced text-[10px]">{c.tag}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Achievement */}
      <div className="glass rounded-2xl p-6">
        <h3 className="font-bold text-slate-800 mb-4">Thành tích của bạn</h3>
        <div className="flex gap-3 flex-wrap">
          {[
            { icon: '🎯', label: 'Học viên mới', unlocked: true },
            { icon: '🔥', label: '7 ngày liên tiếp', unlocked: true },
            { icon: '📚', label: 'Hoàn thành khóa đầu', unlocked: false },
            { icon: '🏆', label: 'Top 100 học viên', unlocked: false },
            { icon: '⭐', label: 'Đánh giá 5 sao', unlocked: false },
          ].map(a => (
            <div key={a.label} className={`flex flex-col items-center gap-2 p-4 rounded-xl w-24 transition-all ${a.unlocked ? 'glass' : 'opacity-40 cursor-not-allowed'}`}
              style={{ border: a.unlocked ? '1px solid rgba(249,115,22,0.3)' : '1px solid rgba(255,255,255,0.1)' }}>
              <span className="text-2xl">{a.icon}</span>
              <span className="text-[10px] text-center text-gray-500 leading-tight">{a.label}</span>
              {a.unlocked && <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── MAIN LAYOUT ─── */
export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [activeTab, setActiveTab] = useState('dashboard')

  useEffect(() => {
    const stored = localStorage.getItem('vibecode_user')
    if (!stored) { router.push('/login'); return }
    setUser(JSON.parse(stored))
  }, [router])

  if (!user) return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#ffffff' }}>
      <div className="text-purple-400 animate-spin"><Code2 size={32} /></div>
    </div>
  )

  const handleLogout = () => {
    localStorage.removeItem('vibecode_user')
    router.push('/')
  }

  const roleLabel: Record<string, string> = { admin: 'Quản trị viên', collaborator: 'Cộng tác viên', user: 'Học viên' }
  const roleColor: Record<string, string> = { admin: 'badge-role-admin', collaborator: 'badge-role-colla', user: 'badge-role-user' }

  const adminNav = [
    { id: 'dashboard', icon: <LayoutDashboard size={17} />, label: 'Tổng quan' },
    { id: 'users', icon: <Users size={17} />, label: 'Người dùng' },
    { id: 'courses', icon: <BookOpen size={17} />, label: 'Khóa học' },
    { id: 'products', icon: <ShoppingBag size={17} />, label: 'Sản phẩm' },
    { id: 'analytics', icon: <BarChart2 size={17} />, label: 'Phân tích' },
    { id: 'settings', icon: <Settings size={17} />, label: 'Cài đặt' },
  ]
  const collabNav = [
    { id: 'dashboard', icon: <LayoutDashboard size={17} />, label: 'Tổng quan' },
    { id: 'my-courses', icon: <BookOpen size={17} />, label: 'Khóa học của tôi' },
    { id: 'content', icon: <FileText size={17} />, label: 'Quản lý nội dung' },
    { id: 'students', icon: <Users size={17} />, label: 'Học viên' },
    { id: 'earnings', icon: <DollarSign size={17} />, label: 'Hoa hồng' },
  ]
  const userNav = [
    { id: 'dashboard', icon: <LayoutDashboard size={17} />, label: 'Tổng quan' },
    { id: 'my-courses', icon: <Play size={17} />, label: 'Khóa học của tôi' },
    { id: 'certificates', icon: <Award size={17} />, label: 'Chứng chỉ' },
    { id: 'messages', icon: <MessageCircle size={17} />, label: 'Tin nhắn' },
    { id: 'settings', icon: <Settings size={17} />, label: 'Cài đặt' },
  ]
  const navItems = user.role === 'admin' ? adminNav : user.role === 'collaborator' ? collabNav : userNav

  return (
    <div className="min-h-screen flex" style={{ background: '#ffffff' }}>
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 border-r border-orange-100 flex flex-col"
        style={{ background: 'rgba(10,10,10,0.95)', backdropFilter: 'blur(20px)', position: 'sticky', top: 0, height: '100vh' }}>
        {/* Logo */}
        <div className="p-5 border-b border-orange-100">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#F97316,#F59E0B)' }}>
              <Code2 size={18} color="white" />
            </div>
            <div>
              <span className="font-black text-base gradient-text block leading-none">VibeCode</span>
              <span className="text-[9px] font-bold tracking-widest" style={{ color: '#FB923C' }}>AI PLATFORM</span>
            </div>
          </Link>
        </div>

        {/* User info */}
        <div className="p-4 border-b border-orange-100">
          <div className="flex items-center gap-3 p-3 rounded-xl" style={{ background: '#fff7ed' }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold flex-shrink-0"
              style={{ background: 'linear-gradient(135deg,#F97316,#F59E0B)' }}>
              {user.name[0]}
            </div>
            <div className="min-w-0">
              <div className="font-bold text-slate-700 text-sm truncate">{user.name}</div>
              <span className={`tag text-[10px] ${roleColor[user.role]}`}>{roleLabel[user.role]}</span>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map(item => (
            <button key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`sidebar-item w-full text-left ${activeTab === item.id ? 'active' : ''}`}
            >
              {item.icon}
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Bottom */}
        <div className="p-4 border-t border-orange-100 space-y-1">
          <Link href="/" className="sidebar-item block">
            <ChevronRight size={17} className="rotate-180" />
            <span className="text-sm font-medium">Về trang chủ</span>
          </Link>
          <button onClick={handleLogout} className="sidebar-item w-full text-left text-red-400 hover:bg-red-500/10">
            <LogOut size={17} />
            <span className="text-sm font-medium">Đăng xuất</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        {/* Top bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-8 py-4 border-b border-orange-100"
          style={{ background: 'rgba(10,10,10,0.9)', backdropFilter: 'blur(16px)' }}>
          <div>
            <span className="text-gray-500 text-sm">Dashboard</span>
            <span className="text-gray-600 text-sm mx-2">/</span>
            <span className="text-slate-700 text-sm font-semibold">{navItems.find(n => n.id === activeTab)?.label}</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-xl glass text-gray-500 hover:text-white transition-colors">
              <Bell size={17} />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
            </button>
            <div className="text-right hidden sm:block">
              <div className="text-xs text-gray-500">Xin chào,</div>
              <div className="text-sm font-semibold text-white">{user.name}</div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <div className="p-8">
          {user.role === 'admin' && <AdminDash />}
          {user.role === 'collaborator' && <CollabDash />}
          {user.role === 'user' && <UserDash />}
        </div>
      </main>
    </div>
  )
}
