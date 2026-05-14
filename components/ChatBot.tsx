'use client'
import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, Minimize2 } from 'lucide-react'

const QUICK_QUESTIONS = [
  'Khóa học phù hợp cho người mới?',
  'Học phí như thế nào?',
  'Có học thử miễn phí không?',
  'Cộng tác viên là gì?',
]

const BOT_RESPONSES: Record<string, string> = {
  default: 'Cảm ơn bạn đã liên hệ VibeCode! Tôi là Kira AI, trợ lý học tập của bạn. Bạn có thể hỏi tôi về khóa học, học phí, lộ trình học, hoặc bất kỳ vấn đề nào về lập trình! 🚀',
  'khóa học': 'VibeCode có 5+ khóa học từ cơ bản đến nâng cao:\n\n📱 **Tạo trò chơi HTML với AI** – 299,000₫\n🔌 **Lập trình Plugin WordPress** – 999,000₫\n🌐 **WordPress chuyên sâu với AI** – 3,990,000₫\n💻 **Tạo website WordPress với AI** – 999,000₫\n🧩 **Tạo Extensions Chrome với AI** – 799,000₫\n\nBạn muốn biết thêm về khóa học nào?',
  'học phí': 'Học phí tại VibeCode rất hợp lý:\n\n💰 Từ **299,000₫** đến **3,990,000₫** tùy khóa học\n🎁 Có gói bundle tiết kiệm đến 40%\n💳 Thanh toán một lần, học trọn đời\n🔄 Hoàn tiền 100% trong 7 ngày nếu không hài lòng\n\nXem chi tiết tại /courses nhé!',
  'miễn phí': 'Có! VibeCode cung cấp nhiều tài nguyên miễn phí:\n\n✅ Blog AI với 50+ bài viết\n✅ Video YouTube miễn phí\n✅ Tham gia cộng đồng Discord\n✅ Tài liệu học tập cơ bản\n\nĐăng ký tài khoản miễn phí để truy cập ngay!',
  'cộng tác viên': 'Cộng tác viên (Collaborator) là vai trò đặc biệt tại VibeCode:\n\n👨‍🏫 Có thể tạo và quản lý khóa học\n📊 Xem thống kê học viên\n💰 Nhận hoa hồng từ khóa học\n🎯 Truy cập công cụ tạo nội dung AI\n\nLiên hệ admin để được nâng cấp lên Cộng tác viên!',
}

function getBotResponse(msg: string): string {
  const lower = msg.toLowerCase()
  if (lower.includes('khóa học') || lower.includes('course')) return BOT_RESPONSES['khóa học']
  if (lower.includes('học phí') || lower.includes('giá') || lower.includes('tiền')) return BOT_RESPONSES['học phí']
  if (lower.includes('miễn phí') || lower.includes('free') || lower.includes('thử')) return BOT_RESPONSES['miễn phí']
  if (lower.includes('cộng tác') || lower.includes('collaborator')) return BOT_RESPONSES['cộng tác viên']
  return BOT_RESPONSES['default']
}

type Msg = { role: 'user' | 'bot'; text: string; time: Date }

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [minimized, setMinimized] = useState(false)
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: 'bot', text: 'Xin chào! Tôi là **Kira AI** 🤖\n\nTôi có thể giúp bạn về khóa học, lộ trình học lập trình, và các tính năng của VibeCode. Hỏi tôi bất cứ điều gì nhé!', time: new Date() }
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const messagesEnd = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open && !minimized) {
      messagesEnd.current?.scrollIntoView({ behavior: 'smooth' })
      inputRef.current?.focus()
    }
  }, [msgs, open, minimized])

  const send = async (text?: string) => {
    const msg = text || input.trim()
    if (!msg) return
    setInput('')
    setMsgs(prev => [...prev, { role: 'user', text: msg, time: new Date() }])
    setTyping(true)
    await new Promise(r => setTimeout(r, 800 + Math.random() * 600))
    const response = getBotResponse(msg)
    setTyping(false)
    setMsgs(prev => [...prev, { role: 'bot', text: response, time: new Date() }])
  }

  const formatTime = (d: Date) => d.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })

  const renderText = (text: string) => text.split('\n').map((line, i) => {
    const bold = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    return <span key={i} dangerouslySetInnerHTML={{ __html: bold }} className="block" />
  })

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => { setOpen(true); setMinimized(false) }}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-300 btn-brand ${open && !minimized ? 'scale-0 opacity-0' : 'scale-100 opacity-100 animate-glow'}`}
        aria-label="Mở chatbot"
      >
        <span className="relative z-10">
          <MessageCircle size={24} />
        </span>
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-[#0a0a0a] animate-pulse" />
      </button>

      {/* Chat window */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}
        style={{ width: 360 }}
      >
        <div className="glass rounded-2xl overflow-hidden shadow-2xl flex flex-col" style={{ height: minimized ? 60 : 520, transition: 'height 0.3s ease', boxShadow: '0 25px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(249,115,22,0.3)' }}>
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 flex-shrink-0" style={{ background: 'linear-gradient(135deg,#F97316,#F59E0B)' }}>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
                <Bot size={18} color="white" />
              </div>
              <div>
                <div className="font-bold text-slate-700 text-sm leading-none">Kira AI</div>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 bg-green-300 rounded-full" />
                  <span className="text-[11px] text-white/80">Trực tuyến</span>
                </div>
              </div>
            </div>
            <div className="flex gap-1">
              <button onClick={() => setMinimized(!minimized)} className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/20 transition-all">
                <Minimize2 size={15} />
              </button>
              <button onClick={() => setOpen(false)} className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/20 transition-all">
                <X size={15} />
              </button>
            </div>
          </div>

          {!minimized && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ background: 'rgba(10,10,10,0.8)' }}>
                {msgs.map((m, i) => (
                  <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} gap-2`}>
                    {m.role === 'bot' && (
                      <div className="w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center text-xs font-bold mt-1" style={{ background: 'linear-gradient(135deg,#F97316,#F59E0B)' }}>K</div>
                    )}
                    <div className="max-w-[80%]">
                      <div className={`px-3.5 py-2.5 text-sm leading-relaxed ${m.role === 'user' ? 'chat-bubble-user text-white' : 'chat-bubble-bot text-gray-200'}`}>
                        {renderText(m.text)}
                      </div>
                      <div className={`text-[10px] text-gray-600 mt-1 ${m.role === 'user' ? 'text-right' : 'text-left'}`}>{formatTime(m.time)}</div>
                    </div>
                  </div>
                ))}
                {typing && (
                  <div className="flex gap-2 items-end">
                    <div className="w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center text-xs font-bold" style={{ background: 'linear-gradient(135deg,#F97316,#F59E0B)' }}>K</div>
                    <div className="chat-bubble-bot px-4 py-3">
                      <div className="flex gap-1 items-center h-4">
                        {[0, 1, 2].map(j => (
                          <span key={j} className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: `${j * 0.15}s` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEnd} />
              </div>

              {/* Quick questions */}
              <div className="px-3 py-2 flex gap-1.5 overflow-x-auto" style={{ background: 'rgba(10,10,10,0.6)' }}>
                {QUICK_QUESTIONS.map(q => (
                  <button key={q} onClick={() => send(q)}
                    className="flex-shrink-0 px-3 py-1.5 rounded-xl text-xs font-medium text-purple-300 border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 transition-all whitespace-nowrap"
                  >
                    {q}
                  </button>
                ))}
              </div>

              {/* Input */}
              <div className="p-3 flex gap-2" style={{ background: 'rgba(10,10,10,0.9)', borderTop: '1px solid rgba(249,115,22,0.2)' }}>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && !e.shiftKey && send()}
                  placeholder="Nhập câu hỏi..."
                  className="input-brand text-sm py-2"
                />
                <button
                  onClick={() => send()}
                  disabled={!input.trim()}
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 btn-brand disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10"><Send size={16} /></span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
