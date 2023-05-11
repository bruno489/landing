import type { NextPage } from 'next'
import { ConteudoDesk } from '../src/components/conteudoDesk'
import Head from 'next/head'

interface Props {
  whats: string
}

const Home: NextPage = props => {
  console.log('props', props)
  return (
    <>
      <Head>
        <meta name="og:title" content={'Bruno Guedes'} />
        <title>Bruno Guedes</title>
      </Head>
      <ConteudoDesk whatsapp={props.whats} />
    </>
  )
}

export async function getServerSideProps() {
  return { props: { whats: process.env.WHATSAPP_NUMBER } }
}

export default Home
