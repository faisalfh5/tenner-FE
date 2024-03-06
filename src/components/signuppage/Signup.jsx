import React, { useState } from "react";
import Facebook from "../common/Links";
import BackArrow from "../icons/Backicon";
import Circle from "../../images/circle.png";
import Check from "../../images/check.png";
import api from "../../api";
import { Link, useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirm_password: "",
    term_condition: 1,
  });
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.fname || !formData.lname) {
      errors = { ...errors, name: "Please enter both first and last names." };
    }

    if (!formData.email) {
      errors = { ...errors, email: "Please enter your email." };
    }

    if (!formData.password) {
      errors = { ...errors, password: "Please enter your password." };
    } else if (!/(?=.*[a-z])(?=.*[A-Z])/.test(formData.password)) {
      errors = {
        ...errors,
        password: "Password must contain both uppercase and lowercase letters.",
      };
    }

    if (!formData.confirm_password || formData.confirm_password !== formData.password) {
      errors = { ...errors, confirm_password: "Passwords do not match." };
    }

    setValidationErrors(errors);

    return Object.keys(errors).length === 0; // Return true if there are no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    if (!validateForm()) {
      return;
    }

    // Handle form submission logic here
    api("post", "/register", formData)
      .then((response) => {
        if (response.status === 200) {
          navigate("/login");
        }
      })
      .catch((error) => {
        // Handle error here
        console.error("Error:", error);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="sigup_form">
      <Link to="/main">
        <BackArrow />
      </Link>
      <form action="">
        <div className="signup_top">
          <p>Sign up with your email</p>
        </div>
        <div className="input_fields">
          <input
            type="text"
            placeholder="First name"
            name="fname"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Last name"
            name="lname"
            value={formData.lastName}
            onChange={handleChange}
          />
          {validationErrors.name && (
            <div className="error-message" style={{ color: "#D00D4F" }}>{validationErrors.name}</div>
          )}

          <input
            type="text"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          {validationErrors.email && (
            <div className="error-message" style={{ color: "#D00D4F" }}>{validationErrors.email}</div>
          )}

          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <i
              className={`password-toggle-icon ${
                showPassword ? "fas fa-eye-slash" : "fas fa-eye"
              }`}
              onClick={togglePasswordVisibility}
            />
          </div>
          {validationErrors.password && (
            <div className="error-message" style={{ color: "#D00D4F" }}>{validationErrors.password}</div>
          )}

          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm password"
              name="confirm_password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <i
              className={`password-toggle-icon ${
                showPassword ? "fas fa-eye-slash" : "fas fa-eye"
              }`}
              onClick={togglePasswordVisibility}
            />
          </div>
          {validationErrors.confirm_password && (
            <div className="error-message" style={{ color: "#D00D4F" }}>{validationErrors.confirm_password}</div>
          )}
        </div>
        <div className="privacy_heading">
          <div className="privacy_check">
            <div className="circle">
              <img src={Circle} alt="" />
            </div>
            <div className="check">
              <img src={Check} alt="" />
            </div>
          </div>

          <p>
            By signing up, you agree to the <strong>Terms of service </strong>
            and <strong>Privacy policy.</strong>
          </p>
        </div>
        <div className="signup_button">
          <button onClick={handleSubmit}>SignUp</button>
        </div>
        <div>
          <Facebook />
        </div>
        <div className="form_end">
          <p>
            Already have an account?
            <Link to="/login">
              <span>Sign In Now</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
