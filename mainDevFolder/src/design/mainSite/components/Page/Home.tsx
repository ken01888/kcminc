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
  Tree,
  List,
  Typography,
  Avatar
} from 'antd'
import {
  AimOutlined,
  ApiFilled,
  ApiOutlined,
  ArrowRightOutlined,
  CalculatorFilled,
  CalendarOutlined,
  CaretDownOutlined,
  CheckCircleOutlined,
  CheckSquareFilled,
  CloseCircleFilled,
  DollarCircleFilled,
  DollarCircleOutlined,
  DollarCircleTwoTone,
  DollarOutlined,
  DownOutlined,
  FrownFilled,
  FrownOutlined,
  MehOutlined,
  ScheduleOutlined,
  SmileOutlined,
  ToolFilled,
  WalletFilled
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

  function callback(key) {
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
      title: 'Macronutrients',
      key: '4-4',

      children: [
        {
          title: 'Water',
          key: '4-4-0',
          isLeaf: true
        },
        {
          title: 'Carbohydrate',
          isLeaf: true,

          key: '4-4-1'
        },
        {
          title: 'Fiber',
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
          title: 'U+03b1' + '-Linolenic Acid',
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
  ];

  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

  return (
    <React.Fragment>
      <Row justify='center' className='rowHero' gutter={[16, 64]}>
        <Col xs={24} md={18} className='heroSection'>
          <h1>Thoughtfully designed business solutions.</h1>
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


      <Row justify='center' className='rowHero' id='solutions' gutter={[16, 64]}>
        <Col xs={24} md={18} className='heroSection'>
          <h1>Present Solutions</h1>
        </Col>
      </Row>

      <Row justify='center' className='rowHero'>
        <Col xs={24} md={15} className='nutrimap'>
          <h1>Nutrimap</h1>
          <p>
            Nutrimap gives food support and food development
            institutions a comprehensive breakdown of their
            finished products. What separates Nutrimap from
            other nutritional analysis systems is its ability
            to provide invaluable information about a product’s
            impact on individuals at various stages of life.
          </p>
        </Col>
        <Col xs={24} md={15} className='solutionTree'>
          <h1>Nutrimap Variables </h1>
          <Tree.DirectoryTree
            onSelect={onSelect}
            onExpand={onExpand}
            treeData={treeData}
            style={{ height: 'fit-content', backgroundColor: '#fafafa' }}
          />
        </Col>
        <Col xs={24} md={15} className='faq' id='faq'>
          <h1>Nutrimap Frequently Asked Questions (FAQ)</h1>

          <Collapse defaultActiveKey={['1']} onChange={callback}>
            <Collapse.Panel header="How does Nutrimap compare to other nutritional analysis solutions?" key="1">
              Nutrimap provides a complete nutrient breakdown of food and beverage products, including both micro and macro nutrients.
              What makes this solution unique is its ability to not only provide daily values but also recommended daily allowances for
              a wide range of individual at various stages of life.

            </Collapse.Panel>
            <Collapse.Panel header="How much does Nutrimap cost?" key="2">
              Pricing for Nutrimap starts at $1,000 for 10 items.
            </Collapse.Panel>
            <Collapse.Panel header="What is the average turn around time for Nutrimap analysis?" key="3">
              You can expect your results in 2 months.
            </Collapse.Panel>
            <Collapse.Panel header="Does Nutrimap analytics comply with 21 USC 343-1?" key="4">
              Yes
            </Collapse.Panel>
            <Collapse.Panel header="Can Nutrimap be integrated into an existing website" key="5">
              Yes,
              Nutrimap can be added to an existing website for an additional fee.
            </Collapse.Panel>
           
          </Collapse>

        </Col>

        <Col xs={24} md={15} className='contactSales'>
          <h1><ArrowRightOutlined />Contact Nutrimap Sales Division </h1>
          <Tree.DirectoryTree
            onSelect={onSelect}
            onExpand={onExpand}
            treeData={treeData}
            style={{ height: 'fit-content', backgroundColor: '#fafafa' }}
          />
        </Col>
      </Row>



    </React.Fragment>
  )
}

export default Home
