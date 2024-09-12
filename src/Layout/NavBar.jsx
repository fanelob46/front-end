import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav className=' bg-blue-800 h-20'>
            <div className='flex justify-between text-white pt-4 px-10'>
            <h1 className='text-3xl '>Full Stack Application</h1>
            <Link to='/adduser' className=' rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-white hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-black active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>
                Add User
            </Link>
            </div>
            
        </nav>
    </div>
  )
}

export default NavBar