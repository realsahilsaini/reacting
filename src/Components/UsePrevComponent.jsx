import React, { useState } from 'react'
import usePrev from './UsePrev'

const UsePrevComponent = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrev(count);

  return (
    <div className='text-white w-full h-screen flex flex-col justify-center items-center'>
      <h1>
        {count}
      </h1>

      <button onClick={()=>setCount(prev => prev + 1)}>
        Increment
      </button>


      <p>Previous Value: {prevCount}</p>

    </div>
  )
}

export default UsePrevComponent