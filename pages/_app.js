import Header from '../components/Header'
// import HeaderTop from '../components/HeaderTop'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      {/* <HeaderTop /> */}
      <main className='container'>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
