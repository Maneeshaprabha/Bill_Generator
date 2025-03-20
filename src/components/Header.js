import React from 'react'


import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header className="flex justify-between items-center p-5 shadow-md">
      <h1 className="text-2xl font-bold">BillEase</h1>
      <div>
        <Link to="/login">
        <button className="mr-4 px-4 py-2">login</button> </Link>
        <Link to ="/register">  <button className="bg-black text-white px-4 py-2 rounded">Register</button></Link>
      
      </div>
    </header>
    </div>
  )
}

export default Header
