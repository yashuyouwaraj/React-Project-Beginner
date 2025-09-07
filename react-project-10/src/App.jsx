import React from 'react'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/Sidebar'
import "./style.css"

const App = () => {
  return (
    <>
      <Nav />
      <Recommended />
      <Products />
      <Sidebar />
    </>
  )
}

export default App