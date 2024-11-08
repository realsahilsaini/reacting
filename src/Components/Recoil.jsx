import React, { createContext, useContext, useState } from 'react';
import { RecoilRoot, atom, useRecoilValue, useRecoilCallback } from 'recoil';

const count = atom({
  key: 'countState',
  default: 0,
});

const Recoil = () => {
  return (
    <div className='bg-gray-900 w-full h-screen flex justify-center items-center text-white'>
      <Parent />
    </div>
  );
};

function Parent() {
  return (
    <RecoilRoot>
      <div className='flex flex-col'>
        <Value />
        <div className='flex flex-row'>
          <Increment />
          <Decrement />
        </div>
      </div>
    </RecoilRoot>
  );
}

function Increment() {
  // `useRecoilCallback` prevents re-renders by creating a stable callback that doesn't depend on component re-renders
  const increment = useRecoilCallback(({ set }) => () => {
    set(count, (prev) => prev + 1);
  }, []);

  return (
    <button className='bg-blue-500 p-2 m-2' onClick={increment}>
      Increment
    </button>
  );
}

function Decrement() {
  const decrement = useRecoilCallback(({ set }) => () => {
    set(count, (prev) => prev - 1);
  }, []);

  return (
    <button className='bg-red-500 p-2 m-2' onClick={decrement}>
      Decrement
    </button>
  );
}

function Value() {
  const countValue = useRecoilValue(count);

  return (
    <h1 className='text-center text-4xl mb-2'>
      {countValue}
    </h1>
  );
}

export default Recoil;



/*
This re-renders the buttons as well:


const CountContext = createContext();

function CountProvider({ children }){
  const [count, setCount] = useState(0);

  return(
    <CountContext.Provider value={{count, setCount}}>
      {children}
    </CountContext.Provider>
  )
}

const Recoil = () => {
  return (
    <div className='bg-gray-900 w-full h-screen flex justify-center items-center text-white'>
      <Parent/>
    </div>
  )
}

function Parent() {
  return (
    <CountProvider>

    <div className='flex flex-col'>
    <Value/>

    <div className='flex flex-row'>
    <Increment/>
    <Decrement/>
    </div>

    </div>

    </CountProvider>
    
  )
}


function Increment() {

  const {setCount} = useContext(CountContext);

  return (
      <button className='bg-blue-500 p-2 m-2' 
      onClick={()=> setCount(prev => prev +1)}>Increment</button>
  )
}

function Decrement() {

  const {setCount} = useContext(CountContext);

  return (

      <button className='bg-red-500 p-2 m-2' 
      onClick={()=> setCount(prev => prev - 1)}>Decrement</button>

  )
}


function Value() {

  const {count} = useContext(CountContext)

  return (

      <h1 className='text-center text-4xl mb-2'>
        {count}
      </h1>

  )
}


*/


/*
Basic Idea of Recoil and React Re-renders
In Recoil, components re-render whenever they "subscribe" to an atom (in this case, count) and that atom changes. Components "subscribe" to an atom when they use:

useRecoilValue (reads the atom's value, triggers re-render when it changes)

useSetRecoilState (gets a function to update the atom)

With useSetRecoilState, the component does not actually read the value of the atom but gets a function to modify it. However, if the component using useSetRecoilState is recreated, it will re-render even though it doesn’t directly use the atom’s value.

Two Scenarios: Why the Structure Matters
Let’s look at two different setups for RecoilRoot, and then we’ll simulate some button clicks to see what happens.

1. Scenario 1: RecoilRoot in a Separate Component
In this setup, we have a separate Recoil component that wraps Parent inside RecoilRoot:

// Separate Recoil Component
const Recoil = () => (
  <RecoilRoot>
    <Parent />
  </RecoilRoot>
);

const App = () => (
  <div>
    <Recoil />
  </div>
);


What’s happening here: RecoilRoot is inside the Recoil component. Every time React checks if Recoil should re-render, it will recreate the RecoilRoot. This recreation of RecoilRoot means that all components using count (like Increase, Decrease, and Value) are re-rendered every time count changes.


-----------------------

2. Scenario 2: RecoilRoot Directly in App
In this setup, we put RecoilRoot directly in the App component:

const App = () => (
  <RecoilRoot>
    <Parent />
  </RecoilRoot>
);


What’s happening here: With RecoilRoot directly in App, React only re-renders the components directly subscribed to count. Since only Value actually reads count, React will avoid re-rendering Increase and Decrease whenever count changes. Increase and Decrease only get the setter for count, so they don’t subscribe to its updates.


-----------------------

Example: Button Press Simulation in Each Scenario
Let’s simulate what happens when we press "Increase" and "Decrease" in each setup:

Initial State: count is 0.
Press "Increase" (count becomes 1).
Press "Decrease" (count becomes 0 again).
Scenario 1: RecoilRoot in a Separate Recoil Component
Initial Render:
All three components (Increase, Decrease, and Value) render because they’re within RecoilRoot created by Recoil.
Press "Increase":
count changes from 0 to 1.
Because RecoilRoot is recreated, Recoil re-renders all components (Increase, Decrease, and Value), even though only Value displays the count.
Press "Decrease":
count changes back from 1 to 0.
Again, RecoilRoot recreates everything inside Recoil, triggering re-renders for Increase, Decrease, and Value.
So in Scenario 1, each button click causes all components to re-render because RecoilRoot is recreated each time count changes.

Scenario 2: RecoilRoot Directly in App
Initial Render:
App renders Parent, which renders Increase, Decrease, and Value.
Press "Increase":
count changes from 0 to 1.
Only Value re-renders because it’s the only component that reads count.
Increase and Decrease do not re-render because they only have access to the setCount function and don’t directly read count.
Press "Decrease":
count changes back from 1 to 0.
Again, only Value re-renders, and Increase and Decrease remain unchanged.
In Scenario 2, only Value re-renders on each button press, which is optimal because Increase and Decrease only need the setCount function, not the actual value of count.

Why This Happens
RecoilRoot’s Recreation: Placing RecoilRoot in a separate component (Scenario 1) causes RecoilRoot to be recreated each time count changes, which leads to a full re-render of everything within it.
Direct Placement in App: In Scenario 2, RecoilRoot remains stable as it’s directly within App, which prevents unnecessary re-renders for components that don’t read count.

*/