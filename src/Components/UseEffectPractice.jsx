import React, { useEffect, useState } from 'react';

function UseEffectPractice() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  useEffect(() => {
    console.log('useEffect called');
    const intervalId = setInterval(increment, 1000);
    console.log("control is here");
    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, []); //this effect will run on mount

  //As the dependecy array is empty, this effect will run only once on mount, that means it will not run on re-renders  of the component. 


  // useEffect(() => {
  //   console.log(count);
  // }, [count]);

  return (
    <div className='text-white text-5xl'>
      {count}
    </div>
  );
}

export default UseEffectPractice;