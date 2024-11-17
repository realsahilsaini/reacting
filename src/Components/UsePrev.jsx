import React, { useEffect, useRef, useState } from 'react'

const UsePrev = (value) => {

  // Whenwvwe the increment happens this would be set to undefined, so we need to use useRef to store the previous value.
  // let prevVal;
  
  const ref = useRef();

  /*
  
  When you declare a variable with const, it means:
  - The reference to the object cannot be reassigned.

  - However, the properties of the object that the reference points to are still mutable.

  const obj = { value: 42 }; 
obj.value = 100; // This is allowed because the property is mutable.
obj = { newValue: 200 }; // ❌ Error! You cannot reassign the `const` variable.

 
  */


  useEffect(()=>{

    ref.current = value;

  },[value])

  return ref.current;
}

/*

THE CRUX OF THE ABOVE HOOK IS:

IT FIRST RETURN, EFFECT GETS CALLED LATER, 

(SO IT WILL ALWAYS RETURN THE PREVIOUS VALUE.)

*/


export default UsePrev