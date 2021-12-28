import * as React from 'react'
import { Parallax } from 'rc-scroll-anim'
import {
  Row,
  Col,
  Select,
  Input,
  Button,
  Card,
  Tag,
  Divider,
  Image
} from 'antd'
import {
  AreaChartOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CaretLeftFilled,
  CaretRightOutlined,
  CheckCircleOutlined,
  DollarCircleOutlined,
  ExperimentFilled,
  GlobalOutlined,
  PhoneOutlined,
  PieChartOutlined,
  TwitterOutlined
} from '@ant-design/icons'
import { motion } from 'framer-motion'
import { duration } from 'moment'
import { json } from 'express'
import { RiHealthBookFill } from 'react-icons/Ri'
import { FaHome } from 'react-icons/fa'
import { MdSecurity } from 'react-icons/Md'
import { Link } from 'react-router-dom'
import image from '../../../img/image_1.jpg'

const { Option, OptGroup } = Select

const Home: React.FC = () => {
  const [old, newOld] = React.useState(undefined)
  const [nutrition, setnutrition] = React.useState<any>({
    totalHits: '',
    foods: [{ foodNutrients: [] }]
  })
  const [amount, setAmount] = React.useState(false)

  const element = (
    <motion.h3
      whileHover={{
        borderBottom: '2px solid #009688'
      }}
    >
      Nutritional Analysis
    </motion.h3>
  )

  return (
    <React.Fragment>
      <Row justify='center' gutter={[16, 32]}>
        <Col xs={14} className='heroSection'>
          <h1>High impact business solutions.</h1>
          <p>
            Solutions designed to improve the well-being of consumers and
            institutions.
          </p>
          <GlobalOutlined
            style={{
              color: '#009688',
              fontSize: '7rem',
              textAlign: 'center',
              marginBottom: '5rem'
            }}
          />
          {/* <Link to='/health'>
            <Button type="primary" shape="round" icon={<ExperimentFilled />} size='large' htmlType='button'>
              Nutrimap
            </Button>
          </Link> */}
          {/* <div className='heroDiv'>
            <motion.p>Health</motion.p>
            <motion.p>Security</motion.p>
            <motion.p>Shelter</motion.p>
          </div> */}
        </Col>
      </Row>
      <Row justify='center'>
        <Col className='section2' xs={24} md={14}>
          <h1>Assisiting a broad range of industries.</h1>
          <p>
            We provide integrative technological solutions to institutions
            operating within a broad range of industries. Our solutions are
            designed to improve the well-being of global communinties and
            institutions.
          </p>
        </Col>
      </Row>
      <Row className='heroSection'>
        <Col xs={24} style={{ display: 'flex', justifyContent: 'center' }}>
          <h1>Solutions</h1>
        </Col>
      </Row>

      <Row justify='space-around'>
        <Col xs={24} md={10}>
          <Image
            preview={false}
            src={image}
            style={{ width: '445px', height: '545px' }}
          ></Image>
        </Col>

        <Col xs={24} md={10} className='nutrimap'>
          <h3>Nutrimap</h3>
          <h1>Engineering better food options for consumers.</h1>
          <h3>Lable</h3>
          <p>
          Nutrimap is a data driven nutritional analysis solution 
          developed to improve consumer health and wellbeing. 
          Nutrimap doesn't just provide a complete nutrient breakdown 
          of food products, it also provides nutritional data based on 
          an individual's stage in life. 

          </p>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Home
