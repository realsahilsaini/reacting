import React, { useEffect, useState } from 'react'
import useDebounce from './UseDebounce'

const UseDebounceComponent = () => {

  const [input, setInput] = useState('');
  const [fetchData, setFetchData] = useState(null);

  const debouncedInput = useDebounce(input, 600);

  
  
  useEffect(()=>{
    console.log("Printed after 600ms of inactivity Component: ", debouncedInput);

    console.log(typeof debouncedInput);
    

    if (debouncedInput) {
      const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        setFetchData(data);
        console.log('Fetched data:', data);
      };

      fetchData();
    }

  }, [debouncedInput])

  

  return (
    <input name='data'
    value={input}
    onChange={(e)=> setInput(e.target.value)} type="text" className='m-4' />
  )
}

export default UseDebounceComponent