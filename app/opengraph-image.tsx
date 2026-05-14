import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'VibeCode — Học Vibe Coding & Lập trình AI #1 Việt Nam'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a00 50%, #0a0a0a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Grid pattern */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(249,115,22,0.15) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
        {/* Orange glow */}
        <div style={{
          position: 'absolute', top: -100, right: -100,
          width: 500, height: 500, borderRadius: '50%',
          background: 'rgba(249,115,22,0.15)',
          filter: 'blur(80px)',
        }} />

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <div style={{
            width: 64, height: 64, borderRadius: 16,
            background: 'linear-gradient(135deg,#F97316,#F59E0B)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 32,
          }}>
            {'</>'}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 36, fontWeight: 900, color: '#F97316' }}>VibeCode</span>
            <span style={{ fontSize: 14, color: 'rgba(249,115,22,0.6)', letterSpacing: 4, fontWeight: 700 }}>AI PLATFORM</span>
          </div>
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: 60, fontWeight: 900, color: 'white',
          textAlign: 'center', margin: '0 80px 20px',
          lineHeight: 1.1,
        }}>
          Học{' '}
          <span style={{ color: '#F97316' }}>Vibe Coding</span>
          {' '}&{' '}
          <span style={{ color: '#F97316' }}>Lập trình AI</span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 24, color: 'rgba(255,255,255,0.6)',
          textAlign: 'center', margin: '0 120px 40px',
        }}>
          Nền tảng học lập trình AI #1 Việt Nam · 1,200+ học viên
        </p>

        {/* Stats */}
        <div style={{ display: 'flex', gap: 32 }}>
          {[
            { label: '6+ Khóa học', icon: '📚' },
            { label: '3 Buổi miễn phí', icon: '🎁' },
            { label: '1,200+ Dev', icon: '👨‍💻' },
            { label: 'Hỗ trợ 24/7', icon: '💬' },
          ].map((s) => (
            <div key={s.label} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
              background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.3)',
              borderRadius: 16, padding: '12px 20px',
            }}>
              <span style={{ fontSize: 24 }}>{s.icon}</span>
              <span style={{ fontSize: 14, color: 'white', fontWeight: 700 }}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* URL */}
        <p style={{ position: 'absolute', bottom: 30, color: 'rgba(249,115,22,0.5)', fontSize: 18 }}>
          hocvibecode.vercel.app
        </p>
      </div>
    ),
    { ...size },
  )
}
