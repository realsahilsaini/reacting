import React, { useState } from "react";

function UseState3() {
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
        onClick={() =>
          setVal(
            //The below code will return a new array with the last element removed
            () => {
            return val.filter((item, index) => index !== val.length - 1);
          }
        )
        }
      >
        Pop Last Element
      </button>
    </div>
  );
}

export default UseState3;
