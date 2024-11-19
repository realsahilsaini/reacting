import React, { useCallback, useEffect, useRef, useState } from 'react'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { counterAtom } from '../store/atoms/counter';

const RecoilPractice = () => {



  return (
    <RecoilRoot>
      <Counter  />
    </RecoilRoot>
  )
}


function Counter(){

  // const [count, setCount] = useState(0);

  //Instead we have created an atom in the store/atoms/counter.js file and imported it here

  return (
    <>
    {/* Dependent on state  */}
    <Currentcount /> 


    <Buttons />


    {/* <div className="flex gap-4">
     <IncreaseButton />
     <DecreaseButton />
    </div> */}


    </>
  )
}

function Currentcount(){
  const count = useRecoilValue(counterAtom);
  return (
    <p className='text-white text-4xl font-semibold mx-auto'>{count}
    </p>
  )
}

// function IncreaseButton() {

//   const setCount = useSetRecoilState(counterAtom);


//   return (
//     <button
//     onClick={() => setCount(prevVal => prevVal + 1)}
//     className='bg-green-500 text-white px-2 py-1 rounded'>Increase</button>
//   )
// }

// function DecreaseButton() {

//     const setCount = useSetRecoilState(counterAtom);


//   return (
//     <button
//     onClick={() => setCount(prevVal => prevVal - 1)}
//     className='bg-red-500 text-white px-2 py-1 rounded'
//     >Decrease</button>
//   )
// }


function Buttons(){
  return (
    <div className="flex gap-4">
      <IncreaseButton />
      <DecreaseButton />
    </div>
  );
}

const IncreaseButton = React.memo(() => {
  const setCount = useSetRecoilState(counterAtom);
  const increment = useCallback(() => setCount((prev) => prev + 1), [setCount]);

  console.log('IncreaseButton rendered');
  return (
    <button onClick={increment} className="bg-green-500 text-white px-2 py-1 rounded">
      Increase
    </button>
  );
});


const DecreaseButton = React.memo(() => {
  const setCount = useSetRecoilState(counterAtom);

  console.log('DecreaseButton rendered');

  return (
    <button
      onClick={() => setCount((prevVal) => prevVal - 1)}
      className="bg-red-500 text-white px-2 py-1 rounded"
    >
      Decrease
    </button>
  );
});
export default RecoilPractice