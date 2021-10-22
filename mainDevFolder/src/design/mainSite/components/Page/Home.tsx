import * as React from 'react'
import { Layout, Breadcrumb, Menu, Row, Col, Space, List, Avatar } from 'antd'
import {LeftSquareOutlined } from '@ant-design/icons';

const Home: React.FC = () => {
  const [old, newOld] = React.useState([])

  // React.useEffect(() => {
  //   (async () => {
  //     let newData = await fetch('http://localhost:4000/client_suite')
  //     let reply = await newData.json()
  //     newOld(reply)
  //   })()
  // }, [])
  const data = [
    {
      title: 'Ant Design Title 1'
    },
    {
      title: 'Ant Design Title 2'
    },
    {
      title: 'Ant Design Title 3'
    },
    {
      title: 'Ant Design Title 4'
    }
  ]
  return (
    <React.Fragment>
      <Row justify='center' className='heroSection' gutter={[0, 24]}>
        <Col>
          <h1 className='h1_heroSection'>
            {' '}
            Impactful solutions built for stronger communities and industries.
          </h1>
        </Col>

        <Col xs={16} offset={1}>
          <h2>Our Philosophy <LeftSquareOutlined /></h2>
          <p>
            We focus on developing products and services that bridge the gap
            between community well-being and enterprise optimization.
          </p>
        </Col>
      </Row>
      <Row justify='center'>
        <Col xs={16} offset={1} className='solutionSection'>
          <h2>Our Solutions</h2>
          {/* <Row>
            <Col xs={8}>
              <List
                itemLayout='horizontal'
                dataSource={data}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Avatar src='https://joeschmoe.io/api/v1/random' />
                      }
                      title={<a href='https://ant.design'>{item.title}</a>}
                      description='Ant Design, a design language for background applications, is refined by Ant UED Team'
                    />
                  </List.Item>
                )}
              />
              ,
            </Col>
          </Row> */}
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Home
