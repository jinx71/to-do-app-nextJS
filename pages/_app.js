
import Authcontext from '../Contex/Authcontext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Authcontext> 
    <Component {...pageProps} />
  </Authcontext>

}

export default MyApp
