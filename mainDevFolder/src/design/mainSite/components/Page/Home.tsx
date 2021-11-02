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
  Badge,
  Popover
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
import { FcOrgUnit, FcGenealogy, FcGlobe } from 'react-icons/fc'
const { Panel } = Collapse
const Home: React.FC = () => {
  const [old, newOld] = React.useState([])

  React.useEffect(() => {
    (async () => {
      let newData = await fetch('http://localhost:4000')
      let reply: { foods: any[] } = await newData.json()
      let newReply: [] = await reply.foods[1].foodNutrients

      newReply.map((i) => {
        console.log(i)
      })

    })()
  }, [])
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
        <Col xs={16}>
          <h1 className='h1_heroSection'>
            {' '}
            Solutions for Food Support Institutions.
          </h1>
        </Col>

        <Col offset={1} xs={16}>
          <h2>How we help </h2>
          <p>


            We help add value to your business through our suite of
            innovative business solutions developed to improve the well-being
            of the general public and optimize commercial enterprises.


          </p>
        </Col>
      </Row>


      {/* {Solutions Section} */}
      <Row justify='center'>
        <Col offset={1} xs={18} className='heroSection'>
          <h2 className='h2Solutions'>Responsible Solutions</h2>
          <p>
            Our business solutions help change the way business
            interact with their consumers.
          </p>

         
        
        </Col>
      </Row>

      <Row style={{marginTop:'1rem'}}justify='center'>
        <Col offset={1} xs={18}>
          <h1>Nutritional Analysis</h1>

        </Col>
      </Row>
      

    </React.Fragment>
  )
}

export default Home
