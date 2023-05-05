import { Col, Divider, Layout, Menu, Row, Timeline, Typography } from 'antd'
import AvatarRosto from '../../src/images/avatar_face.png'
import AvatarCorpo from '../../src/images/avatar_corpo.png'
import Image from 'next/image'
import { FooterLanding, HeaderLanding } from './layout'

const { Content } = Layout
const { Title, Text } = Typography

export const ConteudoDesk = () => {
  return (
    <Layout>
      <HeaderLanding>
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
              padding: 'auto',
              height: '50px'
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
        <div className="menu">
          <Menu
            mode="horizontal"
            className="menu"
            theme="dark"
            items={[
              { key: 1, label: 'Quem sou' },
              { key: 2, label: 'Stack' },
              { key: 3, label: 'Experiência' }
            ]}
          />
        </div>
      </HeaderLanding>
      <Content style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <Divider>Quem sou</Divider>
        <Row
          justify="center"
          align="middle"
          style={{ padding: '10px auto', flex: '1' }}
        >
          <Col style={{ width: '30%' }}>
            <div style={{ height: '70vh', display: 'flex', margin: 'auto 0' }}>
              <Image src={AvatarCorpo} />
            </div>
          </Col>
          <Col
            style={{ flexDirection: 'column', width: '40%', display: 'flex' }}
          >
            <div>
              <Title level={3}>Permita que eu me apresente:</Title>
            </div>
            <div>
              <p>
                Olá, me chamo Bruno Guedes e sou desenvolvedor fullstack há mais
                de um ano.
              </p>
              <p>
                Graduando em Direito, autodidata e paixonado pela programação
                com o hábito de aprender todo dia.
              </p>
            </div>
          </Col>
        </Row>
        <Divider>Stack</Divider>
        <div style={{ justifyContent: 'center', display: 'flex' }}>
          <Timeline>
            <Timeline.Item>
              <h3>Javascript/Typescript</h3>
              <p>Desen</p>
            </Timeline.Item>
            <Timeline.Item>item 2</Timeline.Item>
          </Timeline>
        </div>
      </Content>
      <FooterLanding>
        <Text>Desenvolvido por Bruno Guedes</Text>
      </FooterLanding>
    </Layout>
  )
}
