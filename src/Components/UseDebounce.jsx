import React, { useEffect, useRef, useState } from 'react'

const UseDebounce = (value, delay=1000) => {

  // const refData = useRef();
  const [debouncedData, setDebouncedData] = useState(value);

  useEffect(()=>{

    const intervalId = setTimeout(async ()=>{

      setDebouncedData(value);



      // const data = await fetch('https://jsonplaceholder.typicode.com/posts/1')
      

      // refData.current = data;
      // console.log("Printed after 1sec of inactivity: ", refData.current);
      
    }, delay);

    return ()=>clearTimeout(intervalId);
  },[value, delay])



  return debouncedData;
}

export default UseDebounce