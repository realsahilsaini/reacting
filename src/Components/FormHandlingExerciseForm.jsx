import React from 'react'
import { useForm } from 'react-hook-form'

function FormHandlingExerciseForm({handelFormSubmit}) {

  const { register, handleSubmit, reset} = useForm();

  const onSubmit = (data) => {
    handelFormSubmit(data)
    reset()
  }

  return (
    <div className='mt-10 text-white'>
      
      <form className='flex flex-row gap-2' action="" 
      onSubmit={handleSubmit(onSubmit)}>

        <input {...register('name')} className='text-gray-700 rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='name' />

        <input {...register('email')} className='text-gray-700 rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='email' />

        <input {...register('image')} className='text-gray-700 rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='Image url' />

        <input className='px-2 py-1 rounded-md bg-blue-500 text-gray-700 font-semibold' type="submit" value="Submit" />
      </form>

    </div>
  )
}

export default FormHandlingExerciseForm



/*

  const [users, setUsers] = useState([
    { name: "Default User 1", email: "sds@sds.com", image: "https://avatar.iran.liara.run/public/boy"},
    { name: "Default User 2", email: "ads@ads.com", image: "https://avatar.iran.liara.run/public/boy"},
    { name: "Default User 3", email: "ads@ads.com", image: "https://avatar.iran.liara.run/public/boy"}
  ]);


  const handelFormSubmit = (data) => {
    setUsers([...users, data])
  }

  //Jaha State hoga wahi funtinalities hongi like add, remove, update etc.
  const handleRemove = (id) => {
    setUsers(users.filter((user, index) => index !== id))
  }


  return (

      <>  

        <FormHandlingExerciseCards handleRemove={handleRemove}  users={users} />
        <FormHandlingExerciseForm handelFormSubmit={handelFormSubmit}/>

      </>

    </div>
  );

*/