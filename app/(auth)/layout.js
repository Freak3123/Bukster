import React from 'react'

const AuthLayout = ({ children }) => {
  return (
    <div className='flex justify-center h-screen items-center'>
      {children}
    </div>
  )
}

export default AuthLayout
