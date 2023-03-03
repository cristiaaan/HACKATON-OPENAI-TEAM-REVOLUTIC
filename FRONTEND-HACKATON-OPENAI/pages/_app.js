import 'rsuite/dist/rsuite.min.css';
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps, session }) {
  return <>
    <div className="bg-light min-h-screen">
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </div>
  </>
}
