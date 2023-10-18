import { http } from '@/utils/http';
import { NextRequest, NextResponse } from 'next/server';

// 좋아요
async function POST(request: NextRequest, route: { params: { slug: string } }) {
  try {
    const slug = route.params.slug;
    const token = request.cookies.get('token')?.value || '';

    const res = await http.post(`/articles/${slug}/favorite`, '', {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Token ${token}`,
      },
    });

    return NextResponse.json({ message: 'Favorite Success', success: true, data: res });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

// 좋아요 취소
async function DELETE(request: NextRequest, route: { params: { slug: string } }) {
  try {
    const slug = route.params.slug;
    const token = request.cookies.get('token')?.value || '';
    const res = await http.delete(`/articles/${slug}/favorite`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Token ${token}`,
      },
    });

    return NextResponse.json({ message: 'Un Favorite Success', success: true, data: res });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export { POST, DELETE };
