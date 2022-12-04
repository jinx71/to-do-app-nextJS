import Navigation from './_navigation'
import Footer from './_footer'

import Authcontext from '../Contex/Authcontext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Authcontext>
      <Navigation></Navigation>


      <Component {...pageProps} />

      <Footer></Footer>

    </Authcontext>
  )
}

export default MyApp
