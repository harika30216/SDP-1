import React from 'react';
import photo from './Work.png';
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';



const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
        
        </NavLink>
        <NavMenu>
        <NavLink to='/logo' activeStyle>
        <img src={photo} width="50" height="50"></img> 
          </NavLink>
          <NavLink to='/home' activeStyle>
          Home
          </NavLink>

          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin' activeStyle>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
