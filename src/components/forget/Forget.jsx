import React, { useState } from "react";
import api from "../../api";
import BackArrow from "../icons/Backicon";
import { Link, useNavigate } from "react-router-dom";
const Forget = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
  });
  console.log("formData", formData.email)

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    api("post", "/forgot_password", formData)
      .then((response) => {
        if (response.status === 200) {
          navigate("/Otpsec");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
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
          <input
            type="email"
            placeholder="Enter Your password"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value})
            }
          />
        </div>
        <div className="forget_button">
          <button onClick={handleForgotPassword}>Forgot Password</button>
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
