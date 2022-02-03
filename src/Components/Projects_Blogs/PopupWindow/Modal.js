import React from "react";
import "./Modal.css";
import { Grid } from '@material-ui/core';

function Modal({ setOpenModal, name, image, caption }) {
  return (
    
    <div className="modalBackground">
      <style>
        {`#p-wrap {
          white-space: pre-line;
        }`}
      </style>
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h3>{name}</h3>
        </div>
        <Grid container alignItems="space-around" justifyContent="space-around" spacing={1} >
          <Grid item xs={10} sm={10} md={5}>
            <div className="body">
              <div className="img"><img src={image} height="100%" /></div>
              {/* <div className="img"><img src={image} height="100%" /></div> */}
              {/* <p>{caption}</p> */}
            </div>
          </Grid>
          <Grid item xs={10} sm={10} md={5} container justify="space-around" alignItems="stretch">

            <div className="footer">
              <pre id="p-wrap">{caption}</pre>
            </div>
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Modal;
