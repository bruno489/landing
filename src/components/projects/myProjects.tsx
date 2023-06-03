import React from 'react'
import { Divider } from 'antd'
import imagem from '../../images/avatar_face.png'
import { StaticImageData } from 'next/image'

interface Projects {
  logo?: StaticImageData
  name: string
  description: string
  stackUsed: string[]
  link?: string
}

export const MyProjects = (): JSX.Element => {
  const myProjects: Projects[] = [
    {
      name: 'Products',
      description: 'CRUD feito para avaliação para um cargo junior.',
      stackUsed: ['NodeJS', 'Express', 'Mongoose', 'MongoDB'],
      link: 'https://github.com/bruno489/products'
    },
    {
      name: 'Landing',
      description:
        'Minha landing page com algumas informações sobre minha carreira como desenvolvedor.',
      stackUsed: ['NodeJS', 'NextJS', 'React', 'CSS3', 'Styled Components'],
      link: 'https://github.com/bruno489/landing'
    }
  ]

  return (
    <>
      <div id="myProjects">
        <Divider>Projetos</Divider>
        <div
          style={{
            justifyContent: 'space-between',
            display: 'flex',
            flex: '1',
            padding: '0 20px'
          }}
        ></div>
      </div>
    </>
  )
}
