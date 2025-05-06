import { JWTPayload, jwtVerify } from 'jose';
import type { TokenPayload } from '@/types';

export const verifyJWT = async (token: string, secret: string) => {
  const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));
  return payload as JWTPayload & TokenPayload;
};
