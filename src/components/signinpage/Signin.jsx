import React, { useEffect, useState } from "react";
import Facebook from "../common/Links";
import BackArrow from "../icons/Backicon";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../api";
import { UpdateStore } from "../../StoreContext";
import "@fortawesome/fontawesome-free/css/all.css";



const Signin = () => {
  const navigate = useNavigate();
  const updateStore = UpdateStore();
 

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.email || !formData.password) {
      return toast.error("Please fill in both email and password.");
    }

    // Handle form submission logic here
    api("post", "/login", formData)
      .then((response) => {
        // Handle successful response here

        if (response.status === 200) {
          toast.success("You have successfully logged in");
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", response?.data.data);
          updateStore({ loggedIn: true, user: response?.data.data });
          navigate("/home");
        }
      })
      .catch((error) => {
        // Handle error here
        console.error("Error:", error);
        return toast.error("Incorrect Password");
      });
  };

  useEffect(() => {
    setFormData({
      email: "",
      password: "",
    });
  }, []);

  return (
    <div className="sigin_form">
      <Link to="/main">
        <BackArrow />
      </Link>
      <form>
        <div className="signin_top">
          <p>Sign In with your email</p>
        </div>
        <div className="signin_input_fields">
          <input
            type="text"
            placeholder="Enter Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
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
        </div>
        <div className="forgotpass">
          <Link to="/forget" className="linkRedirect">
            <span>Forget password?</span>
          </Link>
        </div>
        <div className="signin_button">
          <button type="submit" onClick={handleSubmit}>
            SignIn
          </button>
        </div>
        <div>
          <Facebook />
        </div>
        <div className="signin_form_end">
          <p>
            Don’t have an account?
            <Link to="/signup" className="linkRedirect">
              <span>Sign Up</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signin;
