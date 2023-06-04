import { NextRequest, NextResponse } from 'next/server';

export async function checkTokenUser(token: string) {

  const response = await fetch("http://localhost:3001/api/check-token-user", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return response
}

export async function middleware(req: NextRequest) {

  const token = req.cookies.get('blazebot.token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // try {

  //   const response = await fetch("http://localhost:3001/api/check-token-user", {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     }
  //   });
  //   console.log(response.status)

  //   if (response.status >= 400) {
  //     NextResponse.redirect(new URL('/', req.url));
  //   }

  // } catch (error) {
  //   console.error(error);
  //   NextResponse.redirect(new URL('/', req.url));

  // }
}

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/:path*",
  ],
};