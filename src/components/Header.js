import React from 'react'

export default function Header() {
  return (
    <header>
      <div>
        <span className='logo'>Szmat sala</span>
        <ul className='nav'>
          <li>Catalog</li>
          <li>About us</li>
          <li>Your profile</li>
          <li>Basket</li>
        </ul>
      </div>
      <div className='presentation'></div>
    </header>
  )
}
