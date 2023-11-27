import React, { useState,useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './AdminNavbar.css';
import { IconContext } from 'react-icons';
import { BsFillPeopleFill, BsClock, BsBarChartLineFill, BsBarChartSteps }
  from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { getEmail } from './LocalStorage';
import Dashboard from './Dashboard';
function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const username = getEmail();
  const nav=useNavigate();
  const token=localStorage.getItem("jwtToken")
  if(token===null){
    nav("/")
   
  }
  const [user, setuser] = useState([]);
  useEffect(() => {
    const storeduser = JSON.parse(localStorage.getItem('userData')) || [];
    setuser(storeduser);
  }, []);
  return (
    <>
      <IconContext.Provider value={{ color: 'white' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} style={{ color: "white" }} />
          </Link>
          <div id="button" style={{ color: "white", fontSize: "21px" }}>
            <div id="Log-sign">
              <Link onClick={()=>{
              }} to="/" style={{ textDecoration: "none" }}><span style={{ marginRight: "100px", color: "white" }}>Log out</span></Link>
            </div>
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
      
      <h1>Welcome, {username}!❤️</h1>
      <Dashboard/>
    </>
  );
}

export default Navbar;
