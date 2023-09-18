import { getUserAPI, updateUserAPI } from '@/services/users';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('token')?.value || '';
    const res = await getUserAPI(token);
    return NextResponse.json({ message: 'Success', success: true, data: res });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const token = request.cookies.get('token')?.value || '';
    const res = await updateUserAPI(body, token);

    return NextResponse.json({ message: 'Success', success: true, data: res });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
