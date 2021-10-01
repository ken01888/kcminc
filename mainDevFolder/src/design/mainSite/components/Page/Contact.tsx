import * as React from 'react';


const Contact = () => {
    const [old, setNew] = React.useState()

    React.useEffect(() => {
        (async () => {
          const data = await fetch('http://localhost:4000')
          const newData = await data.json()
          setNew(newData)
        })()
      }, [])


    return(
        <p>Contact {old} </p>
    )
};

export default Contact; 
