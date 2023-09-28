import { favoriteAPI, unFavoriteAPI } from '@/services/articles';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest, route: { params: { slug: string } }) {
  try {
    console.log('좋아요');

    console.log(route.params.slug);

    const slug = route.params.slug;
    const token = request.cookies.get('token')?.value || '';
    const res = await favoriteAPI(slug, token);
    console.log(res);

    return NextResponse.json({ message: 'Favorite Success', success: true, data: res });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    console.log('좋아요 취소');
    const slug = await request.json();
    const token = request.cookies.get('token')?.value || '';
    const res = await unFavoriteAPI(slug, token);
    return NextResponse.json({ message: 'Un Favorite Success', success: true, data: res });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
