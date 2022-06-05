import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
  return (
    <header className='header'>
      
      <div className='logo'>
        <span>D</span>
        <h3>iego Romero</h3>
      </div>
      <nav className='nav'>
        <ul>

          <li> <NavLink to="/Home" className={({isActive}) => isActive ? "active": ""}>Home</NavLink></li>
          <li><NavLink to="/Service">Service</NavLink></li>
          <li><NavLink to="/Portfolio">Portfolio</NavLink></li>
          <li> <NavLink to="/CV">CV</NavLink></li>
          <li><NavLink to="/Contacto">Contacto</NavLink></li>

        </ul>
      </nav>
    </header>
  )
}
