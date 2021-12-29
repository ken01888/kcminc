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
  Timeline,
  Modal
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

  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <React.Fragment>
      <Row justify='center' className='rowHero' gutter={[16, 64]}>
        <Col offset={1} xs={24} md={18} className='heroSection'>
          <h1>High impact business solutions.</h1>
          <p>
            Solutions designed to improve the well-being of consumers and
            institutions.
          </p>

          <Link to='/health'>
            <Button type="dashed" icon={<ScheduleOutlined style={{color:'darkgoldenrod',fontSize:'1.25rem'}}/>} size='large' htmlType='button'>
              Schedule Consultation
            </Button>
          </Link>
          {/* <div className='heroDiv'>
            <motion.p>Health</motion.p>
            <motion.p>Security</motion.p>
            <motion.p>Shelter</motion.p>
          </div> */}
        </Col>
        {/* <Col offset={1} xs={24} md={10} className='heroSection2'>

          <h2>Solutions built for a broad range of industries.</h2>

          <Timeline style={{ marginTop: '2rem' }}>
            <Timeline.Item>Healthcare</Timeline.Item>
            <Timeline.Item>Hospitality</Timeline.Item>
            <Timeline.Item>Finance</Timeline.Item>
            <Timeline.Item>Real Estate</Timeline.Item>
          </Timeline>

          <Link to='/health'>
            <Button type="primary" shape="round" icon={<ExperimentFilled />} size='large' htmlType='button'>
              Nutrimap
            </Button>
          </Link>
          <div className='heroDiv'>
            <motion.p>Health</motion.p>
            <motion.p>Security</motion.p>
            <motion.p>Shelter</motion.p>
          </div>
        </Col> */}
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
           
  
          <h1>Conscious Engineering</h1>
          <p>
            We engineering solutions that help build stronger 
            institutions and communities. 
          </p>
          {/* <p>
            Nutrimap is a data driven nutritional analysis solution
            developed to improve consumer health and wellbeing.
            Nutrimap doesn't just provide a complete nutrient breakdown
            of food products, it also provides nutritional data based on
            an individual's stage in life.
          </p> */}
          <div className='industry'>
          <motion.button whileHover={{border:'2px dashed darkgoldenrod'}} type='button' className="color" onClick={showModal}>Nutrimap</motion.button>
          <motion.button whileHover={{border:'2px dashed darkgoldenrod'}} type='button' className="color">Intravest</motion.button>         
          </div>
          <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
         

       
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Home
