/* eslint-disable prefer-const */
import { Head, Html, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang="en" className=" min-h-[100vh] antialiased">
      <Head />
      <body className="bg-background">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
