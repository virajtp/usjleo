import React from "react";
import { Grid } from '@material-ui/core';
// import SocialMediaButtons from 'react-social-media-buttons';
// import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import Contact from "./Contact";


const Footer = () => {
  const buttonStyle = {
    backgroundColor: '#000000',
    borderRadius: '40%',
  };
 
  const iconStyle = { color: '#ffffff' };
  return ( 
    <div>
      
      <footer className="footer-is-primary">
      <Contact/>
      <div style={{paddingBottom: '5px', fontFamily: 'sarif'}} ><h1>Follow Us</h1></div>
              <div class="social-container">
                
                    <div className="social-icons">
                    <a href="/ProjectForm"
                        className="youtube social">
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                      </a>
                      {/* <a href="https://youtube.com/channel/UCcyXhJ9K_FehCDp57h-RzLQ"
                        className="youtube social">
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                      </a> */}
                       {/* <a href="https://www.facebook.com/USJC2/"
                        className="facebook social">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                      </a> */}
                      <a href="/BlogForm"
                        className="facebook social">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                      </a>
                      <a href="https://www.linkedin.com/company/71543018/" className="linkedin social">
                        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                      </a>
                      <a href="https://instagram.com/jpurac2leos?utm_medium=copy_link"
                        className="instagram social">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                      </a>
                    </div>
              </div>
              <div style={{paddingTop: '25'}} >© C2LCUSJ 2021 All rights reserved !</div>
        
      </footer>
    </div>
   );
}
 
export default Footer;