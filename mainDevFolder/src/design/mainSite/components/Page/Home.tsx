import * as React from 'react'
import { Parallax } from 'rc-scroll-anim'

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
  Popover,
  Tabs,
  Input,
  Form,
  InputNumber,
  Statistic,
  notification,
  Table
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
  CaretRightOutlined,
  AppleOutlined,
  AndroidOutlined,
  ToolOutlined,
  ExperimentOutlined,
  DollarCircleOutlined,
  BuildOutlined,
  LikeOutlined,
  SmileOutlined,
  DollarOutlined,
  FacebookFilled,
  BorderOutlined,
  FieldNumberOutlined,
  SettingOutlined
} from '@ant-design/icons'
import { motion } from 'framer-motion'
import { duration } from 'moment'
import { MdHealthAndSafety } from 'react-icons/Md'
const { Panel } = Collapse



const Home: React.FC = () => {
  const [old, newOld] = React.useState([])

  // React.useEffect(() => {
  //   ;(async () => {
  //     let newData = await fetch('http://localhost:4000')
  //     let reply: { foods: any[] } = await newData.json()
  //     let newReply: [] = await reply.foods[1].foodNutrients

  //     newReply.map(i => {
  //       console.log(i)
  //     })
  //   })()
  // }, [])

  




  return (
    <React.Fragment>
      <Row justify='center' className='heroSection' >
        <Col  xs={24}>
          <h1 className='h1_heroSection'>
            Institutional quality business solutions.
          </h1>
          <p className='pHero'>A suite of responsible solutions
            developed to improve organizations 
            and communities. 
           </p>
           <h2 className='superH2'>Solutions we offer. </h2>

        </Col>   
        <Col xs={8}>
        <motion.div
            className='serviceSection'
          >
            <motion.button><ExperimentOutlined style={{color:'#bfbfbf',fontSize:'2rem'}}/></motion.button>
            <h3>Nutritional Analysis</h3>
            <p>
            Nutritional analysis refers to the process of determining 
            the nutritional content of food and food products. 
            Our methodology returns the nutrient compositions of food 
            items based on size and the nutritional content.
            </p>
          </motion.div>  
        </Col>
      </Row>

      <Row justify='center' className='heroSection' gutter={[24, 16]}>
        <Col xs={24} md={13} className='sectionHeader'>
        </Col>
        
      </Row>

      <Row justify='space-around' className='heroSection' gutter={[24, 16]}>
      <Col xs={24} md={8}>
          <motion.div
            className='serviceSection'
          >
            <h3>Nutritional Analysis</h3>
            <p>
            Nutritional analysis refers to the process of determining 
            the nutritional content of food and food products. 
            Our methodology returns the nutrient compositions of food 
            items based on size and the nutritional content.
            </p>
          </motion.div>         
        
        </Col>
        <Col xs={24} md={8}>
        
                

        </Col>
      </Row>


    </React.Fragment>
  )
}

export default Home
