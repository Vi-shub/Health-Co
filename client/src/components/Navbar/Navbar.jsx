import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faChevronDown, faChevronUp
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {logo} from '../../assets'

function Navbar() {
  const [nav, setNav] = useState(false);
  const openNav = () => {
    setNav(!nav);
  };

  const links = [
    {name:"LOGIN", link:"/"},
    {name:"SERVICES", link:"/#service",
    dropdown: [
      { name: "For People", link: "/service1" },
      { name: "For Organizations", link: "/service2" },
      { name: "For Contract Solutions", link: "/service3" },
      { name: "For Medical Partners", link: "/service4" },
    ],
  },
    {name:"ABOUT", link:"/#about"}, 
    {name:"CONTACT", link:"/contact"},
  ]

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };


  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          <img src = {logo}  alt="logo" className=" w-25 lg:h-20 h-14 sm:w-15" />
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">

        {links.map((link, index) => (
          <li key={index} className="navbar-item">
            {link.dropdown ? (
              <div className="dropdown">
                <button className="navbar-links font-regular">{link.name}</button>
                <div className="dropdown-content font-regular">
                <div className="dropdown-title font-regular">How can we serve you?</div> 
                  {link.dropdown.map((dropdownItem, i) => (
                    <a key={i} href={dropdownItem.link}>
                      {dropdownItem.name}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a href={link.link} className="navbar-links font-regular">
                {link.name}
              </a>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={() => setNav(!nav)} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          {links.map((link, index) => {
            if (link.dropdown) {
              return (
                <li key={index} className="mobile-navbar-dropdown">
                  <div className="navbar-links" onClick={toggleDropdown}>
                    {link.name}
                    <FontAwesomeIcon icon={dropdownOpen ? faChevronUp : faChevronDown} className="dropdown-icon" />
                  </div>
                  {dropdownOpen && (
                    <ul className="dropdown-menu">
                      <li className="dropdown-title-mobile">How can we serve you?</li>
                      {link.dropdown.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <Link to={item.link} className="dropdown-item">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            } else {
              return (
                <li key={index}>
                  <Link to={link.link} className="navbar-links">{link.name}</Link>
                </li>
              );
            }
          })}
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setNav(!nav)}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;