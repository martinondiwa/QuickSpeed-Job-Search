import React, { useState } from "react";
import { SiOpensearch } from "react-icons/si";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", title: "Start a Search" },
    { path: "/my-job", title: "My Jobs" },
    { path: "/salary", title: "Salary Estimate" },
    { path: "/post-job", title: "Post A Job" },
  ];
  return (
    <header>
      <nav>
        <a href="/" className="flex items-center gap-2 text-2xl text-black">
          {" "}
          <SiOpensearch />
          <span>Quick Speed Job Search</span>
        </a>
        {/** Nav items for large devices */}
        <ul className="hidden md:flex gap-12">
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-primary">
              <NavLink
                to={path}
                className={({ isActive, isTransitioning }) =>
                  [
                    isActive ? "active" : "",
                    isTransitioning ? "transitioning" : "",
                  ].join(" ")
                }
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
        {/**Sign up & Login Buttons */}
        <div className="text-base text-primary font-medium space-x-5 hidden lg:block"> </div>
      </nav>
    </header>
  );
};

export default Navbar;
