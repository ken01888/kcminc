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
  PlusOutlined
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
        <Col>
          <h1 className='h1_heroSection'>
            {' '}
            Impactful solutions for better enterprises.
          </h1>
        </Col>

        <Col offset={1} xs={18}>
          <h2>Philosophy </h2>
          <p>
            Creating innovation business solutions that benefit of our clients and consumer well-being is our focus. 
            We work across a broad set of business sector tailoring solutions that improve stakeholder satisfactions, 
            operational effiency and business profits.  
             
          </p>
        </Col>
      </Row>
      <Row justify='center' gutter={[16, 16]} style={{ marginTop: '1rem' }}>
        <Col xs={24} className='sectionTenet'>
          <h3>Healthy </h3>
          <span className='phyEquation'>Planet</span>
        </Col>
        <Col xs={24} className='sectionTenet'>
          <PlusOutlined style={{ fontSize: '2rem' }} />
        </Col>
        <Col xs={24} className='sectionTenet'>
          <h3>Healthy</h3>
          <span className='phyEquation'>Consumers</span>
        </Col>
        <Col xs={10} style={{ backgroundColor: 'black', height: '2px' }}></Col>
        <Col xs={24} className='sectionTenet'>
          <h3>Higher</h3>
          <span className='phyEquation'>Valuations</span>
        </Col>
      </Row>



      

      {/* {Solutions Section} */}
      <Row justify='center' gutter={[24, 64]}>
        <Col offset={1} xs={18} className='heroSection'>
          <h2>Solutions</h2>
          <p>
            KCM INC creates solutions that improve the health of consumers and
            business. We work work within multiple sectors creating life
            changing metheologies that optimize business performance.
          </p>
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
      <Row justify='center'>
        <Col md={18} className="contactSection">
          <h1>Contact</h1>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Home
