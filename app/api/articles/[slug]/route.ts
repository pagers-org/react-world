import { http } from '@/utils/http';
import { NextRequest, NextResponse } from 'next/server';

async function GET(req: NextRequest, route: { params: { slug: string } }) {}
async function PUT(req: NextRequest, route: { params: { slug: string } }) {
  try {
    const body = await req.json();
    const slug = route.params.slug;
    const token = req.cookies.get('token')?.value || '';
    console.log('좋아요 Route');
    console.log(slug);
    console.log(token);
    console.log(body);

    const res = await http.put(`/articles/${slug}`, body, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Token ${token}`,
      },
    });

    console.log(res);

    return NextResponse.json({ message: 'Article Update Success', success: true, data: res });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
async function DELETE(req: NextRequest, route: { params: { slug: string } }) {
  try {
    const slug = route.params.slug;
    const token = req.cookies.get('token')?.value || '';
    console.log('좋아요 Route');
    console.log(slug);
    console.log(token);

    const res = await http.delete(`/articles/${slug}`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Token ${token}`,
      },
    });

    console.log(res);

    return NextResponse.json({ message: 'Article Delete Success', success: true, data: res });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export { GET, PUT, DELETE };
