import { registerUserAPI } from '@/services/users';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const res = await registerUserAPI(body);
    return NextResponse.json({ message: 'User created successfully', success: true, res });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
