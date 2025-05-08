import { NextApiRequest, NextApiResponse } from 'next';
import { deleteCookie } from 'cookies-next';
import { CookieKeys } from '@/constants';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  deleteCookie(CookieKeys.ACCESS_TOKEN, { req, res });
  return res.json({ message: 'Logout successful' });
};

export default handler;
