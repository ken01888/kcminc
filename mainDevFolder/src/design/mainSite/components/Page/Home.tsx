import * as React from 'react'
import {
  Layout,
  Breadcrumb,
  Menu,
  Row,
  Col,
  Space,
  List,
  Avatar,
  Timeline,
  Collapse,
  Affix,
  Button,
  Card,
  Tag,
  Descriptions,
  Badge
} from 'antd'
import {
  LeftSquareOutlined,
  PauseOutlined,
  PlusOutlined,
  TwitterCircleFilled,
  TwitterOutlined,
  TwitterSquareFilled,
  LinkedinFilled,
  LinkedinOutlined,
  CaretRightOutlined
} from '@ant-design/icons'
import { motion } from 'framer-motion'
import { duration } from 'moment'
import { FcOrgUnit, FcGenealogy } from 'react-icons/fc'
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
        <Col xs={12}>
          <h1 className='h1_heroSection'>
            {' '}
            Solutions built for impactful organizations.
          </h1>
        </Col>

        <Col offset={1} xs={18}>
          <h2>How we help </h2>
          <p>
            At <span>KCM</span> <sup>INC</sup> we provide innovative solutions 
            that benefit both people and the planet.
            Our solutions protect the longevity of your organization, its
            competitive position and improves stakeholder value. We gear our services towards 
            food support institutions and the hospitality industry.
          </p>
        </Col>
      </Row>

      {/* {Solutions Section} */}
      <Row justify='center'>
        <Col offset={1} xs={18} className='heroSection'>
          <h2 className='h2Solutions'>Our Solutions</h2>
          <p>
            Changes in consumer demands and environmental needs command that
            institutions remain adaptive. Our solutions help optimize your
            organization's performance and simplify the development of nutrient
            rich products.
          </p>

          <Collapse
            activeKey={1}
            expandIcon={({ isActive }) => (
              <CaretRightOutlined
                rotate={isActive ? 90 : 0}
                style={{ color: '#009688' }}

              />
            )}
          >
            <Panel header='Present Solutions' key='1'>
              <Collapse>
                <Panel
                  header={<Tag color='#009688'>Nutritional Analysis</Tag>}
                  key='1'
                >
                  <p>
                    Our nutritional analysis solution gives food manufactures a
                    complete nutritional breakdown of their products based on
                    ingredient weight and serving size. This solution provides a
                    nutritional graph very similar to those found on the back of
                    household nondurable goods. 
                  </p>

                  <Descriptions title="User Info" layout="vertical" bordered>
                    <Descriptions.Item label="Product">Chick-fil-a Chicken Sandwich</Descriptions.Item>
                    <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
                    <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
                    <Descriptions.Item label="Order time">2018-04-24 18:00:00</Descriptions.Item>
                    <Descriptions.Item label="Usage Time" span={2}>
                      2019-04-24 18:00:00
                    </Descriptions.Item>
                    <Descriptions.Item label="Status" span={3}>
                      <Badge status="processing" text="Running" />
                    </Descriptions.Item>
                    <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>
                    <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
                    <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
                    <Descriptions.Item label="Config Info">
                      Data disk type: MongoDB
                      <br />
                      Database version: 3.4
                      <br />
                      Package: dds.mongo.mid
                      <br />
                      Storage space: 10 GB
                      <br />
                      Replication factor: 3
                      <br />
                      Region: East China 1<br />
                    </Descriptions.Item>
                  </Descriptions>

                  <Collapse ghost>
                    <Panel header={'Overview '} key='2'>
                      <p>
                        Building menu items and understanding the nutrient
                        content of food related products has never been easier.
                        Our nutritional analysis services compare the
                        nutritional value of your product with (RAD), (AL), and
                        (UL) values from the world's leading healthcare
                        institute in order to help you create menu items that
                        meet the nutritional needs of future consumers.
                      </p>

                    </Panel>
                  </Collapse>
                </Panel>
              </Collapse>
            </Panel>
          </Collapse>
        </Col>
      </Row>

      {/* <Row justify='center'>
        <Col md={18} className='contactSection'>
          <h1>Contact</h1>
        </Col>
      </Row> */}
    </React.Fragment>
  )
}

export default Home
