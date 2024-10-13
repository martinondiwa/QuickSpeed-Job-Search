import React, { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen]= useState(false);
    const handleMenuToggler = () => {
        setIsMenuOpen(!isMenuOpen)
    }
  return (
 <header>
    <nav></nav>
 </header>
  )
}

export default Navbar
