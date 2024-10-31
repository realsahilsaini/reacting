import React from 'react'
import FormHandlingExerciseCard from './FormHandlingExerciseCard'

function FormHandlingExerciseCards({users, handleRemove}) {  

  return (
    <div className='w-[90%] max-h-96 min-h-96 flex justify-center gap-4 flex-wrap p-4 overflow-auto'>

      <>
      {
        users.map((user, index)=> {
          return <FormHandlingExerciseCard handleRemove={handleRemove} id={index} user={user} />
        })
      }
      </>

   

    </div>
  )
}

export default FormHandlingExerciseCards