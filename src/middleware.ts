import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";

// 다크테마 값 구해주기
type Theme = "light" | "dark" | "colored";

export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const response = NextResponse.next();
  const fetchMode = request.headers.get("sec-fetch-mode");

  console.log("미들웨어 실행중 !");

  //   // request.url 은 전체 브라우저 경로를 가져옴
  //   console.log("pathname: ", pathname);

  return response;
}

export const config = {
  matcher: ["/"],
};
