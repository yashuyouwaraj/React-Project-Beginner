import React from 'react'
import { FaSearch } from "react-icons/fa";
import "../style.css"
import { useState } from 'react'

const HiddenSearchBar = () => {
    const [showInput,setShowInput]=useState(false)
    const [bgcolor, setBgColor] = useState("white")
    const handleClick = (e)=>{
      setBgColor("#1a1a1a")
      if(e.target.className ==="container"){
        setShowInput(false)
        setBgColor("#fff")
      }
    }
  return (
    <section className='container' style={{background: bgcolor}} onClick={handleClick} >
        {showInput ? (
            <input type="text" placeholder='Search...'/>
        ) : (
            <FaSearch onClick={()=>setShowInput(true)} />
        )}
    </section>
  )
}

export default HiddenSearchBar