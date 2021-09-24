import * as React from 'react';
import fetch from 'isomorphic-fetch'


const App = () => {
  const [old,setNew] = React.useState()

  const fetchServer = async () =>{
    const data = await fetch('http://localhost:3000')
    const res = await data.json();
    setNew(res)
console.log(res)     
  }
  

  return(

    <p  >{old}pagesfds ddddfdfadsafjdfadskhjkhddd123d</p>
  )
}


export default App; 