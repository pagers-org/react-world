import { getArticlesFeed } from '@/services/articles';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const page = searchParams.get('page');

  const token = request.cookies.get('token')?.value || '';

  const { articles, articlesCount } = await getArticlesFeed(Number(page), token);

  return NextResponse.json({ articles, articlesCount });
}
