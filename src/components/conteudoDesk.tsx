import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  Layout,
  Menu,
  Row,
  Tabs,
  Timeline,
  Typography
} from 'antd'
import AvatarRosto from '../../src/images/avatar_face.png'
import AvatarCorpo from '../../src/images/avatar_corpo.png'
import Image from 'next/image'
import { Card, FooterLanding, HeaderLanding, RowToColumn } from './layout'
import moment from 'moment'
import { trackPromise, usePromiseTracker } from 'react-promise-tracker'
import {
  GithubOutlined,
  LinkedinOutlined,
  WhatsAppOutlined
} from '@ant-design/icons'
import { MaskedInput } from 'antd-mask-input'

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

const { TabPane } = Tabs
const { Meta } = Card
const { TextArea } = Input

export const ConteudoDesk = () => {
  const [formRegisterContact] = Form.useForm()
  const { promiseInProgress: sendEmailPromise } = usePromiseTracker({
    area: 'submitEmail'
  })
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
        'Next.Js',
        'Typescript',
        'Styled Components',
        'Node.Js',
        'Express',
        'Axions'
      ]
    }
  ]

  const sendContact = async (contactData: any) => {
    await trackPromise(
      fetch(`/api/sendMail/`, {
        method: 'POST',
        body: JSON.stringify(contactData),
        headers: {
          'Content-Type': 'application/json'
        }
      }),
      'submitEmail'
    )
      .then(res => {
        // openSuccessNotification()
        console.log(res)
        return res
      })
      .catch(error => {
        console.error(error)
      })
  }

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
              {stacks.front.map(stack => (
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
              {stacks.back.map(stack => (
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
        <Divider>Contatos</Divider>
        <div style={{ padding: '0 20px', marginBottom: '20px' }}>
          <Tabs defaultActiveKey="1" centered>
            <TabPane key="1" tab="E-mail">
              <Form
                form={formRegisterContact}
                name="formRegisterContact"
                onFinish={sendContact}
                scrollToFirstError
                requiredMark="optional"
                style={{ margin: '0px' }}
                layout="vertical"
              >
                <Form.Item
                  name={'name'}
                  label="Nome"
                  style={{ margin: '0px' }}
                  rules={[
                    {
                      required: true,
                      message: 'Por favor, informe seu nome.'
                    }
                  ]}
                >
                  <Input placeholder="Informe seu nome" />
                </Form.Item>
                <Form.Item
                  name={'email'}
                  label="E-mail"
                  style={{ margin: '0px' }}
                  rules={[
                    {
                      required: true,
                      message: 'Por favor, informe seu e-mail.'
                    },
                    {
                      type: 'email',
                      message: 'Por favor, insira um formato válido.'
                    }
                  ]}
                >
                  <Input placeholder="Informe seu e-mail" />
                </Form.Item>
                <Form.Item
                  name={'phone'}
                  label="WhatsApp/Telegram"
                  style={{ margin: '0px' }}
                >
                  <MaskedInput mask={'(00) 0000-0000'} />
                </Form.Item>
                <Form.Item
                  name={'message'}
                  label="Mensagem"
                  style={{ margin: '0px' }}
                  rules={[
                    {
                      required: true,
                      message: 'Por favor, informe a mensagem.'
                    }
                  ]}
                >
                  <TextArea rows={4} placeholder="Informe a mensagem" />
                </Form.Item>
                <div style={{ textAlign: 'end' }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    form="formRegisterContact"
                    loading={sendEmailPromise}
                  >
                    Enviar
                  </Button>
                </div>
              </Form>
            </TabPane>
            <TabPane key="2" tab="Redes sociais">
              <RowToColumn>
                <Card
                  style={{ width: 300 }}
                  cover={
                    <WhatsAppOutlined
                      style={{
                        fontSize: '200px',
                        color: '#25D366',
                        marginTop: '20px'
                      }}
                    />
                  }
                >
                  <Meta
                    title="WhatsApp"
                    style={{
                      justifyContent: 'center',
                      display: 'flex'
                    }}
                  />
                </Card>
                <a
                  href="https://www.linkedin.com/in/bruno-guedess/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card
                    style={{ width: 300 }}
                    cover={
                      <LinkedinOutlined
                        style={{
                          fontSize: '200px',
                          color: '#0a66c2',
                          marginTop: '20px'
                        }}
                      />
                    }
                  >
                    <Meta
                      title="LinkedIn"
                      style={{
                        justifyContent: 'center',
                        display: 'flex'
                      }}
                    />
                  </Card>
                </a>
                <a
                  href="https://github.com/bruno489"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card
                    style={{ width: 300 }}
                    cover={
                      <GithubOutlined
                        style={{
                          fontSize: '200px',
                          marginTop: '20px'
                        }}
                      />
                    }
                  >
                    <Meta
                      title="GitHub"
                      style={{
                        justifyContent: 'center',
                        display: 'flex'
                      }}
                    />
                  </Card>
                </a>
              </RowToColumn>
            </TabPane>
          </Tabs>
        </div>
      </Content>
      <FooterLanding>
        <Text>Desenvolvido por Bruno Guedes</Text>
      </FooterLanding>
    </Layout>
  )
}
