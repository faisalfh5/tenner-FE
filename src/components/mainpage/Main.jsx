import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.svg";
const Main = () => {
  return (
    <>
      <div className="main_div">
        <div className="main_div_inner">
          <div className="logo_img">
            <img src={Logo} alt="" />
          </div>
          <div className="buttons">
            <div className="button_first" style={{ "text-decoration": "none" }}>
              <Link to="/signup" className="linkRedirect">
                <button>Create an account</button>
              </Link>
            </div>
            <div className="button_second">
              <Link to="/login" className="linkRedirect">
                <button>Log In</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
