import React from 'react'

function Song() {

  const songs = [
    {title:"Excuses", artist:"AP Dhillon, Gurinder Gill"},
    {title:"Softly", artist:"Karan Aujla"},
  ]

  const handelClickDownload = () => {
    alert("Downloading...")
  }

  return (
    <div className='w-full h-screen bg-zinc-900 flex flex-col gap-4 items-center justify-center'>

      {songs.map((song, index)=>(
        <div className='px-4 py-4 w-60 bg-gray-700 rounded-md'>
        <h3 className='text-white text-3xl font-bold'>{song.title}</h3>
        <p className='text-sm mt-2 text-gray-200'>{song.artist}</p>
        <button onClick={handelClickDownload} className='mt-5 px-2 text-sm py-1 bg-green-400 text-gray-800 rounded-md font-semibold'>Download Now</button>
      </div>
      ))}
      
    </div>
  )
}

export default Song