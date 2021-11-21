import React from "react";
import "./Modal.css";

function Modal({ setOpenModal , name , image, caption }) {
  return (
    <div className="modalBackground">
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
        <div className="body">
         <div className="img"><img src={image} height="100%" /></div>
         {/* <div className="img"><img src={image} height="100%" /></div> */}
         {/* <p>{caption}</p> */}
        </div>
        <div className="footer">
          <p>{caption}</p>
          {/* <h2>LLL</h2> */}
          {/* <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button> */}
        </div>
      </div>
    </div>
  );
}

export default Modal;
