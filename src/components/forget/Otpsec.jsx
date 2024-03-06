import React, { useState } from 'react'
import api from "../../api";
import {useNavigate } from "react-router-dom";
const Otpsec = () => {
  const [formData, setFormData] = useState({
    email: "",
    otp_code: "",
  });
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    api("post", "/match_otp", formData)
      .then((response) => {
        if (response.status === 200) {
          navigate("/Confirmpassword");
        }
      })
      .catch((error) => {
        // Handle error here
        console.error("Error:", error);
      });
  };
  return (
   
   <>
   <div className="otp_form">
    <div className="otp_top">
          <span>OTP Section </span>
          <div className="otp_fiels">
          <input
            type="email"
            placeholder="Enter your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
           
          />
          <input
            type="text"
            placeholder="Enter Otp Code"
            name="otp_code"
            value={formData.otp_code}
            onChange={handleChange}
           
          />
        </div>
        <div className="otp_button">
        <button  onClick={handleSubmit}>Verify OTP</button>
        </div>
          </div>
          </div>
   </>

  )
}

export default Otpsec
