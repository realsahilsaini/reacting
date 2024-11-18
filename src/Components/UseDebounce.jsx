import React, { useEffect, useRef, useState } from 'react'

const UseDebounce = (value, delay=1000) => {

  // const refData = useRef();
  const [debouncedData, setDebouncedData] = useState('');

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

export default UseDebounce;


/*
Using useRef instead of useState in your custom hook works for storing values without causing re-renders, but it may not behave as expected in this particular use case. Let me explain the differences and why this approach might not work as intended.

Key Differences Between useRef and useState
useRef:

Holds a mutable value that does not trigger re-renders when updated.
The .current property can be updated directly, and changes are persisted across renders.
Useful for storing values or references that don’t need to update the component's UI.
useState:

Manages state and triggers a re-render when the state changes.
Used for values that affect the UI or require the component to re-render when updated.


Why useRef Doesn't Work Well Here

You're using debouncedData.current to store the debounced value, but React doesn't know when debouncedData.current changes because useRef changes don't trigger re-renders.
When the component using the hook reads the value (debouncedData.current), it will always get the value from the previous render because React hasn't re-rendered with the updated value.
For example:

When you type in the input field, debouncedData.current is updated after the debounce delay, but the consuming component doesn't re-render to reflect the new value.
This makes useRef unsuitable for scenarios where the value needs to be actively read and updated in the UI.

*/