import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

