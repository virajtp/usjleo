import React, { useState } from 'react'
import { Link } from "react-router-dom";
import logo from './images/logoOnly1.png';
import ReorderIcon from '@material-ui/icons/Reorder';
// import "./style.css";
import "./NavBar/Navbar.css";
import Dropdown from "./NavBar/Dropdown";
import { FiChevronDown } from "react-icons/fi";
import Line from './NavBar/Line';

function Navbar() {

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const [dropdown, setDropdown] = useState(false);
  const [click, setClick] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [active, setActive] = useState('home')

  const handleActive = (e) => {
    setActive(`${e}`);
    setShowLinks(false);
  }



  return (
    <div>
      <div className="Navbar">
      <Line/>
        <div className="leftside">
          <div className="Links" id={showLinks ? "hidden" : ""}>
            {/* <Link to="/leousj/" >Home</Link>
            <Link to="/Projects" >Projects</Link>
            <div className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}  >
              <Link to="" style={{ color: window.location.pathname === '/Blogs' || window.location.pathname === '/Anecdote' ? '#040640' : null }}>Publications<FiChevronDown /></Link>
              {dropdown && <Dropdown />}
            </div> 
            <Link to="/AboutUs" >About Us</Link> */}

            <ul className='nav-menu'>

              <li className='nav-item'>
                <Link to="/leousj/" onClick={() => { handleActive('home') }} style={{ color: window.location.pathname === "/leousj/" || window.location.pathname === "/" ? '#040640' : null }}>Home</Link>
              </li>
              <li className='nav-item'>
                <Link to="/Projects" onClick={() => { handleActive('project') }} style={{ color: window.location.pathname === '/Projects' ? '#040640' : null }} >Projects</Link>
              </li>
              <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}  >
                <Link to="" onClick={() => {setDropdown(!dropdown)}} style={{ color: window.location.pathname === '/Blogs' || window.location.pathname === '/Anecdote' ? '#040640' : null }}>Publications<FiChevronDown /></Link>
                {dropdown && <Dropdown />}
              </li>
              <li className='nav-item'>
                <Link to="/AboutUs" onClick={() => { handleActive('aboutus') }} style={{ color: window.location.pathname === '/AboutUs' ? '#040640' : null }}>About Us</Link>
              </li>
            </ul>
          </div>
          <button onClick={() => setShowLinks(!showLinks)} ><ReorderIcon /></button>
        </div>
        <div className="rightside">
          <Link to="/leousj/" onClick={() => { handleActive('home') }} style={{ color: window.location.pathname === "/leousj/" || window.location.pathname === "/" ? '#040640' : null }}><div id="navlogo"><img src={logo} /></div></Link>

        </div>
        
        {/* <div> */}
        {/* <hr style={{
          color: '#000000',
          backgroundColor: '#000000',
          height: 1,
          borderColor: '#000000',
        }} /> */}
      {/* </div> */}
      </div>
      

    </div>
  )
}

export default Navbar;
