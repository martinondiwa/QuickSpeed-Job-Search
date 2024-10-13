import React, { useState } from 'react'
import { SiOpensearch } from "react-icons/si";
import { NavLink } from 'react-router-dom';

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
    {/** Nav items for large devices */}
    <ul>
     {
        navItems.map(({path, title}) => (
            <li key={path}>
            <NavLink></NavLink>
            </li>
        ))
     }
    </ul>
    </nav>
 </header>
  )
}

export default Navbar
