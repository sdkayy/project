import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" style={{ overflowY: 'scroll' }}>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=5,user-scalable=0,viewport-fit=cover"
          />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <meta httpEquiv="expires" content="10800" />
          <meta name="og:type" content="website" />
          <meta name="og:site_name" content="Austin Quinn" />
          <meta property="og:locale" content="en_US" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@quintranet" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
