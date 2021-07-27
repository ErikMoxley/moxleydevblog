import Header from '../components/Header'
// import HeaderTop from '../components/HeaderTop'
import '../styles/globals.css'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className='container'>
        <div className='content'>
        <Component {...pageProps} />
        </div>
      <Footer/>
      </div>
      </>
  )
}

export default MyApp
