import { fetchArticlesWithTag } from '@/services/articles';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const tag = req.nextUrl.searchParams.get('tag') ?? '';
  const res = await fetchArticlesWithTag(tag);
  return NextResponse.json(res);
}
