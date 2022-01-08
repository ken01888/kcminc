import * as React from 'react'
import {
  Row,
  Col,
  Select,
  Button,
  Divider,
  Modal,
  Badge,
  Statistic,
  Collapse,
  Tree
} from 'antd'
import {
  CaretDownOutlined,
  DownOutlined,
  FrownFilled,
  FrownOutlined,
  MehOutlined,
  ScheduleOutlined,
  SmileOutlined
} from '@ant-design/icons'
import { motion } from 'framer-motion'

import { Link } from 'react-router-dom'

const { Option, OptGroup } = Select

const Home: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  function callback (key) {
    console.log(key)
  }

  const onSelect = (keys: React.Key[], info: any) => {
    console.log('Trigger Select', keys, info)
  }

  const onExpand = () => {
    console.log('Trigger Expand')
  }

  const treeData = [
    {
      title: 'Life-Stage ',
      key: '0-0',

      children: [
        {
          title: 'Infants',
          key: '0-0-0',
          isLeaf: true
        },
        {
          title: 'Children',
          isLeaf: true,

          key: '0-0-1'
        },
        {
          title: 'Pregnancy',
          isLeaf: true,

          key: '0-0-2'
        },
        {
          title: 'Lactation',
          isLeaf: true,

          key: '0-0-3'
        },
        {
          title: 'Female',
          isLeaf: true,

          key: '0-0-4'
        },
        {
          title: 'Male',
          isLeaf: true,

          key: '0-0-5'
        }
      ]
    },
   
    {
      title: 'Elements',
      key: '2-2',

      children: [
        {
          title: 'Calcium',
          key: '2-2-0',
          isLeaf: true
        },
        {
          title: 'Chromium',
          isLeaf: true,

          key: '2-2-1'
        },
        {
          title: 'Copper',
          isLeaf: true,

          key: '2-2-2'
        },
        {
          title: 'Fluoride',
          isLeaf: true,

          key: '2-2-3'
        },
        {
          title: 'Iodine',
          isLeaf: true,

          key: '2-2-4'
        },
        {
          title: 'Iron',
          isLeaf: true,

          key: '2-2-5'
        },
        {
          title: 'Magnesium',
          isLeaf: true,

          key: '2-2-6'
        },
        {
          title: 'Manganese',
          isLeaf: true,

          key: '2-2-7'
        },
        {
          title: 'Molybdenum',
          isLeaf: true,

          key: '2-2-8'
        },
        {
          title: 'Phosphorus',
          isLeaf: true,

          key: '2-2-9'
        },
        {
          title: 'Selenium',
          isLeaf: true,

          key: '2-2-10'
        },
        {
          title: 'Zinc',
          isLeaf: true,

          key: '2-2-11'
        },
        {
          title: 'Potassium',
          isLeaf: true,

          key: '2-2-12'
        },
        {
          title: 'Sodium',
          isLeaf: true,

          key: '2-2-13'
        },
        {
          title: 'Chloride',
          isLeaf: true,

          key: '2-2-14'
        },
        
      ]
    },
    {
      title: 'Vitamins',
      key: '3-3',

      children: [
        {
          title: 'Vitamin A',
          key: '3-3-0',
          isLeaf: true
        },
        {
          title: 'Vitamin C',
          isLeaf: true,

          key: '3-3-1'
        },
        {
          title: 'Vitamin D',
          isLeaf: true,

          key: '3-3-2'
        },
        {
          title: 'Vitamin E',
          isLeaf: true,

          key: '3-3-3'
        },
        {
          title: 'Vitamin K',
          isLeaf: true,

          key: '3-3-4'
        },
        {
          title: 'Thiamin',
          isLeaf: true,

          key: '3-3-5'
        },
        {
          title: 'Riboflavin',
          isLeaf: true,

          key: '3-3-6'
        },
        {
          title: 'Niacin',
          isLeaf: true,

          key: '3-3-7'
        },
        {
          title: 'Vitamin B6',
          isLeaf: true,

          key: '3-3-8'
        },
        {
          title: 'Folate',
          isLeaf: true,

          key: '3-3-9'
        },
        {
          title: 'Vitamin B12',
          isLeaf: true,

          key: '3-3-10'
        },
        {
          title: 'Pantothenic Acid',
          isLeaf: true,

          key: '3-3-11'
        },
        {
          title: 'Biotin',
          isLeaf: true,

          key: '3-3-12'
        },
      
        {
          title: 'Choline',
          isLeaf: true,

          key: '3-3-13'
        },
        
      ]
    },
    {
      title: 'Micronutrients',
      key: '4-4',

      children: [
        {
          title: 'Total Water',
          key: '4-4-0',
          isLeaf: true
        },
        {
          title: 'Carbohydrate',
          isLeaf: true,

          key: '4-4-1'
        },
        {
          title: 'Total Fiber',
          isLeaf: true,

          key: '4-4-2'
        },
        {
          title: 'Fat',
          isLeaf: true,

          key: '4-4-3'
        },
        {
          title: 'Linoleic Acid',
          isLeaf: true,

          key: '4-4-4'
        },
        {
          title: 'U+03b1'+'-Linolenic Acid',
          isLeaf: true,

          key: '4-4-5'
        },
        {
          title: 'Protein',
          isLeaf: true,

          key: '4-4-6'
        },
        
      ]
    }
  ]

  return (
    <React.Fragment>
      <Row justify='center' className='rowHero' gutter={[16, 64]}>
        <Col offset={1} xs={24} md={18} className='heroSection'>
          <h1>High impact business solutions.</h1>
          <p>Building a better world one solution at a time.</p>
        </Col>
      </Row>

      <Row justify='center' className='rowHero'>
        <Col xs={24} md={15} className='nutrimap'>
          <h1>Purpose and Process</h1>
          <p>
            We focus on the development of solutions that permeate a broad range
            of industries, and improves individual well-being. The development
            of our solutions begins with the analysis of data published by the
            world's leading research institutions. Once we identify a specific
            environmental risk factor we then begin the industry mapping and
            solution development process.
          </p>
        </Col>

        <Modal
          title='Nutrimap'
          visible={isModalVisible}
          footer={[
            <motion.button
              className='button'
              whileHover={{
                border: '2px dashed #b88623',
                backgroundColor: '#b88623'
              }}
              type='button'
              onClick={handleCancel}
            >
              Exit
            </motion.button>,
            <motion.button
              className='button'
              whileHover={{
                border: '2px dashed #b88623',
                backgroundColor: '#b88623'
              }}
              type='button'
            >
              <Link to='/health'>Continue</Link>
            </motion.button>
          ]}
        >
          <Badge color='#b88623' text='Overview' />
          <p className='modal'>
            Nutrimap is designed to improve individual health and well-being by
            providing institutions and enterprises with a comprehensive nutrient
            analysis for the development of healthier food products.
          </p>
          <Statistic
            title={<h5>Americans consuming to much sodium.</h5>}
            value={9}
            suffix='/10'
          />
          <Statistic
            title={<h5>Americans ages 2-19 diagnosed with obesity.</h5>}
            value={19}
            suffix='%'
          />
          <Statistic
            title={<h5>Americans adults diagnosed with obesity.</h5>}
            value={40}
            suffix='%'
          />
          <Divider
            dashed
            style={{ borderWidth: '2px', borderColor: '#b88623' }}
          ></Divider>
          <p className='modal1'>
            Click continue below to submit your organizations information.
          </p>
        </Modal>
      </Row>

      <Row  className='rowHero' >
        <Col xs={24} md={18} className='heroSection'>
          <h1>Current Solutions</h1>
          {/* <motion.div animate={{y:[5,10,10,5]}} transition={{repeat:Infinity,duration:3}}>
          <CaretDownOutlined style={{ fontSize: '3.5rem', color: '#b88623' }} />


          </motion.div> */}
        </Col>
      </Row>

      <Row justify='center' className='rowHero'>
        <Col xs={24} md={7} className='nutrimap'>
          <h1>Nutrimap</h1>
          <p>
            Nutrimap provides a nutritional breakdown of the final food products
            produced by food and healthcare institutions, in addition to the
            products effect on end users at various stages of life.
          </p>
          <div className='industry'>
            <motion.button
              whileHover={{
                border: '2px dashed #b88623',
                backgroundColor: '#b88623'
              }}
              type='button'
              className='button'
              onClick={showModal}
            >
              Nutrimap
            </motion.button>
          </div>
        </Col>
        <Col xs={24} md={7} className='solutionTree'>
          <h1>Components</h1>
          <Tree.DirectoryTree
            onSelect={onSelect}
            onExpand={onExpand}
            treeData={treeData}
            style={{backgroundColor:'#b8860b54'}}
          />
        </Col>
        
      </Row>
    </React.Fragment>
  )
}

export default Home
