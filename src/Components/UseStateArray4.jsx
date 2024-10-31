import React, {useState} from 'react'

function UseStateArray4() {
  const [val, setVal] = useState([1, 2, 3, 4, 5]);

  return (
    <div className="flex flex-row gap-8 p-5">
      {val.map((item, index) => {
        return (
          <h1
            className="bg-gray-800 text-white text-lg max-w-fit p-4"
            key={index}
          >
            {item}
          </h1>
        );
      })}

      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={()=> setVal([...val, val.length+1])}
      >
        Keep Adding
      </button>
    </div>
  )
}

export default UseStateArray4