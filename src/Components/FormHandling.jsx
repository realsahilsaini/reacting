import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

function formHandling() {

  const { register, handleSubmit } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <form className='flex flex-col gap-2' action="" onSubmit={handleSubmit(onSubmit)}>

      <input defaultValue="test1" {...register("name")} placeholder='Name' type="text" className='p-1 rounded-md'/>


      <input defaultValue="test2" {...register("age")}
       placeholder='Age' type="text" className='p-1 rounded-md'/>

      <input
       className='text-white bg-blue-500 p-1 rounded-md' type="submit"/>
    </form>
  )
}

export default formHandling;


/*
Form Handling:

1. useRef:

In this method we select all the input fields using the useRef hook and then we can access the value of the input fields using the current property of the useRef hook.

We can also use the useRef hook to access the DOM elements directly.

  const name = useRef(null);
  const age = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name.current.value, age.current.value);
  }

    <form action="" onSubmit={handleSubmit} >
      <input ref={name} placeholder='Name' type="text"/>
      <input ref={age} placeholder='Age' type="text"/>
      <input type="submit"/>
    </form>

We use the ref attribute to attach the ref object to the input field after the page is rendered. If we try to access the value of the input field directly, we will get an error because the value of the input field is not available at the time of rendering, resulting in an null value.

-----------------------------------------------------------------------------------------

2. Controlled Components

In this method we use the useState hook to store the value of the input fields and then we can access the value of the input fields using the state variable.


 const [val, setVal] = useState({
    name: '',
    age: ''
  })

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(val);
  }

  return (
    <form className='flex flex-col gap-2' action="" onSubmit={handelSubmit}>
      <input onChange={(e)=> setVal({...val, name:e.target.value})} placeholder='Name' type="text" className='p-1 rounded-md'/>

      <input onChange={(e)=> setVal({...val, age:e.target.value})} placeholder='Age' type="text" className='p-1 rounded-md'/>

      <input
       className='text-white bg-blue-500 p-1 rounded-md' type="submit"/>
    </form>
  )

-----------------------------------------------------------------------------------------

3. React Hook From


  const { register, handleSubmit } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>

      <input {...register("name")} placeholder='Name' type="text"/>

      <input {...register("age")} placeholder='Age' type="text"/>

      <input type="submit"/>
      
    </form>
  )


*/