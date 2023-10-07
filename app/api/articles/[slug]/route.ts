import { http } from '@/utils/http';
import { NextRequest, NextResponse } from 'next/server';

async function GET(req: NextRequest, route: { params: { slug: string } }) {
  try {
    const slug = route.params.slug;
    const token = req.cookies.get('token')?.value || '';

    const res = await http.get(`/articles/${slug}`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Token ${token}`,
      },
    });

    return NextResponse.json({ message: 'Article Get Success', success: true, data: res });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

async function PUT(req: NextRequest, route: { params: { slug: string } }) {
  try {
    const body = await req.json();
    const slug = route.params.slug;
    const token = req.cookies.get('token')?.value || '';

    const res = await http.put(`/articles/${slug}`, body, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Token ${token}`,
      },
    });

    return NextResponse.json({ message: 'Article Update Success', success: true, data: res });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

async function DELETE(req: NextRequest, route: { params: { slug: string } }) {
  try {
    const slug = route.params.slug;
    const token = req.cookies.get('token')?.value || '';

    const res = await http.delete(`/articles/${slug}`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Token ${token}`,
      },
    });

    return NextResponse.json({ message: 'Article Delete Success', success: true, data: res });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export { GET, PUT, DELETE };
