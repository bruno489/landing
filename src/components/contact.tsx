import React from 'react'
import { Button, Divider, Form, Input, Tabs, notification } from 'antd'
import { Card, RowToColumn } from './layout'
import { trackPromise, usePromiseTracker } from 'react-promise-tracker'
import {
  GithubOutlined,
  LinkedinOutlined,
  WhatsAppOutlined
} from '@ant-design/icons'
import { MaskedInput } from 'antd-mask-input'

const { TabPane } = Tabs
const { Meta } = Card
const { TextArea } = Input

export const Contact = (): JSX.Element => {
  const [formRegisterContact] = Form.useForm()
  const { promiseInProgress: sendEmailPromise } = usePromiseTracker({
    area: 'submitEmail'
  })

  const openSuccessNotification = () => {
    notification.config({
      bottom: 50,
      duration: 10
    })
    notification.success({
      message: 'Mensagem enviada',
      description:
        'Sua mensagem foi enviada com sucesso. Em breve estarei retornando o contato.'
    })
  }

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
        openSuccessNotification()
        console.log(res)
        formRegisterContact.resetFields()
        return res
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <>
      <div style={{ padding: '0 20px', marginBottom: '20px' }} id="contatos">
        <Divider>Contatos</Divider>
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
              <a
                href={`https://api.whatsapp.com/send?phone=${process.env.WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
              >
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
              </a>
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
    </>
  )
}
