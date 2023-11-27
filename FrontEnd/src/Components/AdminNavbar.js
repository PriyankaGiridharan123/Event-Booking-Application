import React, { useState,useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link,useNavigate } from 'react-router-dom';
import {AdminSidebarData } from './AdminSidebarData';
import './AdminNavbar.css';
import { IconContext } from 'react-icons';
import 
{ BsFillPeopleFill, BsClock, BsBarChartLineFill, BsBarChartSteps}
 from 'react-icons/bs';
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
 import { useSelector } from 'react-redux';
import { getEmail } from './LocalStorage';
function AdminNavbar() {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const username = getEmail();
  const data = [
    {
      name: 'Event 1',
      visited: 4000,
      booked: 2400,
      amt: 2400,
    },
    {
      name: 'Event 2',
      visited: 3000,
      booked: 1398,
      amt: 2210,
    },
    {
      name: 'Event 3',
      visited: 2000,
      booked: 6800,
      amt: 2290,
    },
    {
      name: 'Event 4',
      visited: 2780,
      booked: 3908,
      amt: 2000,
    },
    {
      name: 'Event 5',
      visited: 1890,
      booked: 4800,
      amt: 2181,
    },
    {
      name: 'Event 6',
      visited: 4390,
      booked: 1800,
      amt: 2500,
    },
    {
      name: 'Event 7',
      visited: 3490,
      booked: 2300,
      amt: 2100,
    },
  ];
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
            <FaIcons.FaBars onClick={showSidebar} style={{color: "white"}}/>
          </Link>
          <div id="button" style={{color:"white",fontSize:"21px"}}>
            <div id="Log-sign">
            <Link onClick={()=>{
            }} to="/" style={{textDecoration: "none"}}><span style={{marginRight:"100px",color:"white"}}>Log out</span></Link>
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
            {AdminSidebarData.map((item, index) => {
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
        <br></br>
        <br></br>
        <br></br>
      </IconContext.Provider>
      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>User Visited</h3>
            <BsFillPeopleFill className='card_icon'/>
          </div>
          <h2>3000</h2>
        </div>
        <div className='card'>
                <div className='card-inner'>
                    <h3>User Booked</h3>
                    <BsFillPeopleFill className='card_icon'/>
                </div>
                <h2>200</h2>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Hours</h3>
                    <BsClock className='card_icon'/>
                </div>
                <h2>10</h2>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Upcoming Event</h3>
                    <BsBarChartSteps className='card_icon'/>
                </div>
                <h2>AS Concert</h2>
            </div>
      </div>
      <h1>Welcome, Admin: {username}!</h1>
      <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="visited" fill="#8884d8" />
                <Bar dataKey="booked" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="visited" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="booked" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </>
  );
}

export default AdminNavbar;
