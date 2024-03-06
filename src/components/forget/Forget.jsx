import React from "react";
import BackArrow from "../icons/Backicon";
import { Link } from "react-router-dom";
const Forget = () => {
  return (
    <>
      <div className="forget_form">
        <Link to="/login">
          <BackArrow />
        </Link>
        <div className="forget_top">
          <span>Forget Password?</span>
          <p>
            Please enter the email address linked with your account and you will
            receive an email to reset your password.
          </p>
        </div>
        <div className="forget_input_fields">
          <input type="text" placeholder="Enter Your password" />
        </div>
        <div className="forget_button">
          <button>SignIn</button>
        </div>

        <div className="forget_form_end">
          <p>
            Remember Password?
            <Link to="/login" className="linkRedirect">
              <span> Sign In</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Forget;
