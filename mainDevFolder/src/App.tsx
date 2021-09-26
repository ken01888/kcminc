import * as React from 'react';
import fetch from 'isomorphic-fetch'
import { Button, Calendar, Col, Divider, List, Row, Space, Typography } from 'antd';


const App = () => {
  const [old,setNew] = React.useState()

  React.useEffect(()=>{
    (async () =>{
      const data = await fetch('http://localhost:4000/get')
      const newData = await data.json()
     setNew(newData)
    })()
  },[])

  function onPanelChange(value, mode) {
    console.log(value.format('YYYY-MM-DD'), mode);
  }
  
  return(
   
    <>
    <Calendar onPanelChange={onPanelChange} />
</>
  )
}


export default App; 