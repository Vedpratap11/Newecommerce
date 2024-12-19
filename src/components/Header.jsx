import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ecomcontext } from '../App'

function Header() {
  const {cart}=useContext(ecomcontext)
  return (
    <header>
    <div className='head'>
      Ecommerce
    </div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/About">About</Link></li>
      <li><Link to="/Contact">Contact</Link></li>
      <li><Link to="/Cart">Cart({cart.length})</Link></li>
    </ul>
    </header>
  )
}

export default Header
