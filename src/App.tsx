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
      <p>1</p>
      </Col>
      <Col md={8}>
      <p>2</p>
      </Col>
      <Col md={8}>
      <p>3</p>
      </Col>
    </Row>

  )
}


export default App; 