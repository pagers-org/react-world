import { getArticlesWithAuthorAPI } from '@/services/articles';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const username = searchParams.get('username') || '';

  const token = request.cookies.get('token')?.value || '';

  const { articles, articlesCount } = await getArticlesWithAuthorAPI(username, token);

  return NextResponse.json({ articles, articlesCount });
}
