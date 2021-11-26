import * as React from 'react'
import { Parallax } from 'rc-scroll-anim'
import { Row, Col, Select, Input, Button, Card } from 'antd'
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CaretLeftFilled,
  CaretRightOutlined,

} from '@ant-design/icons'
import { motion } from 'framer-motion'
import { duration } from 'moment'
import { json } from 'express'
import { RiHealthBookFill } from 'react-icons/Ri';
import{FaHome} from 'react-icons/fa';
import {MdSecurity} from 'react-icons/Md';
import {Link} from 'react-router-dom'


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
        <Col xs={23} md={18}>
          <h1 className='h1Hero'>
          Institutional quality business solutions 
          designed for modern enterprises.
          </h1>
         
        </Col>
        <Col xs={23} md={18}>
        <p>
          Improve the well-being of communities and stakeholders 
          by utilizing our suite of responsibly designed solutions 
          developed to improve organizations and the people they serve.
          </p>
        </Col>
        <Col xs={23} md={18}>
        <p>
        <Button type="primary" shape="round"  size={'large'}>
          Contact us 
          </Button>

          </p>
        </Col>
      </Row>

     

      <Row justify='center' className='heroSection'>
        <Col xs={23} md={6}>
          <motion.h2
            whileHover={{ cursor: 'pointer', scale: 1.1 }}
            whileTap={{ scale: 0.9, color: '#009688' }}
            onClick={() => {
              console.log('hello')
            }}
            className='h1Hero'
          >
            
            Who We Are
          </motion.h2>

          <motion.div
            className='heroHeader'
           
          >
            <p style={{width:'28rem'}}>At KCM INC we focus on engineering responsible business 
              solutions that benefit individuals, communities and organizations. 
              Our methodologies focus on the improvement of 3 basic human needs: 
              health, shelter and security. When we recognize environmental
               weakness we build solutions that heal.</p>
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
          </motion.div>
        </Col>

        <Col xs={24} md={12} style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',height:'299px'}}>
       <motion.div className='solutionsLink'>
       <RiHealthBookFill style={{fontSize:'5rem',color:'#009688'}} />
       <Link to='/health'><p>Health based solutions  <ArrowRightOutlined /></p></Link>
       </motion.div>
       <motion.div className='solutionsLink'>
       <FaHome style={{fontSize:'5rem',color:'#009688'}} />
       <Link to='/about'><p>Shelter based solutions  <ArrowRightOutlined /></p></Link>
       </motion.div>
       <motion.div className='solutionsLink'>
       <MdSecurity style={{fontSize:'5rem',color:'#009688'}} />
       <Link to='/about'><p>Security based solutions  <ArrowRightOutlined /></p></Link>
       </motion.div>
        </Col>
        </Row>


        <Row className='heroSection' justify='center'>
          
        {/* <Col xs={23} md={6} className='nutritionalLabel'>
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
         
        </Col> */}
        {/* <Col xs={23} md={8}>
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
         
         
        </Col> */}
      </Row>  
    </React.Fragment>
  )
}

export default Home
