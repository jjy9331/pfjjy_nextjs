import { Html, Head, Main, NextScript } from 'next/document'
import Header from '../pages/header.js'
import Footer from '../pages/footer.js'
import Hfm from '../pages/hfm.js'
import CustomCursor from '../pages/cursor.js'

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Header />
        <Main />
        <NextScript />
        <Hfm />
        <Footer />
      </body>
    </Html>
  )
}
