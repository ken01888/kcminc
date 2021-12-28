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
  Image,
  Timeline
} from 'antd'
import {
  AreaChartOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CaretLeftFilled,
  CaretRightOutlined,
  CheckCircleOutlined,
  CheckOutlined,
  DollarCircleOutlined,
  ExperimentFilled,
  ExperimentOutlined,
  GlobalOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
  PieChartOutlined,
  ScheduleOutlined,
  StockOutlined,
  TwitterOutlined
} from '@ant-design/icons'
import { motion } from 'framer-motion'
import { duration } from 'moment'
import { json } from 'express'
import { RiHealthBookFill } from 'react-icons/Ri'
import { FaHome } from 'react-icons/fa'
import { MdSecurity } from 'react-icons/Md'
import { Link } from 'react-router-dom';
import image from '../../../../design/img/food.jpg';

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
      <Row justify='center' className='rowHero' gutter={[16, 64]}>
        <Col offset={1} xs={24} md={10} className='heroSection'>
          <h1>High impact business solutions.</h1>
          <p>
            Solutions designed to improve the well-being of consumers and
            institutions.
          </p>

          <Link to='/health'>
            <Button type="primary" icon={<ScheduleOutlined />} size='large' htmlType='button'>
              Schedule Consultation
            </Button>
          </Link>
          {/* <div className='heroDiv'>
            <motion.p>Health</motion.p>
            <motion.p>Security</motion.p>
            <motion.p>Shelter</motion.p>
          </div> */}
        </Col>
        <Col offset={1} xs={24} md={10} className='heroSection2'>

          <h2>Solutions built for a broad range of industries.</h2>

          <Timeline style={{ marginTop: '2rem' }}>
            <Timeline.Item>Healthcare</Timeline.Item>
            <Timeline.Item>Hospitality</Timeline.Item>
            <Timeline.Item>Finance</Timeline.Item>
            <Timeline.Item>Real Estate</Timeline.Item>
          </Timeline>

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

      {/* <Row justify='center'>
        <Col className='section2' xs={24} md={19}>

          <Card title="Solutions" style={{ marginTop: '5rem', width: '-webkit-fill-available' }}>
            <Card type="inner" title='Nutrimap' extra={<InfoCircleOutlined style={{ color: '#009688', fontSize: '1.25rem' }} />} actions={[<DollarCircleOutlined />, <InfoCircleOutlined />, <InfoCircleOutlined />]}>
              Nutrimap is a data driven nutritional analysis solution
              developed to improve consumer health and wellbeing.
              Nutrimap doesn't just provide a complete nutrient breakdown
              of food products, it also provides nutritional data based on
              an individual's life stage.

            </Card>
          </Card>,

        </Col>
      </Row> */}


      <Row justify='space-around'>


        <Col offset={1} xs={24} md={10} className='nutrimap'>
          <Tag icon={<ExperimentFilled style={{color:'#009688'}} />} style={{fontSize:'1rem'}}>
            Nutrimap
          </Tag>  
                  
          <h1>Engineering better food options for consumers.</h1>
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
