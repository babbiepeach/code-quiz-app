import React from 'react'
import PrivateRoutes from './Router/PrivateRoutes'

export default function App() {
  return (
    <div className='bg-custom-pattern bg-cover bg-center bg-no-repeat w-screen h-screen font-rubik'>
      <PrivateRoutes />
    </div>
  )
}