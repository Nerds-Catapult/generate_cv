import React from 'react'
import { Outlet } from 'react-router-dom'


const GuestLayout = () => {
  return (
      <div>
            <Outlet />
    </div>
  )
}

export default GuestLayout
