import { http } from '@/utils/http';
import { NextRequest, NextResponse } from 'next/server';

// 좋아요
export async function POST(request: NextRequest, route: { params: { slug: string } }) {
  try {
    const slug = route.params.slug;
    const token = request.cookies.get('token')?.value || '';
    console.log('좋아요 Route');
    console.log(slug);
    console.log(token);

    const res = await http.post(`/articles/${slug}/favorite`, '', {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Token ${token}`,
      },
    });

    console.log(res);

    return NextResponse.json({ message: 'Favorite Success', success: true, data: res });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

// 좋아요 취소
export async function DELETE(request: NextRequest, route: { params: { slug: string } }) {
  try {
    console.log('좋아요 취소');
    const slug = route.params.slug;
    const token = request.cookies.get('token')?.value || '';
    const res = await http.delete(`/articles/${slug}/favorite`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Token ${token}`,
      },
    });
    console.log(res);
    return NextResponse.json({ message: 'Un Favorite Success', success: true, data: res });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
