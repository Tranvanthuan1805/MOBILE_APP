import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ChatBot from '@/components/ChatBot'
import Link from 'next/link'
import { Users, Target, Award, Rocket, Heart, Code2, Star, CheckCircle } from 'lucide-react'

const TEAM = [
  { name: 'Minh Thuận', role: 'Founder & CEO', icon: '👨‍💻', desc: '10+ năm kinh nghiệm lập trình, chuyên gia AI & WordPress' },
  { name: 'Thu Hà', role: 'Lead Instructor', icon: '👩‍🏫', desc: 'Giảng viên cao cấp, 8 năm dạy lập trình và thiết kế web' },
  { name: 'Quang Huy', role: 'AI Engineer', icon: '🤖', desc: 'Kỹ sư AI, xây dựng các plugin và chatbot thông minh' },
  { name: 'Bảo Ngân', role: 'UI/UX Designer', icon: '🎨', desc: 'Designer 7 năm kinh nghiệm, chuyên thiết kế sản phẩm số' },
]

const VALUES = [
  { icon: <Target size={22} />, title: 'Thực chiến 100%', desc: 'Mọi khóa học đều tập trung vào dự án thực tế, không lý thuyết suông.' },
  { icon: <Rocket size={22} />, title: 'AI-First', desc: 'Tích hợp AI vào mọi khía cạnh học tập để tăng tốc độ và chất lượng.' },
  { icon: <Heart size={22} />, title: 'Cộng đồng mạnh', desc: 'Xây dựng cộng đồng dev Việt Nam đoàn kết, hỗ trợ lẫn nhau.' },
  { icon: <Award size={22} />, title: 'Chất lượng cao', desc: 'Cam kết nội dung chuẩn quốc tế, cập nhật liên tục theo xu hướng.' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ background: '#ffffff' }}>
      <Navbar />
      <section className="pt-28 pb-20 relative overflow-hidden">
        <div className="grid-pattern absolute inset-0" />
        <div className="orb w-96 h-96 -top-20 right-0" style={{ background: 'rgba(249,115,22,0.12)' }} />
        <div className="orb w-80 h-80 bottom-0 left-0" style={{ background: 'rgba(245,158,11,0.07)' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-badge mb-6 mx-auto"><Code2 size={13} /> Về VibeCode</div>
          <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Chúng tôi xây dựng <span className="gradient-text">tương lai lập trình</span> Việt Nam
          </h1>
          <p className="text-gray-500 text-xl leading-relaxed mb-10">
            VibeCode ra đời với sứ mệnh đưa lập trình kết hợp AI đến tay mọi người Việt Nam.
            Từ người mới bắt đầu đến lập trình viên chuyên nghiệp, chúng tôi cung cấp lộ trình học rõ ràng và thực chiến.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses" className="btn-brand px-8 py-4 rounded-2xl font-bold flex items-center gap-2 justify-center">
              <span className="relative z-10 flex items-center gap-2"><Rocket size={18} /> Bắt đầu học ngay</span>
            </Link>
            <Link href="/contact" className="glass neon-border px-8 py-4 rounded-2xl font-bold text-white hover:bg-orange-50 transition-all flex items-center gap-2 justify-center">
              <Users size={18} /> Liên hệ chúng tôi
            </Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20" style={{ background: '#fff7ed' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="section-badge mb-4"><Target size={13} /> Sứ mệnh</div>
              <h2 className="text-4xl font-black text-white mb-5 leading-tight">
                Democratize <span className="gradient-text">AI Coding</span> cho người Việt
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Chúng tôi tin rằng lập trình kết hợp AI sẽ thay đổi cách con người làm việc và tạo ra sản phẩm.
                VibeCode muốn đảm bảo mọi người Việt Nam đều có cơ hội tiếp cận và thành thạo công nghệ này.
              </p>
              <ul className="space-y-3">
                {['Học phí hợp lý, phù hợp thu nhập Việt Nam', 'Nội dung tiếng Việt 100%, dễ hiểu', 'Hỗ trợ cộng đồng 24/7 qua Discord & Zalo', 'Cập nhật công nghệ AI mới nhất liên tục'].map(t => (
                  <li key={t} className="flex items-center gap-3 text-gray-600">
                    <CheckCircle size={18} className="text-green-400 flex-shrink-0" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { label: 'Học viên', value: '1,200+', icon: '👨‍🎓' },
                { label: 'Khóa học', value: '5+', icon: '📚' },
                { label: 'Sản phẩm AI', value: '50+', icon: '🤖' },
                { label: 'Hài lòng', value: '98%', icon: '⭐' },
              ].map(s => (
                <div key={s.label} className="glass glass-hover rounded-2xl p-6 text-center">
                  <span className="text-4xl block mb-2">{s.icon}</span>
                  <div className="text-3xl font-black gradient-text mb-1">{s.value}</div>
                  <div className="text-gray-500 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-badge mb-4 mx-auto"><Star size={13} /> Giá trị cốt lõi</div>
            <h2 className="text-4xl font-black text-white">Điều chúng tôi tin tưởng</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(v => (
              <div key={v.title} className="glass glass-hover rounded-2xl p-6 text-center group">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: '#fff7ed' }}>{v.icon}</div>
                <h3 className="font-black text-slate-900 mb-2 group-hover:text-purple-300 transition-colors">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20" style={{ background: '#fff7ed' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-badge mb-4 mx-auto"><Users size={13} /> Đội ngũ</div>
            <h2 className="text-4xl font-black text-white mb-3">Những người xây dựng <span className="gradient-text">VibeCode</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map(m => (
              <div key={m.name} className="glass glass-hover rounded-2xl p-6 text-center group">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-5xl mx-auto mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: '#fff7ed' }}>{m.icon}</div>
                <h3 className="font-black text-slate-800 text-lg mb-0.5 group-hover:text-purple-300 transition-colors">{m.name}</h3>
                <div className="text-purple-400 text-sm font-semibold mb-3">{m.role}</div>
                <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="grid-pattern absolute inset-0" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-4">Tham gia cùng VibeCode hôm nay!</h2>
          <p className="text-gray-500 text-xl mb-8">Hơn 1,200 học viên đang học lập trình AI cùng chúng tôi. Bạn thì sao?</p>
          <Link href="/register" className="btn-brand px-10 py-4 rounded-2xl text-lg font-black inline-flex items-center gap-2">
            <span className="relative z-10 flex items-center gap-2"><Rocket size={20} /> Đăng ký miễn phí ngay</span>
          </Link>
        </div>
      </section>
      <Footer />
      <ChatBot />
    </div>
  )
}
