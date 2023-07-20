import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavItem, NavbarBrand, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.css'
import React, { useReducer, useContext } from "react";
const Header = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="justify-content-start">
          <Navbar.Brand >
            <Link to='/' id="portofolio">portofolio</Link>

          </Navbar.Brand>
          <ul className="nav ms-5">
            <li className=' '>
              <Link to='/projects' className='nav-item'>prjects</Link>
            </li>
            <li className=''>
              <Link to='/counter' className='nav-item'>counter app</Link>
            </li>
            <li className=''>
              <Link to='/contact' className='nav-item'>contact me</Link>
            </li>
            <li className=''>
              <Link to='/add' className='nav-item'>add user</Link>
            </li>
            <li className=''>
              <Link to='/about' className='nav-item'>about</Link>
            </li>
            <li className=''>
              <Link to='/skills' className='nav-item'>my skills</Link>
            </li>
            <li className=''>
              <Link to='/blogs' className='nav-item'>Blogs</Link>
            </li>
          </ul>
        </Container>
      </Navbar>


    </>
  )
}
export default Header;