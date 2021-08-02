import Header from '../components/Header'
import '../styles/globals.css'
import Footer from '../components/Footer'
import FooterBottom from '../components/FooterBottom';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className='container'>
        <div className='content'>
        <Component {...pageProps} />
        </div>
      <Footer id='footer'/>
      <FooterBottom id='footer-bottom'/>
      </div>
      </>
  )
}

export default MyApp
