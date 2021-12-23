import * as React from 'react'
import { Parallax } from 'rc-scroll-anim'
import { Row, Col, Select, Input, Button, Card, Tag } from 'antd'
import {
  AreaChartOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CaretLeftFilled,
  CaretRightOutlined,
  CheckCircleOutlined,
  DollarCircleOutlined,
  ExperimentFilled,
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
      <Row justify='space-around' className='heroSection' >
        <Col xs={18} >
          <h1 className='h1Hero'>Responsibily designed business solutions.</h1>
          <p>
            <span style={{ color: '#009688', fontWeight: 600 }}>KCM INC</span>{' '}
            provides integrative technological solutions to institutions
            operating within a broad set of industries. Our solutions are
            designed to improve the well-being of both national and global
            communities.
          </p>
          <Link to='/health'>
            <Button type="primary" shape="round" icon={<ExperimentFilled />} size='large' htmlType='button'>
              Nutrimap
            </Button>
          </Link>
        </Col>
      </Row>

     




    </React.Fragment>
  )
}

export default Home
