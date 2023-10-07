import { getArticlesAPI, getArticlesWithFavoritedAPI } from '@/services/articles';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const page = searchParams.get('page');
  const username = searchParams.get('username');

  const token = request.cookies.get('token')?.value || '';

  if (username) {
    const { articles, articlesCount } = await getArticlesWithFavoritedAPI(username, token, Number(page));
    return NextResponse.json({ articles, articlesCount });
  } else {
    const { articles, articlesCount } = await getArticlesAPI(token, Number(page));
    return NextResponse.json({ articles, articlesCount });
  }
}
