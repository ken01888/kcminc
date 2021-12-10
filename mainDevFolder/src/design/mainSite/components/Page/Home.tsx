import * as React from 'react'
import { Parallax } from 'rc-scroll-anim'
import { Row, Col, Select, Input, Button, Card } from 'antd'
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CaretLeftFilled,
  CaretRightOutlined,
  ExperimentFilled,
  PhoneOutlined,

} from '@ant-design/icons'
import { motion } from 'framer-motion'
import { duration } from 'moment'
import { json } from 'express'
import { RiHealthBookFill } from 'react-icons/Ri';
import { FaHome } from 'react-icons/fa';
import { MdSecurity } from 'react-icons/Md';
import { Link } from 'react-router-dom'


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
      <Row justify='center' className='heroSection'>
        <Col xs={23} md={18}>
          <h1 className='h1Hero'>
            Responsibily designed business solutions.
          </h1>

        </Col>
        <Col xs={23} md={18}>
          <p>
            Business solutions that benefit individuals, communities and organizations.
          </p>
        </Col>
        {/* <Col xs={23} md={18}>
        <p>
        <Button icon={<PhoneOutlined style={{fontSize:'1.25rem'}}/>} type="primary" shape="round"  size={'large'}>
          Contact us 
          </Button>
          </p>
        </Col> */}
      </Row>

      <Row justify='space-around' className='heroSection'>



        <Col xs={23} md={6}>
          <h1 className='h1solutions'>
            <ExperimentFilled style={{ fontSize: '2rem', color: '#009688' }} />Nutrimap
          </h1>
          <p style={{width:'17rem'}}>

            A complete nutrient analysis solution that helps food support instituions create healthier food products.
          </p>
          <Link to='/health'><motion.p whileHover={{ textDecoration: 'underline',color:'black'}}  style={{ color: '#009688' }}>Enter  <ArrowRightOutlined /></motion.p></Link>


        </Col>
        <Col xs={23} md={6}>
          <h1 className='h1solutions'>
            <ExperimentFilled style={{ fontSize: '2rem', color: '#009688' }} />Intravest
          </h1>
          <p style={{width:'17rem'}}>

            A complete nutrient analysis solution that helps food support instituions create healthier food products.
          </p>
          <Link to='/health'><motion.p whileHover={{ textDecoration: 'underline',color:'black'}}  style={{ color: '#009688' }}>Enter  <ArrowRightOutlined /></motion.p></Link>


        </Col>

      </Row>






    </React.Fragment>
  )
}

export default Home
