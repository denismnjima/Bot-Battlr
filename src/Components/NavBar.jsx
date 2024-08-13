import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
      <ul className='bot-menu'>
        <Link to="/"><li>BOT COLLECTION</li></Link>
        <Link to="/army"><li>YOUR BOT ARMY <span></span></li></Link>
      </ul>
    </nav>
  )
}

export default NavBar