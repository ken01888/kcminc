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
  Tag
} from 'antd'
import {
  LeftSquareOutlined,
  PauseOutlined,
  PlusOutlined,
  TwitterCircleFilled,
  TwitterOutlined,
  TwitterSquareFilled,
  LinkedinFilled,
  LinkedinOutlined
} from '@ant-design/icons'
import { motion } from 'framer-motion'
import { duration } from 'moment'
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
            Innovative business solutions made for Food Support Institutions
          </h1>
        </Col>

        <Col offset={1} xs={18}>
          <h2>Food Support Institutions </h2>
          <p>
           We cater our service to a broad range of organization producing
           edible products. We define Food Support Institions (FSI) 
           as organizations that manufacture products which help nourish the body and 
           contribute to a balanced dietary intake. 

          </p>
        </Col>
      </Row>
      

      {/* {Solutions Section} */}
      <Row justify='center'  >
        <Col offset={1} xs={16} className='heroSection'>
          <h2 className='h2Solutions'>Solutions</h2>
          <p>
            Our business solutions are thoughtfully engineered for the benefit
            of both businesses and community. Our list of services and solutions are constantly 
            growing.
          </p>
            <Col className='linkSocial'>
             
              <TwitterSquareFilled style={{ fontSize: '2rem' }} />
              <LinkedinFilled style={{ fontSize: '2rem' }} />
            </Col>
            <Col>
            <Row gutter={16}>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
            </Col>

          <Collapse ghost={true}>
            <Panel
              header={
                <span>
                  Consumer Staples <Tag color='#009688'>Sector</Tag>
                </span>
              }
              key='1'
            >
              <Collapse ghost={true}>
                <Panel header='Food Distributors' key='2'>
                  <p>
                    Distributors of food products to other companies and not
                    directly to the consumer
                  </p>
                </Panel>
              </Collapse>
              <Collapse ghost={true}>
                <Panel header='Food Retail' key='3'>
                  <p>Owners and operators of primarily food retail stores.</p>
                </Panel>
              </Collapse>
              <Collapse ghost={true}>
                <Panel header='Hypermarkets & Super Centers' key='4'>
                  <p>
                    Owners and operators of hypermarkets and super centers
                    selling food and a wide-range of consumer staple products.
                  </p>
                </Panel>
              </Collapse>
              <Collapse ghost={true}>
                <Panel header='Brewers' key='5'>
                  <p>Producers of beer and malt liquors.</p>
                </Panel>
              </Collapse>
              <Collapse ghost={true}>
                <Panel header='Distillers & Vintners' key='6'>
                  <p>
                    Distillers, vintners and producers of alcoholic beverages.
                  </p>
                </Panel>
              </Collapse>
              <Collapse ghost={true}>
                <Panel header='Soft Drinks' key='7'>
                  <p>
                    Producers of non-alcoholic beverages including mineral
                    waters.{' '}
                  </p>
                </Panel>
              </Collapse>
              <Collapse ghost={true}>
                <Panel header='Agricultural Products' key='8'>
                  <p>
                    Producers of agricultural products. Includes crop growers,
                    owners of plantations and companies that produce and process
                    foods but do not package and market them.{' '}
                  </p>
                </Panel>
              </Collapse>
              <Collapse ghost={true}>
                <Panel header='Packaged Foods & Meats' key='9'>
                  <p>
                    Producers of packaged foods including dairy products, fruit
                    juices, meats, poultry, fish and pet foods.
                  </p>
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
