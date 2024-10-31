import React, { useState } from "react";

function UseState() {
  const [val, setVal] = useState({name: "John", isBanned: false});

  return (
    <div className="p-5 w-full h-screen bg-gray-400 flex justify-center items-center">

    <div className=" bg-cyan-950 px-12 py-8 flex flex-row gap-8 items-center justify-center rounded-lg">
    
    <div className="rounded-full overflow-hidden object-cover">
      <img className="w-36" src="https://avatar.iran.liara.run/public/48" alt="" />
    </div>

    
    <h1 className="text-5xl text-white font-bold">
        {val.name}
    </h1>

      <div className="flex flex-col items-center justify-center">

      <div className="text-white text-center text-sm mt-4 w-24 bg-gray-900 p-2 rounded-md">
      <p className="">
        Ban Status: 
      </p>
      
        <span className={`${val.isBanned? "text-red-500" : "text-green-400"}`}>
        {val.isBanned? "Banned" : "Not Banned"}
        </span>
      </div>

      <button className={`${val.isBanned? "bg-green-800" : "bg-red-800"} w-36 text-2xl text-white font-bold py-2 px-4 rounded-md mt-4`}
        onClick={() => {
          setVal({...val, isBanned: !val.isBanned});
        }}>
        {val.isBanned? "Unban" : "Ban"}
      </button>

      </div>

      

    </div>

    </div>
  );
}

export default UseState;
