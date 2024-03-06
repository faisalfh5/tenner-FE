import React, { useState } from 'react'
import api from "../../api";
import {useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Confirmpassword = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirm_password: "",
    email:"",
  });
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    api("post", "/change_password", formData)
      .then((response) => {
        if (response.status === 200) {
            toast.success("Password Change Successfully");
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
   
   <>
   <div className="confirm_otp_form">
    <div className="confir_otp_top">
          <span>OTP Section </span>
          <div className="confirm_otp_fiels">
          <input
          
          placeholder=" email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
          <input
          
              placeholder=" password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
             <input
              placeholder="Confirm password"
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
            />
        </div>
        <div className="confirm_otp_button">
        <button  onClick={handleSubmit}>Change Password</button>
        </div>
          </div>
          </div>
   </>

  )
}

export default Confirmpassword
