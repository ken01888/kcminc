import * as React from 'react'
import { Layout, Breadcrumb, Menu, Row, Col, Space } from 'antd'
import { copyFileSync } from 'fs'


const Home: React.FC = () => {
  const [old, newOld] = React.useState([])

  //   React.useEffect(() => {
  //     (async () => {
  //       let newData = await fetch('http://localhost:4000/client_suite')
  //       let reply = await newData.json()
  //       newOld(reply)
  //     })()
  //   }, [])

  


  return (
    <React.Fragment>
      <Row>
          
          <Col sm={24} >
              <h3 className='text'>KCM INC</h3>
          </Col>
          
      </Row>
    </React.Fragment>
  )
}

export default Home
