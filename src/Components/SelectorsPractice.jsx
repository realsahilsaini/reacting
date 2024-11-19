import React from 'react'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { counterAtom, evenSelector } from '../store/atoms/counter';

const SelectorsPractice = () => {
  return (
    <RecoilRoot>
      <Buttons />
      
      <div className='flex gap-4 justify-start items-center'>
      <Counter />
      <IsEven />
      </div>
    </RecoilRoot>
  )
}


function Counter(){

  const count = useRecoilValue(counterAtom);

  return (
    <p className='text-white text-4xl font-semibold'>{count}
    </p>
  )


}

function Buttons(){

  return (
    <div className="flex gap-4">
      <IncreaseButton />
      <DecreaseButton />
    </div>
  );
}

function IncreaseButton() {
  const setCount = useSetRecoilState(counterAtom);

  return (
    <button
    onClick={() => setCount(prevVal => prevVal + 1)}
    className='bg-green-500 text-white px-2 py-1 rounded'>Increase</button>
  )
}

function DecreaseButton() {
    const setCount = useSetRecoilState(counterAtom);

  return (
    <button
    onClick={() => setCount(prevVal => prevVal - 1)}
    className='bg-red-500 text-white px-2 py-1 rounded'
    >Decrease</button>
  )
}

function IsEven(){
  const isEven = useRecoilValue(evenSelector);

  return (

    <>
    {isEven ? <p className='text-white text-4xl font-semibold '>Even</p> : <p className='text-white text-4xl font-semibold'>Odd</p>}
    </>

  )
}

export default SelectorsPractice