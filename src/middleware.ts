import { NextRequest, NextResponse } from 'next/server';

export async function checkTokenUser(token: string) {
  const response = await fetch("http://localhost:3001/api/check-token-user", {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    }
  });
  return response
}

export async function middleware(req: NextRequest) {

  const token = req.cookies.get('blazebot.token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  try {
    const validToken = await checkTokenUser(token);
    const response = await validToken.json()

    if (validToken.status >= 400) {
      return NextResponse.redirect(new URL('/', req.url));
    }
    if (response?.error) {
      return NextResponse.redirect(new URL('/', req.url));
    }

  } catch (error) {
    console.log(error);
    return NextResponse.redirect(new URL('/', req.url));
  }
}

export const config = {
  matcher: [
    // "/dashboard",
    // "/dashboard/:path*",
  ],
};