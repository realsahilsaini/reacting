import React from 'react'

function ChildrenPractice({children}) {
  return (
    <div className='bg-gray-900 rounded-md text-white w-fit p-8'>
      {children}
    </div>
  )
}

/*
APP CODE:

    <div className="flex gap-8 p-4">
    <ChildrenPractice>
      <div className="bg-red-500">
        <h1 className='text-3xl'>Hello World</h1>
        <p className='text-lg'>This is a paragraph</p>
      </div>
    </ChildrenPractice>

    <ChildrenPractice>
      <div className="bg-blue-500">
        <h1 className='text-3xl'>What do you want to post?</h1>
        <input className="mt-2 rounded-md w-full" type="text" />
      </div>
    </ChildrenPractice>
    </div>
*/

export default ChildrenPractice