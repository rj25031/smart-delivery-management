import React from 'react'
import Navbar from './Navbar'

function Layout(props) {
  return (
    <div>
        <Navbar></Navbar>
        <div className='child'>{props.children}</div>
    </div>
  )
}

export default Layout