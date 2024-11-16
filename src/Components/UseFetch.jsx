import { useEffect, useState } from 'react'

const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      }catch(error){
        // console.log('Error:', error);
        setError(error);
      }finally{
        setLoading(false);
      }
    }



    fetchData();
  }, [url])


  return {data, loading, error}
}

export default useFetch