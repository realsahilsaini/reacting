import React, { useContext } from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes, useParams } from 'react-router-dom'
import { UserContext } from '../context/context'

const ContextAPI2 = () => {
  return (
    <div>
      <nav className='p-2 flex gap-8 justify-center text-2xl'>
      <Link to='/'>Home</Link>
      <Link to='/user'>User</Link>
      <Link to='/about'>About</Link>
    </nav>

    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/user' element={<User />} />
      <Route path='/user/:name' element={<UserDetails />}/>

      <Route path='/about' element={<About />} />
    </Routes>
    </div>
  )
}

function Home(){
  return (
    <div className='text-2xl'>
      Home Component
    </div>
  )
}

function User(){

  const context = useContext(UserContext);
  // console.log(context);

  return (
    <div className='text-2xl'>
      <h2>User Component</h2>

      <div className='flex flex-col w-fit gap-8'>
        {context.users.map((user, index) => (
          <Link className='bg-red-200 p-2' to={`/user/${(user.name).toLowerCase().split(' ').join('-')}`} key={index}>
            {user.name}
          </Link>
        ))}

      </div>

      {/* <Outlet/> */}
    </div>
  )
}


function UserDetails(){

  const {users} = useContext(UserContext);
  // console.log(users);

  const params = useParams();
  // console.log(params);
  

  return (
    <div className='text-2xl'>
      <h2>UserDetails Component</h2>

      {
        users.map((user, index)=>{

          if((user.name).toLowerCase().split(' ').join('-') === params.name){
            return (
              <div key={index}>
                <h2>{user.name}</h2>
                <h3>{user.email}</h3>
              </div>
            )
          }

        })
      }
    </div>
  )
}

function About(){
  return (
    <div className='text-2xl'>
      About Component
    </div>
  )
}

export default ContextAPI2;







/*
Main file code:

import { BrowserRouter } from "react-router-dom";
import Context from "./context/context";

<Context>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context>


*/