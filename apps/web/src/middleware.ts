// TODO: Edit this file when we turn in the project

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { CookieKeys } from './constants';
import { verifyJWT } from './utils/jwt';

const [AUTH_USER, AUTH_PASS] = 'island:runarcool'.split(':');

export async function middleware(req: NextRequest) {
  if (!isAuthenticated(req)) {
    return new NextResponse('Authentication required', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic' },
    });
  }

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

function isAuthenticated(req: NextRequest) {
  const authheader =
    req.headers.get('authorization') || req.headers.get('Authorization');

  if (!authheader) {
    return false;
  }

  const auth = Buffer.from(authheader.split(' ')[1], 'base64')
    .toString()
    .split(':');

  if (auth[0] == AUTH_USER && auth[1] == AUTH_PASS) {
    return true;
  }
  return false;
}

export const config = {};
