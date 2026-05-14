import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()

    if (!email || !password)
      return NextResponse.json({ error: 'Vui lòng nhập email và mật khẩu.' }, { status: 400 })

    const user = await prisma.user.findUnique({ where: { email } })
    if (!user)
      return NextResponse.json({ error: 'Email hoặc mật khẩu không đúng.' }, { status: 401 })

    const valid = await bcrypt.compare(password, user.password)
    if (!valid)
      return NextResponse.json({ error: 'Email hoặc mật khẩu không đúng.' }, { status: 401 })

    return NextResponse.json({
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
    })
  } catch {
    return NextResponse.json({ error: 'Lỗi server. Thử lại sau.' }, { status: 500 })
  }
}
