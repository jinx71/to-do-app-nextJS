import Navigation from './_navigation'
import Footer from './_footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>

    <Navigation></Navigation>

    <Component {...pageProps} />

    <Footer></Footer>
  </>
}

export default MyApp
