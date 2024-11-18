import React from 'react'
import useIsOnline from './UseIsOnline'

const UseIsOnlineComponent = () => {

  const isOnline = useIsOnline();

  return (
    <div className='text-white font-bold m-4'>
      <h1>
        {isOnline ? 'You are online! 🌐' : 'You are offline! 🚫'}

        {!isOnline && <p>Some features may not be available until you reconnect.</p>}
      </h1>
    </div>
  )
}

export default UseIsOnlineComponent