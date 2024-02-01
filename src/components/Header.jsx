import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className={headerStyles}>
      <div>
        <h1 className='text-lg font-extrabold md:tracking-widest'>QuadB Task</h1>
      </div>
      <Link to="/" className='tracking-[5px] hover:text-purple-600 cursor-pointer'>
        <h6 className='text-sm '>ALL MOVIES</h6>
      </Link>
    </header>
  )
}

//tailwind classes
const headerStyles = `w-screen py-5 bg-fuchsia-950 text-fuchsia-400 px-5 md:px-10 drop-shadow-xl flex items-center justify-between`

export default Header