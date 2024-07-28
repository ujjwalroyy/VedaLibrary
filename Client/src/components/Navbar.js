import React from 'react'
import logo from '../components/assets/nav.png'
import './Nav.css'
function Navbar() {
  return (
    <div className='Gita_Nav w-full flex justify-around bg-orange-500 '>
      <img className='rounded-md' src={logo} alt="" width={75} />
      <h1 className='mt-7 text-3xl text-yellow-400' >श्रीमद्भगवद्‌गीता</h1>
      <img src={logo} alt="" width={75} />
    </div>
  )
}

export default Navbar