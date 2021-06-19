import React, { useEffect, useState } from 'react';
import * as Icon from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// import { SidebarData } from './NavbarData';
import './Navbar.css';
import { getSideBarItems } from '../../redux/actions/sideBarActions';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const dispatch = useDispatch();
  const SidebarData = useSelector((state) => state.sideBar);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  useEffect(() => {
    dispatch(getSideBarItems);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <Icon.Menu color="primary" onClick={showSidebar} />
        </Link>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <Icon.Close />
              </Link>
            </li>
            {SidebarData.loading ? (
              <div></div>
            ) : (
              SidebarData.items.map((item, index) => {
                return (
                  <li key={index} className={item.class}>
                    <Link to={item.path}>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })
            )}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
