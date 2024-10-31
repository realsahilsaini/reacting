import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function RoutingAbout() {
  return (
    <div className='bg-zinc-200'>
      <h1 className='text-5xl'>About</h1>
      <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos praesentium numquam molestias totam. Unde, eveniet officiis cum perferendis recusandae natus quis pariatur dolores asperiores aperiam voluptatum eum quisquam laboriosam, nostrum aspernatur alias at. Rem voluptatibus debitis molestiae vitae accusantium libero nemo ipsa sunt perspiciatis et laborum, rerum excepturi, nesciunt maxime!.</p>

      <div className=' w-1/2 mx-auto mt-10'>
      <h1 className='text-gray-600 text-center text-5xl mb-2'>
        Founding Team
      </h1>

      <div className='flex w-1/2 flex-col mt-3'>
        <Link className='p-3 bg-red-200 text-2xl mb-3 hover:bg-red-400'
        to="/about/sahil"
        ele
        >
        Sahil
        </Link>
        <Link className='p-3 bg-red-200 text-2xl mb-3 hover:bg-red-400'
        to="/about/aaradhya">
        Aaradhya
        </Link>
        <Link className='p-3 bg-red-200 text-2xl mb-3 hover:bg-red-400'
        to="/about/jhon">
        Jhon
        </Link>
      </div>

      </div>

<br />

      <Outlet />

    </div>
  )
}

export default RoutingAbout