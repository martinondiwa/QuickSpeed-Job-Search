import React, { useState } from 'react'
import { SiOpensearch } from "react-icons/si";

const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen]= useState(false);
    const handleMenuToggler = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const navItems = [
        {path:"/", title:"Start a Search"},
        {path:"/my-job", title:"My Jobs"},
        {path:"/salary", title:"Salary Estimate"},
        {path:"/post-job", title:"Post A Job"},
    ]
  return (
 <header>
    <nav>
    <a href="/" className='flex items-center gap-2 text-2xl text-black'> <SiOpensearch />
    <span>Quick Speed Job Search</span></a>
    </nav>
 </header>
  )
}

export default Navbar
