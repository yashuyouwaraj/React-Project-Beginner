import React, { useState } from 'react'
import "../style.css"
const Counter = () => {
    const [count,setCount]=useState(0)
  return (
    <div>
        <div>
            <h1 >{count}</h1>
        </div>
        <button onClick={()=>setCount(count+1)} className='increment'>+</button>
        <button onClick={()=>setCount(count-1)} className='increment'>-</button>
    </div>
  )
}

export default Counter