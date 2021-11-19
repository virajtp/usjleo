import { Link } from "react-router-dom";
import logo from './images/logoOnly1.png';
import { useState } from "react";
import $ from "jquery";
import { initialize } from "react-ga";
import shadows from "@material-ui/core/styles/shadows";
import { red } from "@material-ui/core/colors";
import { colors, Grid, Row } from '@material-ui/core';

const Navbar = () => {

    const [active, setActive] = useState('home')

    const handleActive = (e) => {
        setActive(`${e}`);
    }
    
    const hover = "#040640";
    return (
        <nav className="navbar">
            <Grid container justify="space-between" alignItems="center" spacing={2}>
            
            {/* <p></p> */}
            <div className="links">

                {/* <Link to="/" onClick={() => { handleActive('home') }} style={{ color: window.location.pathname === "/" ? 'red' : null }}>Home</Link> */}
                <Link to="/leousj/" onClick={() => { handleActive('home') }} style={{ color: window.location.pathname === "/leousj/"||window.location.pathname === "/" ? '#040640': null }}>Home</Link>
                {/* <a href="https://bit.ly/3A8yKo6" >News Letter</a> */}
                <Link to="/Anecdote" onClick={() => { handleActive('anecdote') }} style={{ color: window.location.pathname === '/Anecdote' ? '#040640' : null }}>Anecdote</Link>
                <Link to="/Projects" onClick={() => { handleActive('project') }} style={{ color: window.location.pathname === '/Projects' ? '#040640' : null }} >Projects</Link>
                <Link to="/Blogs" onClick={() => { handleActive('blog') }} style={{ color: window.location.pathname === '/Blogs' ? '#040640' : null }} >Blogs</Link>
                <Link to="/AboutUs" onClick={() => { handleActive('aboutus') }} style={{ color: window.location.pathname === '/AboutUs' ? '#040640' : null }}>About Us</Link>
                

            </div>
            <div id="logo"><img src={logo}  height="75" /></div> 
            </Grid>
            <hr  style={{
    color: '#000000',
    backgroundColor: '#000000',
    height: .5,
    borderColor : '#000000'
}}/>
        </nav>
    );
}

export default Navbar;