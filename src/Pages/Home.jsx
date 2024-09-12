import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {

const [users,SetUsers] = useState([])

useEffect(() => {
  
})



  return (
    <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table
          class="min-w-full text-center text-sm font-light text-surface dark:text-white">
          <thead
            class="border-b border-neutral-200 bg-neutral-50 font-medium dark:border-white/10 dark:text-neutral-800">
            <tr>
              <th scope="col" class=" px-6 py-4">#</th>
              <th scope="col" class=" px-6 py-4">First</th>
              <th scope="col" class=" px-6 py-4">Last</th>
              <th scope="col" class=" px-6 py-4">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-neutral-200 dark:border-white/10">
              <td class="whitespace-nowrap  px-6 py-4 font-medium">1</td>
              <td class="whitespace-nowrap  px-6 py-4">Mark</td>
              <td class="whitespace-nowrap  px-6 py-4">Otto</td>
              <td class="whitespace-nowrap  px-6 py-4">@mdo</td>
            </tr>
            <tr class="border-b border-neutral-200 dark:border-white/10">
              <td class="whitespace-nowrap  px-6 py-4 font-medium">2</td>
              <td class="whitespace-nowrap  px-6 py-4 ">Jacob</td>
              <td class="whitespace-nowrap  px-6 py-4">Thornton</td>
              <td class="whitespace-nowrap  px-6 py-4">@fat</td>
            </tr>
            <tr class="border-b border-neutral-200 dark:border-white/10">
              <td class="whitespace-nowrap  px-6 py-4 font-medium">3</td>
              <td colspan="2" class="whitespace-nowrap  px-6 py-4">
                Larry the Bird
              </td>
              <td class="whitespace-nowrap  px-6 py-4">@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  )
}

export default Home