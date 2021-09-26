import * as React from 'react';
import fetch from 'isomorphic-fetch'
import { Col, Row } from 'antd';


const App = () => {
  const [old,setNew] = React.useState()

  React.useEffect(()=>{
    (async () =>{
      const data = await fetch('http://localhost:4000/get')
      const newData = await data.json()
     setNew(newData)
    })()
  },[])

  return(
    <Row>
      <Col md={8}>
      <p>{old}</p>
      </Col>
    
    </Row>

  )
}


export default App; 