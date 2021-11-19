import { Link } from "react-router-dom";
import logo from './images/logoOnly1.png';
import { useState } from "react";
import $ from "jquery";
import { initialize } from "react-ga";
import shadows from "@material-ui/core/styles/shadows";
import { red } from "@material-ui/core/colors";
import { colors, Grid, Row } from '@material-ui/core';
import Dropdown from "./NavBar/Dropdown";
import "./NavBar/Navbar.css";
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";

const Navbar = () => {

    const [active, setActive] = useState('home')

    const handleActive = (e) => {
        setActive(`${e}`);
    }

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

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

    const hover = "#040640";
    return (
        <div>
        <nav className="navbar">
            {/* <Grid container justify="space-between" alignItems="center" spacing={2}> */}

            {/* <p></p> */}
            <div className="links">
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
             
                    <li className='nav-item'>
                        <Link to="/leousj/" onClick={() => { handleActive('home') }} style={{ color: window.location.pathname === "/leousj/" || window.location.pathname === "/" ? '#040640' : null }}>Home</Link>
                    </li>


                    <li className='nav-item'>
                        <Link to="/Projects" onClick={() => { handleActive('project') }} style={{ color: window.location.pathname === '/Projects' ? '#040640' : null }} >Projects</Link>
                    </li>

                    {/* <Link to="/Anecdote" onClick={() => { handleActive('anecdote') }} style={{ color: window.location.pathname === '/Anecdote' ? '#040640' : null }}>Anecdote</Link>


                    <Link to="/Blogs" onClick={() => { handleActive('blog') }} style={{ color: window.location.pathname === '/Blogs' ? '#040640' : null }} >Blogs</Link> */}

                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}  >
                        <Link to="" onClick={() => { handleActive('blog') }}  style={{ color: window.location.pathname === '/Blogs'||window.location.pathname === '/Anecdote' ? '#040640' : null }}>Publications<FiChevronDown /></Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item'>
                        <Link to="/AboutUs" onClick={() => { handleActive('aboutus') }} style={{ color: window.location.pathname === '/AboutUs' ? '#040640' : null }}>About Us</Link>
                    </li>
                </ul>
            </div>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                <div id="logo"><img src={logo} height="50" /></div>
                {/* <i class='fab fa-firstdraft' /> */}
            </Link>

            {/* </Grid> */}
            
        </nav>
        {/* <hr style={{
                color: '#000000',
                backgroundColor: '#000000',
                height: 0.5,
                borderColor: '#000000'
            }} /> */}
        </div>
    );
}

export default Navbar;