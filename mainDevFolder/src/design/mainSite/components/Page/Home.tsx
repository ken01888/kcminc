import * as React from 'react'
import { Parallax } from 'rc-scroll-anim'
import { Row, Col, Select, Input } from 'antd'
import {
  ArrowLeftOutlined,
  CaretLeftFilled,
  CaretRightOutlined,
  CheckSquareOutlined,
  RightCircleOutlined
} from '@ant-design/icons'
import { motion } from 'framer-motion'
import { duration } from 'moment'
import { json } from 'express'
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

  function handleChange (value) {
    ;(async () => {
      let newData = await fetch('http://localhost:4000/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([`${value}`])
      })

      let data: any = await newData.json()
      
      setnutrition(data)
    })()
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

      

      <Row justify='space-around' className='heroSection'>
        <Col span={24} style={{display:'flex',justifyContent:'center'}}>
        <div
            className='heroHeader'
           
          >
            <h3>Nutritional Analysis</h3>
           
            {/* <span>
              {amount ? (
                <CaretRightOutlined
                  style={{ color: '#009688', fontSize: '1.5rem' }}
                />
              ) : (
                <CaretLeftFilled
                  style={{ color: '#009688', fontSize: '1.5rem' }}
                />
              )}
            </span> */}

          </div>
          
         
        </Col>

        <Col xs={24} md={12} style={{display:'flex',justifyContent:'center'}}>
        <div
            className='heroHeader'
           
          >
           
            <p className='pHero'>
            A comprehensive nutrient breakdown of food items for food support institutions and food service establishments.
          </p>
            {/* <span>
              {amount ? (
                <CaretRightOutlined
                  style={{ color: '#009688', fontSize: '1.5rem' }}
                />
              ) : (
                <CaretLeftFilled
                  style={{ color: '#009688', fontSize: '1.5rem' }}
                />
              )}
            </span> */}

          </div>
          
         
        </Col>
      
      
        </Row>
        <Row justify='space-around' className='heroSection'>
        <Col xs={23} md={6} className='nutritionalLabel'>
          <Select
            defaultValue='Select Product'
            onChange={handleChange}
            style={{ width: 'fit-content' }}
          >
            <Option value='1104067'>100 GRAND Bar</Option>
            <Option value='1104101'>Reese's Peanut Butter Cup</Option>
            <Option value='171884'>Minute Maid, Lemonade</Option>
            <Option value='1101816'>Trix Cereal</Option>
          </Select>

          <h2>Nutritional Facts</h2>
          <hr ></hr>
          <p>Amount Per Serving: 100g / 3.5oz</p>
          <hr></hr>
          {nutrition.foods[0].foodNutrients.map(i => {
             if (i.nutrientName =='Fatty acids, total saturated'|| i.nutrientName =='Cholesterol'|| i.nutrientName=='Sodium, Na'|| i.nutrientName =='Carbohydrate, by difference'|| i.nutrientName=='Fiber, total dietary'||i.nutrientName=='Sugars, total including NLEA'||i.nutrientName=='Protein') {
              return (<p>{i.nutrientName} <span>{i.value}</span> <span>{i.unitName}</span></p>)

             }
            
          })}
         
        </Col>
        <Col xs={23} md={8}>
          <p>
          <CheckSquareOutlined />{' '}
            A comprehensive analysis of 
          </p>
          <p>
          <CheckSquareOutlined />{' '}
            A comprehensive analysis of 
          </p>
          <p>
          <CheckSquareOutlined />{' '}
            A comprehensive analysis of 
          </p>
          <p>
          <CheckSquareOutlined />{' '}
            A comprehensive analysis of 
          </p>
          <p>
          <CheckSquareOutlined />{' '}
            A comprehensive analysis of 
          </p>
         
         
        </Col>
      </Row>

     

      
    </React.Fragment>
  )
}

export default Home
