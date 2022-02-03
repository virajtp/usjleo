import React, { Component, useState, useEffect } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
// import Navbar from './Components/NavBar Test/Navbar';
import LeftBar from './Components/SideBar/LeftBar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Create from "./Components/Create";
import Anecdote from "./Components/anecdote";
import AboutUs from "./Components/AboutUs";
import ProjectsView from './Components/Projects_Blogs/ProjectsView';
import ProjectForm from './Components/Form/ProjectForm';
import { useDispatch } from 'react-redux';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { getProjects } from './actions/projects';
import useStyles from './styles';
import Contact from "./Components/Contact";
import RightBar from "./Components/RightBar";
import BlogForm from "./Components/Form/BlogForm";
import BlogsView from "./Components/Projects_Blogs/BlogsView";
import { getBlogPosts } from "./actions/blogs";
import Line from "./Components/NavBar/Line";

function App() {

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();


  // if(window.location.pathname === '/Projects'){
  //   useEffect(() => {
  //     dispatch(getProjects());
  //   }, [currentId, dispatch]);
  // }

  // if(window.location.pathname === '/Blogs'){
  //   useEffect(() => {
  //     dispatch(getBlogPosts());
  //   }, [currentId, dispatch]);
  // }




  return (
    <Router>
      <div className="App">
      
        
        {/* <LeftBar /> */}
        {/* <RightBar /> */}
        {/* <Navbar /> */}
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="content">
        {/* <Footer /> */}
        <div className="contents">
        {/* <hr style={{
                color: '#000000',
                backgroundColor: '#000000',
                height: 0.5,
                borderColor: '#000000'
            }} /> */}
          <Grid container alignItems="stretch" spacing={1} >
            
            <Grid item xs={12} sm={12} md={9}>
              {/* <div><LeftBar /></div> */}
              {/* <div className="content"> */}

              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/leousj/">
                  <Home />
                </Route>
                <Route path="/Projects">
                  <Grow in>
                    <Container>
                      <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <ProjectsView setCurrentId={setCurrentId} />
                      </Grid>
                    </Container>
                  </Grow>
                </Route>
                <Route path="/Blogs">
                  {/* {useEffect(() => {
                dispatch(getBlogPosts());
              }, [currentId, dispatch])} */}
                  <Grow in>
                    <Container>
                      <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <BlogsView setCurrentId={setCurrentId} />
                      </Grid>
                    </Container>
                  </Grow>
                </Route>
                <Route path="/Create">
                  <Create />
                </Route>
                <Route path="/Anecdote">
                  <Anecdote />
                </Route>
                <Route path="/AboutUs">
                  <AboutUs />
                </Route>
                <Route path="/ProjectForm">
                  <Grow in>
                    <ProjectForm currentId={currentId} setCurrentId={setCurrentId} />
                  </Grow>
                </Route>
                <Route path="/BlogForm">
                  <Grow in>
                    <BlogForm currentId={currentId} setCurrentId={setCurrentId} />
                  </Grow>
                </Route>
              </Switch>


            </Grid>
            <Grid item xs={12} sm={12} md={3} container justify="space-around" alignItems="stretch">
              <div><LeftBar /></div>
            </Grid>
          </Grid>
          </div>
        </div>
        {/* <Footer data={this.state.resumeData.main} /> */}
        <Line/>
        <Navbar />
        <Footer />
      </div>
    </Router>
  );
  // }
}


export default App;
