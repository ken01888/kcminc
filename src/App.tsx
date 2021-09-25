import * as React from 'react';
import fetch from 'isomorphic-fetch'
import { Col, Row } from 'antd';


const App = () => {
  // const [old,setNew] = React.useState()

  // const fetchServer = async () =>{
  //   const data = await fetch('/')
  //   const newData = await data.json()
  //  console.log(newData)

  // }
  // fetchServer()

  return(
    <Row>
      <Col md={8}>
      <p>Heldlo</p>
      </Col>
      <Col md={8}>
      <p>Heldlo</p>
      </Col>
      <Col md={8}>
      <p>Hello1</p>
      </Col>
    </Row>

  )
}


export default App; 