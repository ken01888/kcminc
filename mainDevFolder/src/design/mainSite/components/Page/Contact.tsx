import * as React from 'react';


const Contact = () => {
    const [old, setNew] = React.useState()

    React.useEffect(() => {
        (async () => {
          const data = await fetch('http://localhost:4000')
          const newData = await data.json()
          console.log(newData.first_name)
         
        })()
      }, [])


    return(
        <p>Contact  </p>
    )
};

export default Contact; 
