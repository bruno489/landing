import type { NextPage } from 'next'
import { ConteudoDesk } from '../src/components/conteudoDesk'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="og:title" content={'Bruno Guedes'} />
        <title>Bruno Guedes</title>
      </Head>
      <ConteudoDesk />
    </>
  )
}

export default Home
