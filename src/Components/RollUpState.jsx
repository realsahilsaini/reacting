import React, { useState } from 'react'

const RollUpState = () => {
  return (
    <Parent />
  )
}


function Parent(){

  const [count, setCount] = useState(0);

  const handelCountUpdate = (newCount) => {
    setCount(newCount);
  }

  return (
    <div className='bg-red-200'>
      <h1>Parent Component</h1>

      <p>
        Count from Child: {count}
      </p>


      <Child updateCount={handelCountUpdate}/>

    </div>
  )
}


function Child({updateCount}){


  const [childCount, setChildCount] = useState(0);

  const incrementCount = () => {
    const newCount = childCount + 1;
    setChildCount(newCount);

    updateCount(newCount);

  }

  return(
    <div className='bg-yellow-200'>
    <h2>Child Component</h2>
    <button onClick={incrementCount}>Increment Count</button>
    <p>Local Child Count: {childCount}</p>
  </div>
  )
}

export default RollUpState


/*
Example: Rolling up a count value from Child to Parent

We'll create a scenario where:

- The parent component manages the main count state.
- The child component has a button that, when clicked, increments the count and passes the new count value back up to the parent.


Code Example
Create the Parent Component

The parent component will:

Define a count state.
Pass a function to the child component to handle the count update.
Create the Child Component

The child component will:

Receive the function as a prop.
Call the function with the updated count value whenever the button is clicked.


Initial State (Before Any Button Clicks)
Parent Component:

The count state in the Parent component is initialized to 0.
The Parent component renders the Child component and passes the handleCountUpdate function as a prop called updateCount.
Child Component:

The childCount state in the Child component is also initialized to 0.
The Child component displays a button, and when clicked, the incrementCount function will be triggered.
Iteration 1: First Button Click in Child
Button Click in Child:

The user clicks the button in the Child component, which calls incrementCount.
Inside incrementCount:

incrementCount increments childCount by 1, making childCount now 1.
It then calls updateCount(newCount), where newCount is the updated childCount (i.e., 1).
Updating the Parent State:

The updateCount function is actually handleCountUpdate, which was passed from the Parent to the Child component.
So, handleCountUpdate(1) is called in the Parent, updating count to 1.
Render After First Click:

After this click, here’s the updated state:
Parent component’s count is 1.
Child component’s childCount is 1.
The UI shows:
In Parent: "Count from Child: 1"
In Child: "Local Child Count: 1"
Iteration 2: Second Button Click in Child
Button Click in Child:

The user clicks the button in Child again.
Inside incrementCount:

incrementCount increments childCount by 1, making childCount now 2.
It calls updateCount(newCount) with the updated childCount value, which is 2.
Updating the Parent State:

The updateCount function (i.e., handleCountUpdate in the Parent) is called with 2.
count in the Parent component is updated to 2.
Render After Second Click:

After this click, here’s the updated state:
Parent component’s count is 2.
Child component’s childCount is 2.
The UI shows:
In Parent: "Count from Child: 2"
In Child: "Local Child Count: 2"
Iteration 3: Third Button Click in Child
Button Click in Child:

The user clicks the button in Child again.
Inside incrementCount:

incrementCount increments childCount by 1, making childCount now 3.
It calls updateCount(newCount) with the updated childCount value, which is 3.
Updating the Parent State:

The updateCount function (i.e., handleCountUpdate in the Parent) is called with 3.
count in the Parent component is updated to 3.
Render After Third Click:

After this click, here’s the updated state:
Parent component’s count is 3.
Child component’s childCount is 3.
The UI shows:
In Parent: "Count from Child: 3"
In Child: "Local Child Count: 3"
Summary of State Flow
Each time the button in the Child component is clicked:

childCount is incremented in the Child.
The updateCount function (passed from Parent) is called with the new childCount value.
This updates the Parent component’s count to match childCount.
The UI reflects these updates in both Parent and Child.
So, the count state in the Parent component "rolls up" from the Child each time incrementCount is called, keeping the Parent component aware of changes in the Child.

In this setup, each button click in the Child component will indeed trigger two re-renders:

First re-render in the Child due to setChildCount being called.
Second re-render in the Parent due to setCount being called in the Parent, which also causes the Child to re-render since it is a child of the Parent.
Let’s break down why this happens and consider if there’s a way to optimize it.

Why Two Re-renders?
Re-render in the Child:

When setChildCount(newCount) is called in the Child, React re-renders the Child to reflect the updated childCount state.
This is necessary if you want the Child to display its local count, as seen in our example.
Re-render in the Parent:

When setCount(newCount) is called in the Parent, the Parent component re-renders to reflect the updated count state.
Since the Child is part of the Parent component’s render tree, React will re-render the Child as well during this process.
How to Optimize and Reduce Re-renders
To reduce re-renders, there are a few strategies we can apply, depending on our exact requirements.

1. Remove Local State from Child (if not necessary)
If the childCount state in the Child component is only used to pass information back to the Parent, it might not be needed at all.
Instead, we could directly call the updateCount function (from the Parent) without maintaining a separate childCount in Child.

// Child Component without local state
function Child({ updateCount }) {
  // No local state in the Child component
  const incrementCount = () => {
    updateCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
}


In this version:

The Child does not have a childCount state.
It simply calls updateCount with an incremented value, triggering only the Parent component's state update.
This removes the first re-render caused by setChildCount, so there’s only one re-render per click (in the Parent).

2. Use React.memo for the Child Component
If the Child needs to manage its own local state (e.g., childCount), you could consider using React.memo to prevent unnecessary re-renders when the Parent re-renders.

import React, { useState } from 'react';

// Parent Component
function Parent() {
  const [count, setCount] = useState(0);

  const handleCountUpdate = (newCount) => {
    setCount(newCount);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Count from Child: {count}</p>
      <MemoizedChild updateCount={handleCountUpdate} />
    </div>
  );
}

// Child Component
function Child({ updateCount }) {
  const [childCount, setChildCount] = useState(0);

  const incrementCount = () => {
    const newCount = childCount + 1;
    setChildCount(newCount);
    updateCount(newCount);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={incrementCount}>Increment Count</button>
      <p>Local Child Count: {childCount}</p>
    </div>
  );
}

// Use React.memo to avoid unnecessary re-renders
const MemoizedChild = React.memo(Child);


import React, { useState } from 'react';

// Parent Component
function Parent() {
  const [count, setCount] = useState(0);

  const handleCountUpdate = (newCount) => {
    setCount(newCount);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Count from Child: {count}</p>
      <MemoizedChild updateCount={handleCountUpdate} />
    </div>
  );
}

// Child Component
function Child({ updateCount }) {
  const [childCount, setChildCount] = useState(0);

  const incrementCount = () => {
    const newCount = childCount + 1;
    setChildCount(newCount);
    updateCount(newCount);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={incrementCount}>Increment Count</button>
      <p>Local Child Count: {childCount}</p>
    </div>
  );
}

// Use React.memo to avoid unnecessary re-renders
const MemoizedChild = React.memo(Child);



With React.memo:

The Child component only re-renders when its own props change.
Since updateCount doesn’t change, MemoizedChild will not re-render on every Parent update.
Only when incrementCount is called in Child will setChildCount trigger a local re-render in the Child.
This approach works well if Child has a local state that doesn’t affect the Parent but should only update when directly modified.


*/