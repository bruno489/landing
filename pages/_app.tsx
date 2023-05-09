/* eslint-disable require-jsdoc */
import type { AppProps } from 'next/app'
import 'antd/dist/antd.css'
import ptBr from 'antd/lib/locale/pt_BR'
import { ConfigProvider } from 'antd'
import GlobalStyle from '../src/styles/globals'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider locale={ptBr}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ConfigProvider>
  )
}

export default MyApp
