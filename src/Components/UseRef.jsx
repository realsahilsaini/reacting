import React, { useRef } from 'react'

function UseRef() {
  const inputRef = useRef(null);

  // Step 2: Define the function to focus the input
  const handleFocus = () => {
    // Access the DOM node and call the focus method
    inputRef.current.focus();
  };

  return (
    <div className='flex gap-10'>
      {/* Step 3: Attach the ref to the input element */}
      <input ref={inputRef} type="text" placeholder="Click to focus" />
      <button className='bg-blue-500 text-white p-2 rounded-md' onClick={handleFocus}>Focus the input</button>
    </div>
  );
}

export default UseRef