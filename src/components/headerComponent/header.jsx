import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavItem, NavbarBrand, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.css'
import React, { useReducer, useContext } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { changeLang } from '../../Store/Actions/langAction'
import { changeTheme } from '../../Store/Actions/themeAction'

const Header = () => {
  const language = useSelector((state) => state.langRed.lang);
  const theme = useSelector((state) => state.themeRed.theme);

  const disp = useDispatch();
  function changeLangFun() {
    disp(changeLang(language == "en" ? "ar" : "en"))
  }
  function changeThemeFun() {
    disp(changeTheme(theme == "dark" ? "light" : "dark"))
  }

  return (
    <>
      <Navbar bg={theme} data-bs-theme="dark">
        <Container className="justify-content-start">
          <Navbar.Brand >
            <Link to='/' id="portofolio">portofolio</Link>

          </Navbar.Brand>
          <ul className="nav ms-5">
            <li className=' '>
              <Link to='/projects' className='nav-item'>projects</Link>
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
            <li className=''>
              <Link to='/class' className='nav-item'>class</Link>
            </li>
            <li className=''>
              <Link to='/memory' className='nav-item'>Memories</Link>
            </li>
          </ul>

          <span title={`click me switch ${language == "en" ? 'Arabic' : 'English'}`}
            className={`btn bg-success ms-3 ${language == "en" ? 'text-light' : 'text-warning'}`}
            onClick={() => changeLangFun()}
            >{language}</span>

        <span className={`ms-2 btn btn-danger ${theme== "dark"?"text-light":"text-light"}`}
            onClick={() => changeThemeFun()}
        >
          {theme=="dark"?"to light":"to dark"}
        </span>
                </Container>
      </Navbar>


    </>
  )
}
export default Header;