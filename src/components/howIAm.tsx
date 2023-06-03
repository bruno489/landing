import React from 'react'
import { Col, Divider, Row, Typography } from 'antd'
import AvatarCorpo from '../../src/images/avatar_corpo.png'
import Image from 'next/image'

const { Title } = Typography

export const HowIAm = (): JSX.Element => {
  return (
    <>
      <Row
        justify="center"
        align="middle"
        style={{ padding: '10px auto', flex: '1' }}
        id="quemSou"
      >
        <Divider>Quem sou</Divider>
        <Col style={{ width: '30%' }}>
          <div style={{ height: '70vh', display: 'flex', margin: 'auto 0' }}>
            <Image src={AvatarCorpo} />
          </div>
        </Col>
        <Col style={{ flexDirection: 'column', width: '40%', display: 'flex' }}>
          <div>
            <Title level={3}>Permita que eu me apresente:</Title>
          </div>
          <div>
            <p>
              Olá, me chamo Bruno Guedes e sou desenvolvedor fullstack há mais
              de um ano e meio.
            </p>
            <p>
              Graduando em Direito, autodidata e apaixonado pela programação com
              o hábito de aprender todo dia.
            </p>
          </div>
        </Col>
      </Row>
    </>
  )
}
