import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import ms from 'ms';
import { setCookie } from 'cookies-next';
import { CookieKeys } from '@/constants';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const phonenumber = req.query?.phonenumber as string;

  if (!phonenumber || String(phonenumber).replace('-', '') !== '7728391') {
    return res.redirect('/innskraning');
  }

  const expirationString = '2d';

  const accessToken = jwt.sign(
    {
      name: 'Jökull Þórðarson',
      email: 'jokull.thordarson@email.is',
      phonenumber: '7728391',
    },
    process.env.JWT_ACCESS_SECRET as string,
    {
      expiresIn: expirationString,
    },
  );

  const expirationOffsetInMilliseconds = ms(expirationString);

  const expirationDate = new Date();

  expirationDate.setTime(
    expirationDate.getTime() + expirationOffsetInMilliseconds,
  );

  setCookie(CookieKeys.ACCESS_TOKEN, accessToken, {
    req,
    res,
    expires: expirationDate,
  });

  return res.redirect('/skattframtol');
};

export default handler;
