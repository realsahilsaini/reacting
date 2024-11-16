import React from 'react'
import useFetch from './useFetch';

const UseFetchComponent = () => {

  const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/users');

  if(loading){
    return <div className='text-white bg-green-500 p-1 w-fit mx-auto mt-8'>Loading...</div>
  }


  if(error){
    return <div className='text-white bg-red-500 p-1 w-fit mx-auto mt-8'>Error: {error.message}</div>
  }



  return (
    <div>
      <h1>Fetched Users:</h1>

      <ul className='list-disc'>
        {data.map(user => (
          <li className='text-white' key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default UseFetchComponent