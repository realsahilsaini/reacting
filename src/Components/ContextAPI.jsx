import React, { useState, useContext, createContext } from 'react'

const UserContext = createContext();

const ContextAPI = () => {


    const [user, setUser] = useState([{
    name: 'Sahil',
    email: 'jhon@gmail.com'
    }, {
    name: 'Saini',
    email: 'jane@gmail.com'
    }])



  return (
    <div>
      {/* {user.map((user, index)=>{
        return <h2 key={index}>{user.name}</h2>
      })}  */}

        {/* {JSON.stringify(user)} */}

        <UserContext.Provider value={user}>
          <User/>
          <UserDetails/>
        </UserContext.Provider>

      {/* <Home/> */}
    </div>
  )
}

function Home(){
  return (
    <div>
      Home Component
    </div>
  )
}

function User(){

  const user = useContext(UserContext);

  return (
    <>
      <h2>User Component:</h2>
      {
        JSON.stringify(user)
      }
    </>
  )
}


function UserDetails(){

  const user = useContext(UserContext);

  return (
    <div>
      <h2>User Details</h2>
      {
        JSON.stringify(user)
      }
    </div>
  )
}



export default ContextAPI