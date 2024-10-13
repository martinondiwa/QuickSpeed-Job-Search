import React, { useState } from 'react'
import { SiOpensearch } from "react-icons/si";

const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen]= useState(false);
    const handleMenuToggler = () => {
        setIsMenuOpen(!isMenuOpen)
    }
  return (
 <header>
    <nav>
    <a href="/"> <SiOpensearch />
    <span>Quick Speed Job Search</span></a>
    </nav>
 </header>
  )
}

export default Navbar
