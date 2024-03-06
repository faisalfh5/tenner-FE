import React from "react";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import Google from "../../images/gmail.png";
import Facebook from "../../images/Facebook.png";

const Links = () => {
  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.tokenId); // This is the provider ID
  };

  const responseFacebook = (response) => {
    console.log(response);
    console.log(response.tokenId);
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
          clientId="7274686233-23vgo7dqvnna6b8pr4rt4hhf9p2nednm.apps.googleusercontent.com"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          render={(renderProps) => (
            <GoogleButton onClick={renderProps.onClick} />
          )}
        />
        <FacebookLogin
          appId="YOUR_FACEBOOK_APP_ID"
          autoLoad={false}
          fields="name,email,picture"
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
