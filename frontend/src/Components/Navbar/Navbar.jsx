import React, { useState } from 'react';
import * as Icon from '@material-ui/icons';
import { Link } from 'react-router-dom';

import { SidebarData } from './NavbarData';
import './Navbar.css'

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <Icon.Menu color="primary" onClick={showSidebar} />
        </Link>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar} >
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <Icon.Close />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.class}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          
        </nav>
      </div>
    </>
  );
}

export default Navbar;
