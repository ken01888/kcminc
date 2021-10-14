import * as React from 'react'
import { Layout, Breadcrumb, Menu, Row, Col, Space } from 'antd'
import { copyFileSync } from 'fs'


const Home: React.FC = () => {
  const [old, newOld] = React.useState([])

  // React.useEffect(() => {
  //   (async () => {
  //     let newData = await fetch('http://localhost:4000/client_suite')
  //     let reply = await newData.json()
  //     newOld(reply)
  //   })()
  // }, [])




  return (
      <Row justify='center' className="heroSection">

        <Col push={2} sm={22} className='hero'>
          <h1 className='header'> Solutions built for adventurous enterprises</h1>
          <p>At <span>KCM INC</span> we provide impactful business solutions for organizations operating within the hospitality and leisure industries. </p>

        </Col>
       
      
       

      </Row>
  )
}

export default Home
