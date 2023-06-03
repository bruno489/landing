import React from 'react'
import { Divider } from 'antd'
import moment from 'moment'

interface Empresas {
  cargo: string
  nomeEmpresa: string
  dataInicio: moment.Moment
  dataFinal: moment.Moment
  descricao?: string
  stacksUsadas: string[]
}

export const Experiences = (): JSX.Element => {
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
        'Axios'
      ]
    }
  ]

  return (
    <>
      <div style={{ padding: '0 20px' }} id="experiencias">
        <Divider>Experiências</Divider>
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
    </>
  )
}
