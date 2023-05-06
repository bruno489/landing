import {
  Col,
  Descriptions,
  Divider,
  Layout,
  Menu,
  Row,
  Timeline,
  Typography
} from 'antd'
import AvatarRosto from '../../src/images/avatar_face.png'
import AvatarCorpo from '../../src/images/avatar_corpo.png'
import Image from 'next/image'
import { FooterLanding, HeaderLanding } from './layout'
import moment from 'moment'

const { Content } = Layout
const { Title, Text } = Typography

interface Stacks {
  front: Array<string>
  back: Array<string>
}

interface Empresas {
  cargo: string
  nomeEmpresa: string
  dataInicio: moment.Moment
  dataFinal: moment.Moment
  descricao?: string
  stacksUsadas: string[]
}

export const ConteudoDesk = () => {
  const stacks: Stacks = {
    front: [
      'Javascript',
      'Typescript',
      'CSS3',
      'NextJS',
      'Styled Components',
      'Ant Design',
      'Bootstrap',
      'HTML5',
      'Axios',
      'Git/GitHub',
      'ReactJS'
    ].sort(),
    back: [
      'NodeJS',
      'Mongoose',
      'Prisma',
      'RestFul API',
      'Express',
      'MongoDB',
      'NPM',
      'YARN',
      'PostgreSQL'
    ].sort()
  }

  const empresas: Empresas[] = [
    {
      cargo: 'Desenvolvedor fullstack junior',
      nomeEmpresa: 'CoopTeam',
      dataInicio: moment('2021-12-23'),
      dataFinal: moment('2023-05-30'),
      stacksUsadas: [
        'NextJs',
        'Typescript',
        'Styled Components',
        'Noje.Js',
        'Express',
        'Axions'
      ]
    }
  ]

  return (
    <Layout>
      <HeaderLanding>
        <div
          style={{
            maxWidth: '1100px',
            display: 'flex',
            justifyContent: 'space-between',
            flex: '1'
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
        <div
          style={{
            justifyContent: 'space-between',
            display: 'flex',
            flex: '1',
            padding: '0 20px'
          }}
        >
          <div
            style={{
              borderRight: '1px solid gray',
              flex: '1',
              paddingRight: '15px'
            }}
          >
            <Divider orientation="left" orientationMargin="0">
              Front-end
            </Divider>
            <Timeline>
              {stacks.front.map((stack, idx) => (
                <Timeline.Item>{stack}</Timeline.Item>
              ))}
            </Timeline>
          </div>
          <div
            style={{
              flex: '1',
              paddingLeft: '15px'
            }}
          >
            <Divider orientation="left" orientationMargin="0">
              Back-end
            </Divider>
            <Timeline>
              {stacks.back.map((stack, idx) => (
                <Timeline.Item>{stack}</Timeline.Item>
              ))}
            </Timeline>
          </div>
        </div>
        <Divider>Experiências</Divider>
        <div style={{ padding: '0 20px' }}>
          {empresas.map((empresa, idx) => (
            <div
              key={idx}
              style={{
                border: '1px solid #001529',
                margin: '5px 00px',
                padding: '5px 10px'
              }}
            >
              <div>
                <strong>Empresa:</strong>
                <span> {empresa.nomeEmpresa}</span>
              </div>
              <div>
                <strong>Cargo:</strong>
                <span> {empresa.cargo}</span>
              </div>
              <div>
                <strong>Periodo:</strong>{' '}
                <span>{moment(empresa.dataInicio).format('MM/YYYY ')}</span> -{' '}
                <span>{moment(empresa.dataFinal).format('MM/YYYY')}</span>
              </div>
              <div>
                <strong>Stacks mais usadas:</strong>{' '}
                <span>
                  {empresa.stacksUsadas?.map((stack, idx) => (
                    <>
                      {idx !== empresa.stacksUsadas.length - 1
                        ? `${stack}, `
                        : `${stack}.`}
                    </>
                  ))}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Content>
      <FooterLanding>
        <Text>Desenvolvido por Bruno Guedes</Text>
      </FooterLanding>
    </Layout>
  )
}
