import * as React from 'react'
import {
  Row,
  Col,
  Select,

  Button,

  Divider,

  Modal,
  Badge,
  Statistic
} from 'antd'
import {

  ScheduleOutlined,

} from '@ant-design/icons'
import { motion } from 'framer-motion'

import { Link } from 'react-router-dom';

const { Option, OptGroup } = Select

const Home: React.FC = () => {


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
            Building a better world one solution at a time.
          </p>

          <Link to='/health'>
            <Button type="dashed" icon={<ScheduleOutlined style={{ color: 'darkgoldenrod', fontSize: '1.25rem' }} />} size='large' htmlType='button'>
              Schedule Consultation
            </Button>
          </Link>

        </Col>

      </Row>




      <Row justify='space-around'>


        <Col xs={24} md={10} className='nutrimap'>
          <h1>Health based solutions</h1>
          <p>
            Our health based solutions are creatively designed to address
            the most problematic areas affecting the welfare of our general public.
          </p>
          <div className='industry'>
            <motion.button whileHover={{ border: '2px dashed darkgoldenrod', backgroundColor: 'darkgoldenrod' }} type='button' className='button' onClick={showModal}>Nutrimap</motion.button>
          </div>
        </Col>





        <Modal title="Nutrimap" visible={isModalVisible}

          footer={[<motion.button className='button' whileHover={{ border: '2px dashed darkgoldenrod', backgroundColor: 'darkgoldenrod' }} type='button' onClick={handleCancel}>Exit</motion.button>,
          <motion.button className='button' whileHover={{ border: '2px dashed darkgoldenrod', backgroundColor: 'darkgoldenrod' }} type='button' ><Link to='/health'>Continue</Link></motion.button>]}>

          <Badge color='darkgoldenrod' text='Overview' />
          <p className='modal'>
            Nutrimap is designed to improve individual health and well-being
            by providing institutions and enterprises with a comprehensive
            nutrient analysis for the development of healthier food products.
          </p>
          <Statistic title={<h5>Americans consuming to much sodium.</h5>} value={9} suffix="/10" />
          <Statistic title={<h5>Americans ages 2-19 diagnosed with obesity.</h5>} value={19} suffix="%" />
          <Statistic title={<h5>Americans adults diagnosed with obesity.</h5>} value={40} suffix="%" />
          <Divider dashed style={{ borderWidth: '2px', borderColor: 'darkgoldenrod' }}></Divider>
          <p className='modal1'>
            Click continue below to submit your organizations information.
          </p>






        </Modal>

      </Row>


      <Row justify='space-around'>


        <Col xs={24} md={6} className='nutrimap'>
          <h1>Health based solutions</h1>
          <p>
            Our health based solutions are creatively designed to address
            the most problematic areas affecting the welfare of our general public.
          </p>
          <div className='industry'>
            <motion.button whileHover={{ border: '2px dashed darkgoldenrod', backgroundColor: 'darkgoldenrod' }} type='button' className='button' onClick={showModal}>Nutrimap</motion.button>
          </div>
        </Col>
        <Col xs={24} md={6} className='nutrimap'>
          <h1>Health based solutions</h1>
          <p>
            Our health based solutions are creatively designed to address
            the most problematic areas affecting the welfare of our general public.
          </p>
          <div className='industry'>
            <motion.button whileHover={{ border: '2px dashed darkgoldenrod', backgroundColor: 'darkgoldenrod' }} type='button' className='button' onClick={showModal}>Nutrimap</motion.button>
          </div>
        </Col>
        <Col xs={24} md={6} className='nutrimap'>
          <h1>Health based solutions</h1>
          <p>
            Our health based solutions are creatively designed to address
            the most problematic areas affecting the welfare of our general public.
          </p>
          <div className='industry'>
            <motion.button whileHover={{ border: '2px dashed darkgoldenrod', backgroundColor: 'darkgoldenrod' }} type='button' className='button' onClick={showModal}>Nutrimap</motion.button>
          </div>
        </Col>

      </Row>
    </React.Fragment>
  )
}

export default Home
