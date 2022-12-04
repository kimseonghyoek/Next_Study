import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header/>
    <Component {...pageProps} />
    <style jsx global>{
    `
    body {
      margin: 0;
      font-family: 'Open Sans', sans-serif;
    }
    `
    }</style>
    </>
  )
}

export default MyApp
