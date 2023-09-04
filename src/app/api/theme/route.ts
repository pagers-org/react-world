import { NextResponse } from "next/server";
const TEN_YEARS_IN_SECONDS = 60 * 60 * 24 * 365 * 10;

export const POST = async (request: Request) => {
  const { theme } = await request.json();

  let response = new NextResponse(theme);

  response.cookies.set("theme", theme, {
    expires: new Date(Date.now() + TEN_YEARS_IN_SECONDS),
    secure: false,
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });

  return response;
};
