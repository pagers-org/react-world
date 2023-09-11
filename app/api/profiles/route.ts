import { NextRequest } from 'next/server';

function GET(req: NextRequest) {
  const username = req.nextUrl.searchParams;
  const url = req.nextUrl;
  console.log(username);

  console.log(url);
}

export { GET };
