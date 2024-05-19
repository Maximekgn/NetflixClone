import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search_icon.svg'
import bellIcon from '../../assets/bell_icon.svg'
import profileImg from '../../assets/profile_img.png'
import caretIcon from '../../assets/caret_icon.svg'





const Navbar = () => {

  const navRef = useRef() ;

  useEffect(() => {
    window.addEventListener('scroll' , () => {
      if (window.scrollY >=80) {  navRef.current.classList.add("nav-dark") }
      else {navRef.current.classList.remove("nav-dark") ;}
    })
  })



  return (
    <div className='navbar'>
      <div className="navbar-left">
            <img src={logo} alt="" />
            <ul>
              <li>Home</li>
              <li>TV Shows</li>
              <li>Nexs & Popular</li>
              <li>My List</li>
              <li>Browse by Langages</li>
            </ul>
      </div>
      <div className="navbar-right">
            <img src= {searchIcon} className='icons' />
            <p>Children</p>
            <img src= {bellIcon} className='icons' />
            <div className="navbar-profil">
                <img src= {profileImg} className='profile' />
                <img src= {caretIcon}  />
                <div className="dropdown">
                  <p>Sign Out of Netflix</p>
                </div>
            </div>

      </div>
    </div>
  )
}

export default Navbar