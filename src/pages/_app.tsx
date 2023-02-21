import 'windi.css'
import '@style/font.css'
import '@style/reset.css'
import '@style/content.css'
import type { AppProps } from 'next/app'
import NavBar from '@comps/NavBar'
import Footer from '@comps/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <NavBar />
    <div className="flex flex-col mx-auto max-w-screen-lg min-h-[100vh]">
      <main
        className="flex-grow
          px-6
          overflow-hidden
          sm:(px-18 pt-12 pb-16 mt-28) <sm:(mt-14 pt-14) "
      >
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  </>
  )
}
