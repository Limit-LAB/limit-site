import 'windi.css'
import '@public/font.css'
import '@public/reset.css'
import type { AppProps } from 'next/app'
import NavBar from '@comps/NavBar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="antialiased">
      <NavBar />
      <main className="max-w-screen-xl px-4 overflow-hidden">
        <Component {...pageProps} />
      </main>
    </div>
  )
}
