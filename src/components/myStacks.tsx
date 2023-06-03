import React from 'react'
import { Divider, Timeline } from 'antd'

interface Stacks {
  front: Array<string>
  back: Array<string>
}

export const MyStacks = (): JSX.Element => {
  const stacks: Stacks = {
    front: [
      'Javascript',
      'Typescript',
      'CSS3',
      'Next.Js',
      'Styled Components',
      'Ant Design',
      'Bootstrap',
      'HTML5',
      'Axios',
      'Git/GitHub',
      'React.Js'
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

  return (
    <>
      <div id="stack">
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
                <Timeline.Item key={idx}>{stack}</Timeline.Item>
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
                <Timeline.Item key={idx}>{stack}</Timeline.Item>
              ))}
            </Timeline>
          </div>
        </div>
      </div>
    </>
  )
}
