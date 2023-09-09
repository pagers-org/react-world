import { NextResponse } from 'next/server';

export async function GET(requet: Request) {
  return NextResponse.json('Hello World!');
}
