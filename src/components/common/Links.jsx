import React from "react";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Google from "../../images/gmail.png";
import Facebook from "../../images/Facebook.png";
import api from "../../api";

const Links = () => {
  const nav = useNavigate();
  const responseGoogle = (response) => {
    // if (response) {
    //   toast.success("You have successfully");
    //   nav("/home");
    // }
  };

  const responseFacebook = (response) => {
    console.log("facebook response", response);
    console.log("fb token", response.tokenId);

    api("post", "/login")
      .then((response) => {
        console.log("🚀 ~ .then ~ response:", response);
        // Handle successful response here

        if (response.status === 200) {
          toast.success("You have successfully logged in");
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", response?.data.data);

          nav("/home");
        }
      })
      .catch((error) => {
        // Handle error here
        console.error("Error:", error);
        return toast.error("Incorrect Password");
      });
  };

  const buttonStyle = {
    display: "flex",
    width: "100%",
    height: "8vh",
    gap: "10px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
    border: "1.5px solid #D0D0D0",
    color: "black",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "24px",
    backgroundColor: "#FFFFFF",
  };

  const GoogleButton = ({ onClick }) => (
    <button onClick={onClick} style={buttonStyle}>
      <img
        src={Google}
        alt="Google"
        style={{
          marginRight: "5px",
          border: "1px solid #D0D0D0",
        }}
      />
      Login with Gmail
    </button>
  );

  const FacebookButton = ({ onClick }) => (
    <button onClick={onClick} className="kep-login-facebook">
      <img
        src={Facebook}
        alt="Facebook"
        style={{
          marginRight: "5px",
          border: "1px solid #D0D0D0",
          width: "24px",
          height: "24px",
        }}
      />
      Signup with Facebook
    </button>
  );

  return (
    <div className="signup_sec2">
      <div className="or">
        <span className="orline"></span>
        <p>or</p>
        <span className="orline"></span>
      </div>
      <div className="social_buttons">
        <GoogleLogin
          clientId="7274686233-aagcdodn56aa0bs169mnq1cuf031gt34.apps.googleusercontent.com"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          render={(renderProps) => (
            <GoogleButton onClick={renderProps.onClick} />
          )}
        />
        <FacebookLogin
          appId="313958924639588"
          autoLoad={false}
          fields="name,picture"
          callback={responseFacebook}
          render={(renderProps) => (
            <FacebookButton onClick={renderProps.onClick} />
          )}
        />
      </div>
    </div>
  );
};

export default Links;
