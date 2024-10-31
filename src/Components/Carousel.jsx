import React, {useState} from 'react'
import { FaArrowRight } from "react-icons/fa";

function Carousel() {

  const [val, setVal] = useState(0)

  return (
    <div className='w-full h-screen bg-gray-300 flex justify-center items-center'>

      <div className='relative w-60 h-52 rounded-md bg-slate-600 flex overflow-hidden'>

        <img className={`w-full h-full object-cover shrink-0 transition-transform duration-500 ease-in-out transform ${val ? '-translate-x-full' : 'translate-x-0'}`} 
        src="https://images.unsplash.com/photo-1729481351191-aab14deec4d6?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className={`w-full h-full object-cover shrink-0 transition-transform duration-500 ease-in-out transform ${val ? '-translate-x-full' : 'translate-x-0'}`} 
        src="https://images.unsplash.com/photo-1729427851584-0b7df5748883?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

        <span className={`w-10 h-5 text-gray-800 bg-gray-300 rounded-full flex justify-center items-center absolute bottom-2 left-1/2 opacity-80 -translate-x-[50%] -translate-y-[50%] ${val? "rotate-180":"rotate-0"}`} 
        onClick={()=>setVal(()=>!val)}>
        <FaArrowRight size={"0.7em"}/>
        </span>
        

      </div>

    </div>
  )
}

export default Carousel