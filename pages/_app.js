import '../styles/globals.css'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import Head from 'next/head'

const client = new ApolloClient({
  uri: 'https://athenaeum.freemyip.com:4000/graphql',
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Head>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <title>Sensor Dashboard</title>
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
