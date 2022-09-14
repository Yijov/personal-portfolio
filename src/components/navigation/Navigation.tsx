import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [open, setOpen] = useState("");
  const currentRoute = useLocation().pathname.replace("/", "")|| "Home";

  function toggleMenu() {
    if (window.innerWidth < 768) {
      //only on not mobile devides
      setShowMenu(!showMenu);
      handleOpen();
    }
  }

  const handleOpen = () => {
    if (!showMenu) {
      setOpen("open");
    } else {
      setOpen("");
    }
  };

  return (
    <header>
      
      <div className={`menu-btn`} onClick={toggleMenu}>  
      <span className={`menu-btn__burger ${open}`}></span>
      </div>
      <h2 className={`route-name ${open}`}> {currentRoute.toLocaleUpperCase()}</h2>

      <nav className={`nav ${open}`}>
        <ul className={`menu-nav ${open}`}>
          <li className={`menu-nav__item ${open}`} onClick={toggleMenu}>
            <Link to="/" className="menu-nav__link">
              Home
            </Link>
          </li>
          <li className={`menu-nav__item ${open}`} onClick={toggleMenu}>
            <Link to="/projects" className="menu-nav__link">
              Projects
            </Link>
          </li>
          <li className={`menu-nav__item ${open}`} onClick={toggleMenu}>
            <Link to="/knowledge" className="menu-nav__link">
              Knowledge
            </Link>
          </li>
          <li className={`menu-nav__item ${open}`} onClick={toggleMenu}>
            <Link to="/about" className="menu-nav__link">
              About
            </Link>
          </li>
          <li className={`menu-nav__item ${open}`} onClick={toggleMenu}>
            <Link to="/contact" className="menu-nav__link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation;