import React, { useEffect, useState } from 'react'

function UseEffectPractice2() {

  let [todo, setTodo] = useState(1)

  let [todoData, setTodoData] = useState({})

  let [loading, setLoading] = useState(true)

  useEffect(()=>{
    setLoading(true);
    
    fetch('https://jsonplaceholder.typicode.com/todos/'+todo)
    .then(response => response.json())
    .then(json => setTodoData(json))
    .then(()=> setLoading(false))
  }, [todo])

  return (
    
    <div className='text-white'>

    <div className='flex gap-4 text-white'>
      <button onClick={()=> setTodo(1)}>Todo 1</button>
      <button onClick={()=> setTodo(2)}>Todo 2</button>
      <button onClick={()=> setTodo(3)}>Todo 3</button>
      <button onClick={()=> setTodo(4)}>Todo 4</button>
      <button onClick={()=> setTodo(5)}>Todo 5</button>
    </div>

    {loading ? 
    "Loading..."
    : 
    <h1>{todoData.title}</h1>}

    </div>

    


  


  )
}

export default UseEffectPractice2