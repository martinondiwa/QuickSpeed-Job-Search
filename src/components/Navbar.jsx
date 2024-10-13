import React, { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen]= useState(false);
    const handleMenuToggler = () => {
        setIsMenuOpen(!isMenuOpen)
    }
  return (
 <header>
    <nav>
    <a href="/">Quick Speed Job Search</a>
    </nav>
 </header>
  )
}

export default Navbar
