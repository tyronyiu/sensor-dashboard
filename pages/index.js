import Head from 'next/head'
import styles from '../styles/Home.module.css'
import DataTable from '../components/DataTable'
import Graph from '../components/Graph'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            Sensor Datahub
        </h1>

        <p className={styles.description}>
          Location: {' '}
          <code className={styles.code}>/Bedroom</code>
        </p>

        <div className={styles.grid}>
<Graph/>

<DataTable/>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
