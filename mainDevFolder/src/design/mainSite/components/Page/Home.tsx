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
  notification
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
  BorderOutlined
} from '@ant-design/icons'
import { motion } from 'framer-motion'
import { duration } from 'moment'
import { MdHealthAndSafety } from 'react-icons/Md'
const { Panel } = Collapse

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!'
  },
  number: {
    range: '${label} must be between ${min} and ${max}'
  }
}

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

  const onFinish = (values: any) => {
    console.log(values)
  }

  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 }
  }

  const openNotification = () => {
    notification.open({
      message: '15 Elements',
      duration: 10,
      description: (
        <div>
          <p>
            Calcium, Chromium, Copper, Fluoride, Iodine , Iron, Magnesium,
            Manganese, Molybdenum , Phosphorus, Selenium, Zinc, Potassium ,
            Sodium, Chloride{' '}
          </p>
          <p className='nutrientD'>
            Insufficient or unreliable data will not be considered, and may
            effect nutrient breakdown.
          </p>
        </div>
      ),
      icon: (
        <BuildOutlined
          rotate={180}
          style={{
            fontSize: '1rem',
            color: '#009688'
            // borderBottom: '5px solid #009688'
          }}
        />
      )
    })
  }

  const openNotificationV = () => {
    notification.open({
      message: '14 Vitamins',
      duration: 10,
      description: (
        <div>
          <p>
            Vitamin A, Vitamin C, Vitamin D, Vitamin E, Vitamin K, Thiamin,
            Riboflavin, Niacin, Vitamin B6, Folate, Vitamin B12, Pantothenic
            Acid, Biotin, Choline.
          </p>
          <p className='nutrientD'>
            Insufficient or unreliable data will not be considered, and may
            effect results.
          </p>
        </div>
      ),
      icon: (
        <BuildOutlined
          rotate={180}
          style={{
            fontSize: '1rem',
            color: '#009688'
            // borderBottom: '5px solid #009688'
          }}
        />
      )
    })
  }

  const openNotificationM = () => {
    notification.open({
      message: '7 Macronutrients',
      duration: 10,
      description: (
        <div>
          <p>
            Total Water, Carbohydrate, Total Fiber, Fat, Linoleic Acid,
            α-Linolenic Acid, Protein
          </p>
          <p className='nutrientD'>
            Insufficient or unreliable data will not be considered, and may
            effect results.
          </p>
        </div>
      ),
      icon: (
        <BuildOutlined
          rotate={180}
          style={{
            fontSize: '1rem',
            color: '#009688'
            // borderBottom: '5px solid #009688'
          }}
        />
      )
    })
  }

  return (
    <React.Fragment>
      <Row justify='center' className='heroSection' gutter={[24, 64]}>
        <Col xs={24}>
          <h1 className='h1_heroSection'>
            {' '}
            Institutional quality solutions for public and private
            organizations.
          </h1>
        </Col>

        <Col offset={1} xs={22} md={11} className='sectionTitle'>
          <h2 className='superH2'>
            Our <span className='superSpan'>Organization</span>{' '}
          </h2>
        </Col>
        <Col offset={1} xs={22} md={11}>
          <p className='pHelp'>
            We assist both private and public enterprises develope innovative
            business solutions that help improve consumer well-being and
            operational efficiency .
          </p>
        </Col>
      </Row>

      <Row justify='center' className='heroSection' gutter={[24, 64]}>
        <Col xs={24} md={24} className='sectionHeader'>
          <h2 className='superH2'>
            Solutions{' '}
          </h2>
        </Col>

        <Col xs={23} md={10}>
          <motion.div className='serviceSection' whileHover={{borderBottom:'3px solid #009688'}}>
            <h3>Nutritional Analysis</h3>
            <p>
              Understanding the nutritient components of food related products
              can be time-consumming. Our nutritional analysis solution provides
              a complete breakdown of your product by its: element, vitamin and
              micronutrient levels.
            </p>

            <Space size={[16, 0]} style={{ marginBottom: 25 }}>
              <motion.button
                whileHover={{ color: 'white', backgroundColor: '#009688' }}
                whileTap={{ scale: 0.9 }}
                onClick={openNotification}
              >
                Elements
              </motion.button>
              <motion.button
                whileHover={{ color: 'white', backgroundColor: '#009688' }}
                whileTap={{ scale: 0.9 }}
                onClick={openNotificationV}
              >
                Nutrients
              </motion.button>
              <motion.button
                whileHover={{ color: 'white', backgroundColor: '#009688' }}
                whileTap={{ scale: 0.9 }}
                onClick={openNotificationM}
              >
                Macronutrients
              </motion.button>
            </Space>
            <Statistic
              title='Prices start at:'
              value={`${500.0}`}
              prefix={<DollarOutlined style={{ color: '#009688' }} />}
            />
          </motion.div>
        </Col>
      </Row>
      <Row justify='center' className='heroSection' gutter={[24, 64]}>
        <Col offset={1} xs={23} md={10}>
          <h3>Nutritional Analysis Pricing</h3>

          <Statistic
            title='Prices start at:'
            value={`${500.0}`}
            prefix={<DollarOutlined style={{ color: '#009688' }} />}
          />
        </Col>

        <Col offset={1} xs={23} md={10}>
          <h3>Contact Us</h3>
          <p>
            Understanding the nutritient components of food related products can
            be time-consumming. Our nutritional analysis solution provides a
            complete breakdown of your product by its: element, vitamin and
            micronutrient levels.
          </p>
        </Col>
      </Row>

      <Row justify='center' className='heroSection' gutter={[24, 64]}>
        <Col offset={1} xs={22} md={11}>
          <h2>Stay Informed </h2>
        </Col>
      </Row>

      {/* {Solutions Section} */}
    </React.Fragment>
  )
}

export default Home
