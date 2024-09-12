import React from 'react'

const NavBar = () => {
  return (
    <div>
        <nav className=' bg-blue-800 h-20'>
            <div className='flex justify-between text-white pt-4 px-10'>
            <h1 className='text-3xl '>Full Stack Application</h1>
            <button className='border-2 border-white'>
                Add User
            </button>
            </div>
            
        </nav>
    </div>
  )
}

export default NavBar