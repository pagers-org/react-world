import { getArticlesWithAuthorAPI } from '@/services/articles';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  //   const page = searchParams.get('page');
  const username = searchParams.get('username') || '';
  console.log('username: ' + username);

  const token = request.cookies.get('token')?.value || '';

  const { articles, articlesCount } = await getArticlesWithAuthorAPI(username, token);

  console.log(articles);

  return NextResponse.json({ articles, articlesCount });
}
