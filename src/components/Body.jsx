import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function Body() {
  return (
    <div className='flex'>
      <Sidebar/>
      
      {/* outlet is used to render children in react Routing  */}
      <Outlet/>
    </div>
  )
}

export default Body
