import * as React from 'react';





    const Home:React.FC = ()=>{
    const [old,newOld] = React.useState([])

       React.useEffect(() =>{
            (async () =>{
                let newData = await fetch('http://localhost:4000/client_suite')
                let reply = await newData.json();
                newOld(reply)
            })()
       },[])
       old.map((i)=>{
           console.log(i.first_name)
       })
        
        return (
           <React.Fragment>
               {old.map((i)=>(
                   
                   <p>{i.first_name}</p>
               ))}
           </React.Fragment>
        )
    };

 export default Home;




