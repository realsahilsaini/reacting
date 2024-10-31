import React, { useState } from "react";

function UseStateArray5() {
  const [val, setVal] = useState([
    { name: "John", age: 25 },
    { name: "Doe", age: 30 },
    { name: "Jane", age: 35 },
  ]);

  return (
    <div>
      <div className="flex flex-row gap-8 p-5 flex-wrap">
        {val.map((item, index) => (
          <h1
            className="bg-gray-800 text-white text-lg max-w-fit p-4"
            key={index}
          >
            {item.name} is {item.age} years old.
          </h1>
        ))}

        <button
          className="bg-blue-500 px-3 py-1 text-white rounded-lg flex-"
          onClick={()=> setVal(()=> val.map(item => item.name === "Doe"? ({name: "Doe", age: item.age+1}): item))}
        >
          Doe's Age++
        </button>
      </div>
    </div>
  );
}

export default UseStateArray5;
