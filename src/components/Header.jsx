import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='w-screen py-5 bg-fuchsia-950 text-fuchsia-400 px-10 drop-shadow-xl flex items-center justify-between'>
      <div>
        <h1 className='text-lg font-extrabold tracking-widest'>QuadB Task</h1>
      </div>
      <Link to="/" className='tracking-[5px] hover:text-purple-600 cursor-pointer'>
        <h6>ALL MOVIES</h6>
      </Link>
    </header>
  )
}

export default Header