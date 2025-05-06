import { PRELOADED_FONTS } from '@/constants';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="is">
      <Head>
        {PRELOADED_FONTS.map((href, index) => {
          return (
            <link
              key={index}
              rel="preload"
              href={href}
              as="font"
              type="font/woff2"
              crossOrigin="anonymous"
            />
          );
        })}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
