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
  LinkedinOutlined,
  CaretRightOutlined
} from '@ant-design/icons'
import { motion } from 'framer-motion'
import { duration } from 'moment'
import { FaNutritionix } from 'react-icons/fa'
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
          <p>
            We define Food Support Institions (FSI) as organizations 
            who manufacture products which nourish the body of people and communities.
          </p>
        </Col>

        <Col offset={1} xs={18}>
          <h2>Food Support Institutions </h2>
          <p>
            We define Food Support Institions (FSI) as organizations 
            who manufacture products which nourish the body of people and communities.
          </p>
        </Col>
      </Row>

      {/* {Solutions Section} */}
      <Row justify='center'>
        <Col offset={1} xs={18} className='heroSection'>
          <h2 className='h2Solutions'>How we help</h2>
          <p>
            At KCM INC our mission is to create impactful business solutions
            that benefit both individuals and our planet. We presently cater our 
            services towards business operating within the hospitality sector. These
            solutions are geared towards improving the well-being of consumers and 
            the health of our planet.
          </p>

          <Collapse
           
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
          >
            <Panel
              header='Present Solutions'
              key='1'
            >
              <Collapse >
                <Panel header={
                  <Tag color='#009688' >
                   Nutritional Analysis
                  </Tag>

              } key='2'>
                  <p>
                  Building menu items and understanding the nutrient content of food related products has never been easier. 
                  Our nutritional analysis services compare the nutritional value of your product with (RAD), (AL), and acceptable (UL) 
                  values from the world's leading healthcare institute in order to help you create menu items that meet the 
                  nutritional needs of future consumers. 
                  </p>
                  <Collapse >
                <Panel header={
                    'Nutritional Analysis Overview'
              } key='2'>
                  <p>
                  Building menu items and understanding the nutrient content of food related products has never been easier. 
                  Our nutritional analysis services compare the nutritional value of your product with (RAD), (AL), and (UL) 
                  values from the world's leading healthcare institute in order to help you create menu items that meet the 
                  nutritional needs of future consumers. 
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
