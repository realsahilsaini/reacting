import React, {useState} from 'react'

function Props({text, color}) {
  return (
    <button className={`px-3 py-1 ${color} text-zinc-100 text-xs rounded-md`}>
        {text}
    </button>
  )
}

export default Props


/*
Props use hote hai appke components ko reusable bana ne ke liye, consider you have a button and you want to use that button in multiple places in your app, so you can create a button component and instead of hard coding the data in that button component you can pass the props from the parent to that button component and use that button component in multiple places in your app.

*/