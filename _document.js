import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="SHAHBAZ Univers — Universal digital platform." />
        <meta property="og:title" content="SHAHBAZ Univers" />
        <meta property="og:description" content="Universal 3D‑enabled platform for everything." />
        <meta property="og:image" content="/images/shahbaz-banner.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
