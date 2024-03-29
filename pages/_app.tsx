/* eslint-disable require-jsdoc */
import type { AppProps } from 'next/app'
import 'antd/dist/antd.css'
import ptBr from 'antd/lib/locale/pt_BR'
import { ConfigProvider } from 'antd'
import GlobalStyle from '../src/styles/globals'
import moment from 'moment'
import { ReactNode } from 'react'
import { LayoutGeral } from '../src/components/layouts/layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  moment.locale('pt-br')
  moment.utc(-3)
  const getLayout = (page: ReactNode) => page
  return (
    <>
      <Head>
        <meta name="og:title" content={'Bruno Guedes'} />
        <title>Bruno Guedes</title>
      </Head>
      <ConfigProvider locale={ptBr}>
        <LayoutGeral>
          {getLayout(<Component {...pageProps} />)}
          <GlobalStyle />
        </LayoutGeral>
      </ConfigProvider>
    </>
  )
}

export default MyApp
