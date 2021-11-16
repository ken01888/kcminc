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
  Table,
  Divider,
  Select
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
  FieldNumberOutlined,
  SettingOutlined,
  FolderFilled,
  FolderOpenFilled,
  FileFilled,
  FileTextOutlined,
  ArrowLeftOutlined,
  PieChartOutlined,
  EditOutlined,
  EllipsisOutlined
} from '@ant-design/icons'
import { motion } from 'framer-motion'
import { duration } from 'moment'
import { MdHealthAndSafety } from 'react-icons/Md'
const { Option, OptGroup } = Select

const Home: React.FC = () => {
  const [old, newOld] = React.useState(undefined)
  const [nutrition, setnutrition] = React.useState('')

  React.useEffect(() => {
    ;(async () => {
      let newData = await fetch('http://localhost:4000')
      let data = await newData.json()
      data.foodNutrients.map(i=>{
        if (i.nutrientName=="Protein"){
          setnutrition(i.value)
        }
      })
    })()
  }, [])

  const element = (
    <motion.h3
      whileHover={{
        borderBottom: '2px solid #009688'
      }}
    >
      Nutritional Analysis
    </motion.h3>
  )


  function handleChange (value) {
    console.log(`selected ${value}`)
  }

  return (
    <React.Fragment>
      <Row justify='center' className='heroSection'>
        <Col xs={23} md={24}>
          <h1 className='h1Hero'>Institutional quality business solutions.</h1>
          <p className='pHero'>
            A suite of responsible solutions developed to assist organizations
            and communities.
          </p>
        </Col>
      </Row>

      <Row justify='center'>
        <Col span={12}>
          <Card
            title='Select solution '
            headStyle={{ display: 'flex', justifyContent: 'center' }}
          >
            <Col span={12} onClick={() => console.log('fdd')}>
              <motion.div>
                <Card.Grid
                  style={{
                    textAlign: 'center',
                    width: 'fit-content'
                  }}
                >
                  Nutritional Analysis
                </Card.Grid>
              </motion.div>
            </Col>
          </Card>
          ,
        </Col>
      </Row>

      <Row justify='space-around' className='heroSection'>
        <Col xs={23} md={8}>
          <h2>Nutritional Analysis</h2>

          <motion.div className='heroHeader'>
            <p>
              {' '}
              A comprehensive analysis of your product utilizing a combination
              of database and laboratory analysis. The analysis includes
              laboratory moisture analysis of the finished product, serving size
              determination, and testing product testing to determine the
              accurate weight for nutrition labeling. Includes the nutrition
              analysis, nutrition facts label, ingredient statement and allergen
              declaration, plus nutrient content claims and voluntary nutrients
              added to your label.
            </p>
          </motion.div>
        </Col>

        <Col xs={23} md={8}>
          <h2>
            Pricing - <span style={{ color: '#009688' }}>$500</span>
          </h2>

          <p>
            {' '}
            A comprehensive analysis of your product utilizing a combination of
            database and laboratory analysis. The analysis includes laboratory
            moisture analysis of the finished product, serving size
            determination, and testing product testing to determine the accurate
            weight for nutrition labeling. Includes the nutrition analysis,
            nutrition facts label, ingredient statement and allergen
            declaration, plus nutrient content claims and voluntary nutrients
            added to your label.
          </p>
        </Col>
      </Row>

      <Row justify='space-around' className='pricingSection'>
        <Col xs={23} md={8}>
          <h2>Includes:</h2>

          <p>
            <CaretRightOutlined
              style={{ color: '#009688', fontSize: '1rem' }}
            />{' '}
            A comprehensive analysis of your product utilizing a combination of
            database and laboratory analysis. The analysis includes laboratory
            moisture analysis of the finished product, serving size
            determination, and testing product testing to determine the accurate
            weight for nutrition labeling. Includes the nutrition analysis,
            nutrition facts label, ingredient statement and allergen
            declaration, plus nutrient content claims and voluntary nutrients
            added to your label.
          </p>
          <p>
            <CaretRightOutlined
              style={{ color: '#009688', fontSize: '1rem' }}
            />{' '}
            A comprehensive analysis of your product utilizing a combination of
            database and laboratory analysis. The analysis includes laboratory
            moisture analysis of the finished product, serving size
            determination, and testing product testing to determine the accurate
            weight for nutrition labeling. Includes the nutrition analysis,
            nutrition facts label, ingredient statement and allergen
            declaration, plus nutrient content claims and voluntary nutrients
            added to your label.
          </p>
          <p>
            <CaretRightOutlined
              style={{ color: '#009688', fontSize: '1rem' }}
            />{' '}
            A comprehensive analysis of your product utilizing a combination of
            database and laboratory analysis. The analysis includes laboratory
            moisture analysis of the finished product, serving size
            determination, and testing product testing to determine the accurate
            weight for nutrition labeling. Includes the nutrition analysis,
            nutrition facts label, ingredient statement and allergen
            declaration, plus nutrient content claims and voluntary nutrients
            added to your label.
          </p>
          <p>
            <CaretRightOutlined
              style={{ color: '#009688', fontSize: '1rem' }}
            />{' '}
            A comprehensive analysis of your product utilizing a combination of
            database and laboratory analysis. The analysis includes laboratory
            moisture analysis of the finished product, serving size
            determination, and testing product testing to determine the accurate
            weight for nutrition labeling. Includes the nutrition analysis,
            nutrition facts label, ingredient statement and allergen
            declaration, plus nutrient content claims and voluntary nutrients
            added to your label.
          </p>
        </Col>
      </Row>

      <Row justify='space-around' className='pricingSection'>
        <Col xs={23} md={8}>
          <h2>Example</h2>

          <Select
            defaultValue='lucy'
            style={{ width: 200 }}
            onChange={handleChange}
          >
            <OptGroup label='Manager'>
              <Option value='eyere'>Jack</Option>
              <Option value='lucy'>Lucy</Option>
            </OptGroup>
            <OptGroup label='Engineer'>
              <Option value='Yiminghe'>yiminghe</Option>
            </OptGroup>
          </Select>
       {<p>{nutrition}</p>}
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Home
