import { http } from '@/utils/http';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log(body);

    const req = await http.post('/users', { user: body });

    console.log(req);

    return NextResponse.json({ message: 'User created successfully', success: true, req });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
