import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { counterAtom } from '../store/atoms/counter';

const Memo = () => {



  return (
    <RecoilRoot>
      <Counter  />
    </RecoilRoot>
  )
}


function Counter(){

  const [count, setCount] = useState(0);


  useEffect(()=>{

    setInterval(()=>{
      setCount(prevVal => prevVal + 1)
    },3000)

  },[])

  //Instead we have created an atom in the store/atoms/counter.js file and imported it here

  return (
    <>
    {/* Dependent on state  */}
    <Currentcount count={count} /> 


    <div className="flex gap-4">
     <IncreaseButton />
     <DecreaseButton />
    </div>


    </>
  )
}

const Currentcount = memo(function ({count}){

  return (
    <p className='text-white text-4xl font-semibold mx-auto'>
      {count}
    </p>
  )
})

const IncreaseButton = React.memo(() => {


  console.log('IncreaseButton rendered');
  return (
    <button 
    // onClick={increment} 
    className="bg-green-500 text-white px-2 py-1 rounded">
      Increase
    </button>
  );
});


const DecreaseButton = React.memo(() => {
  // const setCount = useSetRecoilState(counterAtom);

  console.log('DecreaseButton rendered');

  return (
    <button
      // onClick={() => setCount((prevVal) => prevVal - 1)}
      className="bg-red-500 text-white px-2 py-1 rounded"
    >
      Decrease
    </button>
  );
});

// function IncreaseButton() {


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





export default Memo