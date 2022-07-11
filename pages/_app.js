import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div style={{pading:'100px'}}>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
