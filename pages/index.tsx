import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Landing from '../components/Landing'
import Navbar from '../components/Navbar'
import Events from '../components/Events'
import Contact from '../components/Contact'
import Team from '../components/Team'

const Home: NextPage = () => {
  return (
    <>
    <div className="bg-black text-white">
      <Head>
        <title>Çukurova Blockchain</title>
        <meta name="description" content="Çukurova Blockchain official website" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar/>
      <Landing />
      <About/>
      <Team/>
      <Events/>
      <Contact/>
    </div>
   </>
  )
}

export default Home
