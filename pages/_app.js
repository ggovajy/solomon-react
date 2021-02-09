import '../styles/globals.css'
import "semantic-ui-css/semantic.min.css"
import Footer from '../src/component/Footer'
import Top from '../src/component/Top'
import Nav from '../src/component/Nav'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div style={{width:"20%"}}>
        <Nav></Nav>
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
