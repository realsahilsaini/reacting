import React from 'react'

function FormHandlingExerciseCard({user, id, handleRemove}) {
  return (
    <div className='w-52 h-fit bg-gray-300 rounded-lg flex flex-col items-center p-4'>

      <div className='image w-10 h-10 rounded-full bg-yellow-300 overflow-hidden'>
        <img className='w-full h-full object-cover object-left' src={`${user.image}`} alt="" />
      </div>

      <h1 className='mt-1 text-xl font-semibold'>
        {user.name}  
      </h1>

      <h4 className='opacity-40 text-xs font-semibold'>
        {user.email}
      </h4>

      {/* <p className='mt-1 text-center text-xs font-semibold leading-1 tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, odio!</p> */}

      <button onClick={()=>handleRemove(id)} className='px-3 py-1 text-white mt-4 bg-red-600 text-sm rounded-md font-semibold'>
        Remove it
      </button>

    </div>
  )
}

export default FormHandlingExerciseCard