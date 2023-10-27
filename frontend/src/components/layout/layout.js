import React from 'react'
import Header from '../header/header'

function Layout({children}) {
  return (
     <>
    <div  className=" text-black">
     <Header>

     </Header>
      {children}
     
    </div>
  </>
  )
}

export default Layout