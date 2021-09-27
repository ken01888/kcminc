import * as React from 'react';
import fetch from 'isomorphic-fetch'
import { Button, Calendar, Col, Divider, List, Row, Space, Typography } from 'antd';


const App:React.FC = () => {
  const [old,setNew] = React.useState()

  React.useEffect(()=>{
    (async () =>{
      const data = await fetch('http://localhost:4000')
      const newData = await data.json()
     setNew(newData)
    })()
  },[])

  

  
  return(
   
<p>{old}</p>
  )
}


export default App; 