import type { GetStaticProps } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Landing from '../components/Landing'
import Navbar from '../components/Navbar'
import Events from '../components/Events'
import Contact from '../components/Contact'
import Team from '../components/Team'
import { SanityTeam, SanityEvent } from '../typings'
import { fetchTeam }  from '../utils/fetchTeam'
import { fetchEvents } from '../utils/fetchEvents'

type Props = {
  team: SanityTeam[]
  events: SanityEvent[]
}

const Home = ({team, events}: Props) => {
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
      <Team team={team}/>
      <Events events={events} />
      <Contact/>
    </div>
   </>
  )
}

export default Home

export const getStaticProps: GetStaticProps 
 = async () => {
  const team = await fetchTeam();
  const events = await fetchEvents();

  return {
    props: {
      team,
      events,
    },
    revalidate: 10,
  } 
}