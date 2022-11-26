import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from './components/Navbar'


const Home: NextPage = () => {
  return (
    <div className="bg-gray-900 w-full h-screen">
      <Head>
        <title>Çukurova Blockchain</title>
        <meta name="description" content="Çukurova Blockchain official website" />
        <link rel="icon" href="/logo.png" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <Navbar/>


    </div>
  )
}

export default Home
