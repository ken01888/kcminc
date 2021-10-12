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
      <Row justify='center'>

        <Col sm={25} >
          <h4 className='header'> Building stronger communities by  </h4>
          <p>dkdk</p>

        </Col>
       
      
       

      </Row>
  )
}

export default Home
