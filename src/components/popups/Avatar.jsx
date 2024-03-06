import React from "react";
import Avatar1 from "../../images/avatar1.svg";
import Avatar2 from "../../images/avatar2.svg";
import Avatar3 from "../../images/avatar3.svg";
import Cross from "../../images/cross.png";

const Avatar = ({ setAvatar }) => {
  return (
    <>
      <div className="avatar">
        <div className="avatar_heading">
          <h6>Choose Your Avatar</h6>
          <div className="avatar_cross_icon">
            <img
              src={Cross}
              alt=""
              onClick={() => {
                setAvatar(false);
                document.body.style.overflow = "visible";
              }}
            />
          </div>
        </div>
        <div className="avatar-imgs">
          <img src={Avatar1} alt="" />
          <img src={Avatar2} alt="" />
          <img src={Avatar3} alt="" />
        </div>
        <div className="avatar_button">
          <button>Save</button>
        </div>
      </div>
    </>
  );
};

export default Avatar;
