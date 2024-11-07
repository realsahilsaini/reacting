import React, { createContext, useContext, useState } from 'react'

//Step 1: Create a context object
const BulbContext = createContext()

// Here we are creating a wrapper component that will provide the context value to the child components.
// This practice is called as Context Provider Pattern in React.
function BulbProvider({ children }){
  const [isOn, setIsOn] = useState(true);

  return <BulbContext.Provider value={{isOn, setIsOn}}>
    {children}
  </BulbContext.Provider>

}

const ContextAPIBulb = () => {

  
  // So the our context object wil soemthing like this:
  // Basically:
  // {
  //   isOn, 
  //   setIsOn
  // }
  // Technically:
  // {
  //   Provider: Component,
  //   Consumer: Component,
  //   _currentValue: {isOn: true, setIsOn: f}
  // }

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gray-800'>

      {/* We can also do this wrapper directly in the Light component to both the LightBulb and LightSwitch components */}
      {/* Step 2: Wrap the components that need the context value in the Provider component */}
      <BulbProvider>
        <Light/>
      </BulbProvider>
    </div>
  )
}

function Light(){
  return <>
    <LightBulb />
    <LightSwitch />
  </>
}


function LightBulb(){

  // step 3: Use the useContext hook to get the context value
  const {isOn} = useContext(BulbContext)
  

  return <>
    {isOn ? <img src="https://i.pinimg.com/736x/cc/7b/58/cc7b58cbcd341a19a6545d947e48329b.jpg" width="100px" alt="" />
    :
    <img src="https://i.pinimg.com/originals/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.png" width="100px" alt="" />}
    </>
}

function LightSwitch(){

  const {isOn, setIsOn} = useContext(BulbContext)

  const handelSwitch = () => {
    setIsOn(!isOn)
  }

  return <button onClick={handelSwitch} className={`${isOn? "bg-red-500" : "bg-green-500"}  p-2 rounded-md mt-10`}>
    {isOn ? "Turn Off" : "Turn On"} 
  </button>
} 



/*
Here we ar epassing the state and the setState function to the LightBulb and LightSwitch components as a prop. 
This is how we can pass the state and the setState function to the child components in React.


const ContextAPIBulb = () => {

  const [isOn, setIsOn] = useState(true)

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gray-800'>
      <Light isOn ={isOn} setIsOn={setIsOn}/>
    </div>
  )
}


function Light({isOn, setIsOn}){
  return <>
    <LightBulb isOn={isOn} setIsOn={setIsOn} />
    <LightSwitch isOn={isOn} setIsOn={setIsOn} />
  </>
}


function LightBulb({isOn, setIsOn}){
  return <>
    {isOn ? <img src="https://i.pinimg.com/736x/cc/7b/58/cc7b58cbcd341a19a6545d947e48329b.jpg" width="100px" alt="" />
    :
    <img src="https://i.pinimg.com/originals/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.png" width="100px" alt="" />}
    </>
}

function LightSwitch({isOn, setIsOn}){

  const handelSwitch = () => {
    setIsOn(!isOn)
  }

  return <button onClick={handelSwitch} className={`${isOn? "bg-red-500" : "bg-green-500"}  p-2 rounded-md mt-10`}>
    {isOn ? "Turn Off" : "Turn On"} 
  </button>
} 
*/

export default ContextAPIBulb