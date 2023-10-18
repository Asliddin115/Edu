import React from 'react'
import Navbar from './Navbar'
import SupMenu from './SupMenu'
import Main from './Main'

export default function Layout() {
  return (
    <div  className='wrapper'>
     <Navbar/>
     {/* <SupMenu/> */}
     <Main/>
    </div>
  )
}
