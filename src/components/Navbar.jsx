import { useState } from 'react'
import logo from '../assets/TFLogo.png'
function Navbar() {

  return (
    <div className="max-w-screen">
      <div className="flex justify-between">
        <img src={logo} width={300}/>
      </div>
    </div>
  )
}

export default Navbar
