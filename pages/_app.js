import '../styles/globals.css'
import "semantic-ui-css/semantic.min.css"
import Footer from '../src/component/Footer'
import Top from '../src/component/Top'
import NavBar from '../src/component/NavBar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div style={{width:"20%"}}>
        <NavBar></NavBar>
      </div>
      <div style={{width:"100%", paddingLeft:"255px"}}>
        <Top/>
        <Component {...pageProps} />
        <Footer/>
      </div>
    </>
  )
}

export default MyApp
