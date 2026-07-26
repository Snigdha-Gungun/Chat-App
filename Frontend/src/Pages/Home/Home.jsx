import React from 'react'
import Search from './Sidebar/Components/Search'
import Sidebar from './Sidebar/Sidebar'
import Chats from './Chats/Chats'
import Friends from './Sidebar/Components/Friends'

function Home() {
  return (
    <div className='flex w-full h-5/6' style={{background: 'linear-gradient(-45deg, #fffdf0 0%, #fef9e0 50%, #fdf3c4 100%)', padding: '8px', borderRadius: '12px'}}>
      <div className='w-1/4 p-4 rounded-lg shadow-xl bg-yellow-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30'>
        <Sidebar/>
      </div>
      <div className='border-yellow-800 border-2 rounded-sm m-2'></div>
      <div className='w-3/4 p-4 rounded-lg shadow-xl bg-yellow-50 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30'>
        <Chats/>
      </div>
    </div>
  )
}

export default Home