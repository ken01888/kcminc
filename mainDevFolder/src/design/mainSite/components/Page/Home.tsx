import * as React from 'react'
import { Layout, Breadcrumb, Menu, Row, Col, Space, List, Avatar, Timeline, Collapse, Affix, Button } from 'antd'
import { LeftSquareOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { duration } from 'moment';
const { Panel } = Collapse
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
      <Row justify='center' className='heroSection' gutter={[24, 64]}>
        <Col>
          <h1 className='h1_heroSection'>
            {' '}
            Impactful solutions for better enterprises.
          </h1>
        </Col>

        <Col offset={1} xs={18} >
          <h2>Philosophy </h2>
          <p>
            Engineering innovative business solutions connect bridge consumer needs with business objectives is our primary focus.
            We analyzing data from the world's leading public research institutions, target weaknesses associated with a specific data point and finally design integrative mutually beneficial business solutions.

          </p>

          <Timeline>
            <Timeline.Item color="#009688">Planet</Timeline.Item>
            <Timeline.Item color="#009688">People</Timeline.Item>
            <Timeline.Item color="#009688">Profits</Timeline.Item>

          </Timeline>
        </Col>
      </Row>
      <Row justify='center' className='heroSection' gutter={[24, 64]}>

        <Col offset={1} xs={18} >
          <h2>Clients </h2>
          <p>
            Engineering innovative business solutions connect bridge consumer needs with business objectives is our primary focus.
            We analyzing data from the world's leading public research institutions, target weaknesses associated with a specific data point and finally design integrative mutually beneficial business solutions.
          </p>

          <Timeline>
            <Timeline.Item color="#009688">Planet</Timeline.Item>
            <Timeline.Item color="#009688">People</Timeline.Item>
            <Timeline.Item color="#009688">Profits</Timeline.Item>

          </Timeline>
        </Col>
      </Row>
      <Row justify='center' gutter={[24, 64]}>
        <Col offset={1} xs={18} className='heroSection'>
          <h2>Solutions</h2>
          <p>
            Engineering innovative business solutions connect bridge consumer needs with business objectives is our primary focus.
            We analyzing data from the world's leading public research institutions, target weaknesses associated with a specific data point and finally design integrative mutually beneficial business solutions.

          </p>
          <Collapse ghost={true}>
            <Panel header={"Consumer Staples"} key="1">
              <Collapse  ghost={true}>
                <Panel header="Food Distributors" key="2">
                  <p>Distributors of food products to other companies and not
                    directly to the consumer</p>
                </Panel>
              </Collapse>
              <Collapse  ghost={true}>
                <Panel header="Food Retail" key="3">
                  <p>Owners and operators of primarily food retail stores.</p>
                </Panel>
              </Collapse>
              <Collapse  ghost={true}>
                <Panel header="Hypermarkets & Super Centers" key="4">
                  <p>Owners and operators of hypermarkets and super centers selling
                    food and a wide-range of consumer staple products.</p>
                </Panel>
              </Collapse>
              <Collapse  ghost={true}>
                <Panel header="Brewers" key="5">
                  <p>Producers of beer and malt liquors.</p>
                </Panel>
              </Collapse>
              <Collapse  ghost={true}>
                <Panel header="Distillers & Vintners" key="6">
                  <p>Distillers, vintners and producers of alcoholic beverages.</p>
                </Panel>
              </Collapse>
              <Collapse  ghost={true}>
                <Panel header="Soft Drinks" key="7">
                  <p>Producers of non-alcoholic beverages including mineral waters. </p>
                </Panel>
              </Collapse>
              <Collapse  ghost={true}>
                <Panel header="Agricultural Products" key="8">
                  <p>Producers of agricultural products. Includes crop growers,
                    owners of plantations and companies that produce and process
                    foods but do not package and market them. </p>
                </Panel>
              </Collapse>
              <Collapse  ghost={true}>
                <Panel header="Packaged Foods & Meats" key="9">
                  <p>Producers of packaged foods including dairy products, fruit
                    juices, meats, poultry, fish and pet foods.</p>
                </Panel>
              </Collapse>
            </Panel>
          </Collapse>
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
