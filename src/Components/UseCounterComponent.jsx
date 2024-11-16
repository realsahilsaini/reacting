import React from 'react'
import useCounter from './UseCounter'

const UseCounterComponent = () => {

  const {count, increment, decrement, reset} = useCounter(10);

  return (
    <div className='text-white'>
      <p>Count: {count}</p>

      <div className='flex gap-4'>
      <button className='bg-green-500 p-1 rounded' onClick={increment}>Increase</button>
      <button className='bg-orange-500 p-1 rounded' onClick={decrement}>Decrease</button>
      <button className='bg-red-500 p-1 rounded' onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default UseCounterComponent