import React from "react";
import image from "../images/image1.png";

import Cross from "../images/cross.png";
const Reel = ({ setReel, reelMedia }) => {
  return (
    <>
      <div className="custom-container">
        <img className="custom-img" src={reelMedia.media} alt="Placeholder" />
        <div className="gradient-overlay" />
        <div className="progress-line">
          <div className="progress-bar-background" />
          <div className="progress-bar" />
        </div>
        <div className="logo-container">
          <div className="avatar-container">
            <div className="reel_avatar">
              <div className="inner-avatar">
                <div className="outer-avatar" />
                <img
                  className="avatar-image"
                  src={reelMedia.logo}
                  alt="Avatar"
                />
              </div>
            </div>
            <div className="title">Fauget Catering</div>
          </div>
          <div className="close-button">
            <img
              src={Cross}
              alt=""
              onClick={() => {
                setReel(false);
                document.body.style.overflow = "visible";
              }}
            />
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Reel;
