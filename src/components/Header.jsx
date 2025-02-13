import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
// import { NavLink, useLocation } from 'react-router-dom';

export default function Header() {
  // const location = useLocation();
  // const [currentPage, setCurrentPage] = useState(location.pathname);

  // const [activeCss, setActiveCss ] = useState({
  //   color: '#C12121'
  // })

  // useEffect(() => {
  //   setCurrentPage(location.pathname);
  // }, [location.pathname]);

  // const activeLinkStyle = {
  //   color: '#C12121',
  //   // Add any other styles you want for the active link
  // };

  // const changeColor = () => {
  //   setActiveCss({ color: '#C12121'})
  // }

  return (
    <header className="container-fluid header d-flex align-items-center">
      {/* <nav className="navbar d-flex justify-content-between align-items-center">
        <NavLink to={'/'} className="navbar-brand ms-4 text" activeClassName="active" activeStyle={activeCss} onClick={changeColor}>
          <h1 id="dev-name">Tom Dossman</h1>
        </NavLink>
        <div className="nav-box d-flex align-items-center gap-4 me-4">
          <NavLink to={'/portfolio'} className="nav-link" activeClassName="active" activeStyle={activeCss}>
            <p className="text">Portfolio</p>
          </NavLink>
          <NavLink to={'/resume'} className="nav-link" activeClassName="active" activeStyle={activeCss}>
            <p className="text">Resume</p>
          </NavLink>
          <NavLink to={'/contact'} className="nav-link" activeClassName="active" activeStyle={activeCss}>
            <p className="text">Contact</p>
          </NavLink>
        </div>
      </nav> */}
      <NavBar />
    </header>
  );
}