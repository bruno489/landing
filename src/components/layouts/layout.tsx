import { Layout, Menu, Typography } from 'antd'
import AvatarRosto from '../../../src/images/avatar_face.png'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FooterLanding, HeaderLanding } from '../layout'

const { Content } = Layout
const { Title, Text } = Typography

interface Props {
  children: React.ReactNode
}

export const LayoutGeral = ({ children }: Props): JSX.Element => {
  return (
    <Layout>
      <HeaderLanding>
        <div
          style={{
            maxWidth: '1100px',
            display: 'flex',
            justifyContent: 'space-between',
            flex: '1',
            margin: 'auto'
          }}
        >
          <div className="title" style={{ display: 'flex', height: '60px' }}>
            <div
              style={{
                width: '50px',
                alignItems: 'center',
                height: '60px'
              }}
            >
              <Image src={AvatarRosto} />
            </div>
            <div
              style={{
                textAlign: 'center',
                width: '110px',
                height: '50px',
                margin: 'auto 0'
              }}
            >
              <Title
                style={{
                  color: 'white',
                  margin: '0px'
                }}
                level={5}
              >
                Bruno Guedes
              </Title>
              <Title
                style={{
                  color: 'white',
                  margin: '0px'
                }}
                level={5}
              >
                Developer
              </Title>
            </div>
          </div>
          <Menu mode="horizontal" className="menu" theme="dark">
            <Menu.Item key={1}>
              <Link href="#quemSou">Quem sou</Link>
            </Menu.Item>
            <Menu.Item key={2}>
              <Link href="#stack">Stack</Link>
            </Menu.Item>
            <Menu.Item key={3}>
              <Link href="#experiencias">Experiências</Link>
            </Menu.Item>
            <Menu.Item key={4}>
              <Link href="#contatos">Contatos</Link>
            </Menu.Item>
          </Menu>
        </div>
      </HeaderLanding>
      <Content style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {children}
      </Content>
      <FooterLanding>
        <div style={{ textAlign: 'center' }}>
          <Text>Desenvolvido por Bruno Guedes</Text>
        </div>
      </FooterLanding>
    </Layout>
  )
}
