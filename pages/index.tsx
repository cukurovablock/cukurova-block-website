import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Çukurova Blockchain </title>
        <meta name="description" content="Çukurova Blockchain official website" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <h1 className="text-3xl font-bold text-green-800 text-center mt-52">
      Çukurova Blockchain Yükleniyor...
    </h1>
    </div>
  )
}

export default Home
