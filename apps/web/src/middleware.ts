import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { CookieKeys } from './constants';
import { verifyJWT } from './utils/jwt';

export async function middleware(req: NextRequest) {
  if (
    !req.nextUrl.pathname.startsWith('/skattframtol') &&
    !req.nextUrl.pathname.startsWith('/stadfesta-innskraningu') &&
    !req.nextUrl.pathname.startsWith('/test')
  ) {
    return NextResponse.next();
  }

  const loginUrl = `${
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://island2025-alhlidateymi.stefna.is'
  }/innskraning`;

  const cookie = req.cookies.get(CookieKeys.ACCESS_TOKEN);
  if (!cookie?.value) return NextResponse.redirect(loginUrl);

  try {
    const tokenPayload = await verifyJWT(
      cookie?.value as string,
      process.env.JWT_ACCESS_SECRET as string,
    );

    const isTokenExpired = tokenPayload.exp * 1000 < Date.now();

    if (isTokenExpired) {
      const response = NextResponse.redirect(loginUrl);
      response.cookies.delete(CookieKeys.ACCESS_TOKEN);
      return response;
    }
  } catch {
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {};
