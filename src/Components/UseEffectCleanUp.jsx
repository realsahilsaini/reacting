import React, { useEffect, useState } from 'react'

function UseEffectCleanUp() {

  const [showtimer, setShowTimer] = useState(true)

  useEffect(()=>{
   
    setInterval(()=>{
      setShowTimer(currentValue => !currentValue);
    }, 5000);

  }, [])

  return (
    <div>
      {showtimer ? <Timer /> : null} 
    </div>
  )
}


const Timer = function() {
  const [seconds, setSeconds] = useState(0);

  useEffect(()=>{
    setInterval(function(){
      console.log('Interval Trigger');
      setSeconds(prevValue => prevValue + 1)
    }, 1000)
  }, [])

  return (
    <div>
      <h1 className='text-white'>
        {seconds}
      </h1>
    </div>
  )
}

export default UseEffectCleanUp