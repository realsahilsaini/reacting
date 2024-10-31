import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function RoutingPracticeUsers() {

  const {name} = useParams();
  const navigate = useNavigate();



const goBack = () => {    
    // window.history.back();

    // OR 

    navigate(-1);
  }
  

  return (
    <div className=' w-1/2 mx-auto mt-10'>
      {/* <h1 className='text-red-400 text-center text-5xl mb-2'>
        User Detail
      </h1> */}


      <h2 className='text-red-400 text-center text-5xl mb-2'>    {name.toLocaleUpperCase()}
      </h2>

      <button onClick={goBack} className='text-3xl bg-zinc-600 p-2 text-white rounded-md'>
        Go back
      </button>
      

      </div>
  )
}

export default RoutingPracticeUsers