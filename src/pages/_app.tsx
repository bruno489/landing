/* eslint-disable require-jsdoc */
import React from 'react'
import type { AppProps } from 'next/app'
import 'antd/dist/antd.css'
import moment from 'moment'
import { ConfigProvider } from 'antd'
// import ptBr

function MyApp({ Component, pageProps }: AppProps) {
  moment.locale('pt-br')
  moment.utc(-3)
  return (
    <ConfigProvider>
      <Component {...pageProps} />
    </ConfigProvider>
  )
}

export default MyApp
