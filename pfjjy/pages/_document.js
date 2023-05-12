import { Html, Head, Main, NextScript } from 'next/document'
import Header from '../pages/header.js'
import Footer from '../pages/footer.js'

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Header></Header>
        <Main />
        <NextScript />
        <Footer></Footer>
      </body>
    </Html>
  )
}
