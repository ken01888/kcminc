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
            Solutions for Food Support Institutions. 
          </h1>
         
        </Col>

        <Col offset={1} xs={18}>
          <h2>How we help </h2>
          <p>
          At <span>KCM</span> <sup>INC</sup> we strive to provide our clients with 
          innovative solutions that benefit both people and 
          the planet.Our solutions protect the longevity 
          of your organization, its competitive position and improves 
          stakeholder value.   
          </p>
        </Col>
      </Row>

      {/* {Solutions Section} */}
      <Row justify='center'>
        <Col offset={1} xs={18} className='heroSection'>
          <h2 className='h2Solutions'>Our Solutions</h2>
          <p>
          Changing consumer demands and 
          environmental needs commands that institutions 
          remain adaptive. Our solutions help optimize the performance 
          of your organization and simplify the creation of products and 
          strategies necessary in today's ever-changing global environment. 
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
