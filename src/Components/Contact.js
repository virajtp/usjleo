import React, { Component, useState, useRef } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { colors, Grid } from '@material-ui/core';
import emailjs from 'emailjs-com';
import { useAlert, withAlert } from 'react-alert'




const Contact = () => {

  const [userName, setUserName] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_mrr1hul', 'template_7te8fsr', { message: message, from_name: userName, reply_to: email }, 'user_DzrnuVswHIxfM8rqJg0wW')
      .then((result) => {
        alert.show(<div style={{ color: 'black', backgroundColor: 'white' }}>Message Sent Successfully !</div>)
        // console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  // if (!this.props.data) return null;
  const alert = useAlert();
  return (
    <section id="contact">

      <Fade>
        <h2>Contact Us</h2>
        <Grid container justify="space-around" alignItems="stretch" spacing={3}>
          

          <div>
            <h3>Address</h3>
            <h4>
              Leo Club of District 306 C2<br />
              University of Sri Jayewardenepura<br />
              Gangodawila<br />
              Nugegoda<br />
              Sri Lanka<br />
            </h4>
          </div>
          <div className="eight columns">
            <form action="" method="post" id="contactForm" name="contactForm">
              <fieldset>
              <table>
                <tr>
                  <td><label htmlFor="contactName">
                    Name <span className="required"></span>
                  </label></td>
                  <td><input
                    type="text"
                    defaultValue=""
                    size="20"
                    id="contactName"
                    name="contactName"
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                  /></td>
                </tr>

                <tr>
                <td><label htmlFor="contactEmail">
                    Email <span className="required"></span>
                  </label></td>
                  <td><input
                    type="text"
                    defaultValue=""
                    size="20"
                    id="contactEmail"
                    name="contactEmail"
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                  /></td>
                </tr>
                <tr>
                <td><label htmlFor="contactMessage">
                    Message <span className="required"></span>
                  </label></td>
                  <td><textarea
                    cols="50"
                    rows="2"
                    id="contactMessage"
                    name="contactMessage"
                    onChange={(e) => {
                      setmessage(e.target.value);
                    }}
                  ></textarea></td>
                </tr>
                </table>

                <div>
                  <button className="submit" onClick={handleSubmit} >Send</button>
                  {/* <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span> */}
                </div>
              </fieldset>
            </form>
            {/* <div id="message-warning"> Error boy</div>
            <div id="message-success">
              <i className="fa fa-check"></i>Your message was sent, thank you!
              <br />
            </div> */}
          </div>
          <div>
            <h4>
              <p>Club President : <a style={{ color: 'white' }} href="tel:+94713665246">0713665246</a></p>
              <p>Club Secretary : <a style={{ color: 'white' }} href="tel:+940769977911">0769977911</a></p>
            </h4>
          </div>
        </Grid>
      </Fade>
    </section>
  );
}


export default Contact;






