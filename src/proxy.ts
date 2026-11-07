import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const getCookie = await request.cookies.get("admin");
  if (!getCookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // if cookies found so you can naviagate
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
