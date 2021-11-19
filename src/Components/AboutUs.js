import React, { Component } from "react";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "./images/userImage.png";
import { colors, Grid, Row } from '@material-ui/core';
import logo from './images/leologo.png';
import Tabs from './Tabs';

export default class AboutUs extends Component {
  render() {
    return (
      <div className="aboutus">
        <div className="positions">

          <Tabs/>
          {/* <div id="president">
            <img src={MyPhoto} height='260px'  style={{borderRadius:'50%', border:'10px solid black'}} />
            <h2>President</h2>
            <h3>Randunu Rupasinghe</h3>
          </div>

          <Grid container justify="center" alignItems="center" spacing={1}>
            <Grid item xs={16} sm={8} md={5}>
              <img src={MyPhoto} height='240px'  style={{borderRadius:'50%', border:'10px solid black'}} />
              <h2>Secretary</h2>
              <h3>Rajinee Mahaushadhee</h3>
            </Grid>
            
            <Grid item xs={8} sm={8} md={5}>
              <img src={MyPhoto} height='240px' style={{borderRadius:'50%', border:'10px solid black'}} />
              <h2>Vice President</h2>
              <h3>Sanka Samarasekara</h3>
            </Grid>
          </Grid>
          <Grid container justify="center" alignItems="center" spacing={2}>
            <Grid item xs={12} sm={8} md={4}>
              <img src={MyPhoto} height='240px'  style={{borderRadius:'50%', border:'10px solid black'}} />
              <h2>Treasurer</h2>
              <h3>Nethmi Sarada</h3>
            </Grid>
            <Grid item xs={12} sm={8} md={4}>
              <img src={MyPhoto} height='240px' style={{borderRadius:'50%', border:'10px solid black'}} />
              <h2>Asst. Secretary</h2>
              <h3>Melissa Handapangoda</h3>
            </Grid>
            <Grid item xs={12} sm={8} md={4}>
              <img src={MyPhoto} height='240px' style={{borderRadius:'50%', border:'10px solid black'}} />
              <h2>Asst. Treasurer</h2>
              <h3>Sanduni Maheshika</h3>
            </Grid>
          </Grid> */}
        </div>
      </div>
    );
  }
}