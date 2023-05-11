import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="icon" href="../src/images/avatar_face.png" />
          <meta charSet="UTF-8" />
          <meta name="og:title" content={'Bruno Guedes'} />
          <title>Bruno Guedes</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
