import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {

const [users,SetUsers] = useState([])

useEffect(() => {
  loadUsers();
}, [])

const loadUsers =  async() =>{
  const result = await axios.get("http://localhost:8080/users")
  console.log(result.data);
  SetUsers(result.data);
}

  return (
    <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table
          className="min-w-full text-center text-sm font-light text-surface dark:text-white">
          <thead
            className="border-b border-neutral-200 bg-neutral-50 font-medium dark:border-white/10 dark:text-neutral-800">
            <tr>
              <th scope="col" className=" px-6 py-4">#</th>
              <th scope="col" className=" px-6 py-4">Name</th>
              <th scope="col" className=" px-6 py-4">UserName</th>
              <th scope="col" className=" px-6 py-4">Email</th>
              <th scope="col" className=" px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody>

            {
              users.map((user,index) =>(
                <tr className="border-b border-neutral-200 dark:border-white/10" >
                <td className="whitespace-nowrap  px-6 py-4 font-medium" key={index}>{index+1}</td>
                <td className="whitespace-nowrap  px-6 py-4">{user.name}</td>
                <td className="whitespace-nowrap  px-6 py-4">{user.username}</td>
                <td className="whitespace-nowrap  px-6 py-4">{user.email}</td>
                <td className='space-x-2'>
                  <button className='rounded-md bg-blue-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2'>View</button>
                  <button className='rounded-md bg-blue-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2'>Edit</button>
                  <button className='rounded-md bg-red-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button'>Delete</button>
                </td>
              </tr>
              ))
            }
           
            
           
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  )
}

export default Home