import React, { createContext, useState } from 'react'

export const UserContext = createContext();

const context = (props) => {

  // console.log(props);
  

    const [users, setUser] = useState([{
    id: 1,
    name: 'Sahil Saini',
    email: 'ss@gmail.com',
    },
    {
      id: 2,
    name: 'Aaradhya Saini',
    email: 'as@gmail.com'
    },{
      id: 3,
    name: 'Dinesh Saini',
    email: 'ds@gmail.com'
    }])
  
  return (
    <UserContext.Provider value={{users, setUser}}>
      {props.children}
    </UserContext.Provider>
  )
}

export default context