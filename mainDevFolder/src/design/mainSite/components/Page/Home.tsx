import * as React from 'react'
import { Parallax } from 'rc-scroll-anim'
import {Row,Col,Select} from 'antd'
import {ArrowLeftOutlined, CaretLeftFilled, CaretRightOutlined,RightCircleOutlined} from '@ant-design/icons'
import { motion } from 'framer-motion'
import { duration } from 'moment'
const { Option, OptGroup } = Select

const Home: React.FC = () => {
  const [old, newOld] = React.useState(undefined)
  const [nutrition, setnutrition] = React.useState('')

  React.useEffect(() => {
     (async () => {
      let newData = await fetch('http://localhost:4000')
      let data = await newData.json()
      data.foodNutrients.map(i => {
        if (i.nutrientName == "Protein") {
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


  function handleChange(value) {
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
        <Col md={12} xs={24} className='selectSolution'>
        <h2>Select category</h2>
        </Col>
      </Row>

      <Row justify='space-around' className='heroSection'>
        <Col xs={23} md={6}>
          <motion.h2  whileHover={{cursor:'pointer',scale:1.1}} whileTap={{scale:.9,color:'#009688'}}    onClick={()=>{console.log('hello')}}>Health</motion.h2 >

          <motion.div className='heroHeader'>
            <h3>Nutritional Analysis</h3><span><CaretLeftFilled style={{color:'#009688',fontSize:'1.5rem'}}/></span>
            
          </motion.div>
        </Col>

        <Col xs={23} md={6} className='nutritionalLabel'>
          <h2>
            Nutritional Facts 
          </h2>
          <p>Serving Size</p>
          <hr></hr>
          <p>Amount Per Serving</p>
          <hr></hr>
          <div>
            <p>Calories</p>
            <p>dd</p>
          </div>


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
