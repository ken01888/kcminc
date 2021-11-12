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
  FieldNumberOutlined
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

  const data = [
    {
      key: '1',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      firstName: 'Jim',
      lastName: 'Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      firstName: 'Joe',
      lastName: 'Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ]

  return (
    <React.Fragment>
      <Row justify='center' className='heroSection' >
        <Col  offset={1} xs={23}>
          <h1 className='h1_heroSection'>
            Institutional quality business solutions.
          </h1>
       
        </Col>     
      </Row>

      
          
      
      <Row justify='center' className='heroSection' gutter={[24, 16]}>
        
        <Col xs={24} md={13} className='sectionHeader'>
          <h2 className='superH2'>Solutions we offer. </h2>
        </Col>
        <Col xs={24} md={13}  className='sectionHeader'>
          <p>A suite of responsible solutions
            developed to improve organizations 
            and communities. 
           </p>
        </Col>
        
        

        <Col xs={24} md={13}>
        <ExperimentOutlined style={{color:'#009866',fontSize:'2rem'}}/>
          <motion.div
            className='serviceSection'
          >
            <h3>Nutritional Analysis</h3>
            <p>
            Nutritional analysis refers to the process of determining 
            the nutritional content of food and food products. 
            Our methodology returns the nutrient compositions of food 
            items based on size and nutritional labeling. 
            This  provides your institutions with the information 
            necessary for the development of safer products. 
            </p>

          </motion.div>         
   
        </Col>

        <Col xs={24} md={13}>
        <ExperimentOutlined style={{color:'#009866',fontSize:'2rem'}}/>
          <motion.div
            className='serviceSection'
          >
            <h3>Nutritional Analysis</h3>
            <p>
            Nutritional analysis refers to the process of determining 
            the nutritional content of food and food products. 
            Our methodology returns the nutrient compositions of food 
            items based on size and nutritional labeling. 
            This  provides your institutions with the information 
            necessary for the development of safer products. 
            </p>

          </motion.div>         
   
        </Col>
        <Col xs={23} md={13}>
        <Table dataSource={data}>
    <Table.ColumnGroup title="Name">
      <Table.Column title="First Name" dataIndex="firstName" key="firstName" />
      <Table.Column title="Last Name" dataIndex="lastName" key="lastName" />
    </Table.ColumnGroup>
    <Table.Column title="Age" dataIndex="age" key="age" />
    <Table.Column title="Address" dataIndex="address" key="address" />
    <Table.Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={tags => (
        <>
          {tags.map(tag => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    
  </Table>
        {/* <motion.div
          className='serviceSection'
        >
         
          <Space size={[16, 16]} style={{ marginBottom: 25 }} >
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
        </motion.div>          */}
       
       
      </Col>
      </Row>

      

    </React.Fragment>
  )
}

export default Home
