import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import NextNProgress from "nextjs-progressbar";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
    <Navbar/>
    <NextNProgress/>
    <div className='pt-28'>
    <Component {...pageProps} />
    </div>
    <Footer/>
    </SessionProvider>
  )
}
