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
  Table,
  Divider
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
  SettingOutlined,
  FolderFilled,
  FolderOpenFilled,
  FileFilled,
  FileTextOutlined,
  ArrowLeftOutlined,
  PieChartOutlined
} from '@ant-design/icons'
import { motion } from 'framer-motion'
import { duration } from 'moment'
import { MdHealthAndSafety } from 'react-icons/Md'
const { Panel } = Collapse

const Home: React.FC = () => {
  const [old, newOld] = React.useState([])
  const [nutrition, setnutrition] = React.useState(false)

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

  const element = (
    <motion.h3
      whileHover={{
        borderBottom: '2px solid #009688'
      }}
    >
      Nutritional Analysis
    </motion.h3>
  )

  console.log(nutrition)

  return (
    <React.Fragment>
      <Row justify='space-around' className='heroSection'>
        <Col xs={23} md={24} className='heroDiv'>
          <h1 className='h1_heroSection'>
            Institutional quality business solutions.
          </h1>
          <p className='pHero'>
            A suite of responsible solutions developed to improve organizations
            and communities.
          </p>
        </Col>
        {/* <Col xs={23} md={11}>
          <motion.div className='serviceSection'>
            <motion.button onTap={(e)=>{setnutrition(!nutrition)}} whileTap={{scale:.9}}>
              {nutrition?<FolderOpenFilled style={{color:'#009688',fontSize:'2rem'}}/>:<FolderFilled style={{color:'#009688',fontSize:'2rem'}} />}
            </motion.button>
            {nutrition?element:<p>View Solutions</p>}
           
            <p>
            Nutritional analysis refers to the process of determining 
            the nutritional content of food and food products. 
            Our methodology returns the nutrient compositions of food 
            items based on size and the nutritional values.
            </p>
          </motion.div>
          <Col offset={2} md={8} className='treeSolutions'>
          <a href='http://localhost:3000/'>Nutritional Analysis</a>

          </Col>

        </Col> */}
      </Row>

      <Row>
      <Col xs={23} md={8} className='needColumn'>
          <motion.div
            className='needItems'
            whileHover={{ border: '3px solid #009688', borderRadius: '50px' }}
          >
            <h4>Health</h4>
          </motion.div>
        </Col>
        <Col xs={23} md={8} className='needColumn'>
          <motion.div
            className='needItems'
            whileHover={{ border: '3px solid #009688', borderRadius: '50px' }}
          >
            <h4>Shelter</h4>
          </motion.div>
        </Col>
        <Col xs={23} md={8} className='needColumn'>
          <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}

          viewport={{ once: true }}
          className='needItems'
          whileHover={{ border: '3px solid #009688', borderRadius: '50px' }}
          >
            <h4>Security</h4>
          </motion.div>
        </Col>
      </Row>

      <Row justify='space-around' className='heroSection'>
        <Col xs={23}>
          <motion.div>
            <h3>Our Institution</h3>
           
          </motion.div>
        </Col>
      </Row>

      <Row justify='center' className='heroSection'>
        <Col xs={23} md={12}>
          <motion.div>
            <p>
              At KCM INC we focus on the development of life changing business
              solutions. We target a specific set of basic human needs
              categories, locate weaknesses associated with a specific human
              need and finally engineer responsible solutions that help improve
              upon a isolated item .
            </p>
          </motion.div>
        </Col>
      </Row>

      <Row justify='space-around' className='heroSection'>
        <Col xs={23}>
          <motion.div className='heroHeader'>
            <h3>Human needs we benefit.</h3>
          </motion.div>
        </Col>

        <Col xs={23} md={12}>
            <p>
              At KCM INC we focus on the development of life changing business
              solutions. We target a specific set of basic human needs
              categories, locate weaknesses associated with a specific human
              need and finally engineer responsible solutions that help improve
              upon a isolated item .
            </p>
        </Col>

       
      </Row>

      <Row>
      <Col xs={23} md={8} className='needColumn'>
          <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
            className='needItems'
            whileHover={{ border: '3px solid #009688', borderRadius: '50px' }}
          >
            <h4>Health</h4>
          </motion.div>
        </Col>
        <Col xs={23} md={8} className='needColumn'>
          <motion.div
            className='needItems'
            whileHover={{ border: '3px solid #009688', borderRadius: '50px' }}
          >
            <h4>Shelter</h4>
          </motion.div>
        </Col>
        <Col xs={23} md={8} className='needColumn'>
          <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
            className='needItems'
            whileHover={{ border: '3px solid #009688', borderRadius: '50px' }}
          >
            <h4>Security</h4>
          </motion.div>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Home
