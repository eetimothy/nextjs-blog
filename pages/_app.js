import '../styles/global.css'

export default function App ({ Component, pageProps }) {
    return <Component {...pageProps} /> //global css styles, App component is the top level component
}