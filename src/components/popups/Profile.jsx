import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";
import Contact from "./Contact";
import Terms from "./Term";
import { toast } from "react-toastify";
import Cross from "../../images/cross.png";
import Logout from "../../images/Logout.svg";
import Complain from "../../images/Complain.svg";
import Help from "../../images/Help.svg";
import Share from "../../images/share.svg";
import Pencile from "../../images/pencilback.svg";
import Pencil from "../../images//pencil.png";
import api from "../../api";
import Avatar1 from "../../images/avatar1.svg";
import Avatar2 from "../../images/avatar2.svg";
import Avatar3 from "../../images/avatar3.svg";
import { Link, useNavigate } from "react-router-dom";
import { Store } from "../../StoreContext";

const Profile = ({ setMenu }) => {
  const { user } = Store();
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState(false);
  const [termData, setTermData] = useState("");
  const avatarImages = [Avatar1, Avatar2, Avatar3];

  const [userData, setUserData] = useState({});
  console.log("🚀 ~ Profile ~ userData:", userData.user_avatar);
  const handlePencil = () => {
    setAvatar(!avatar);
    document.body.style.overflow = "hidden";
  };
  const [term, setTerm] = useState(false);
  const [contact, setContact] = useState(false);
  const handleContact = () => {
    setContact(!avatar);
    document.body.style.overflow = "hidden";
  };
  const handleTerm = async () => {
    // Handle form submission logic here
    await api("get", "/page/term_conditions")
      .then((response) => {
        // Handle successful response here
        setTermData(response.data.data.content);
      })
      .catch((error) => {
        // Handle error here
        console.error("Error:", error);
      });
    setTerm(!term);
    document.body.style.overflow = "hidden";
  };

  const handleLogout = () => {
    toast.success("Successfully logged out.");
    localStorage.removeItem("token");
    navigate("/login");
  };
  useEffect(() => {
    api("get", `/GetuserAvatar/${user.id}`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [!avatar]);
  return (
    <>
      {avatar && <Avatar setAvatar={setAvatar} avatarImages={avatarImages} />}
      {avatar && (
        <div
          className="side_bar_backgrounds"
          onClick={() => {
            setAvatar(false);
            document.body.style.overflow = "visible";
          }}
        />
      )}
      {contact && <Contact setContact={setContact} />}
      {contact && (
        <div
          className="side_bar_backgrounds"
          onClick={() => {
            setContact(false);
            document.body.style.overflow = "visible";
          }}
        />
      )}
      {term && <Terms setTerm={setTerm} termData={termData} />}
      {term && (
        <div
          className="side_bar_backgrounds"
          onClick={() => {
            setTerm(false);
            document.body.style.overflow = "visible";
          }}
        />
      )}
      <div className="profile">
        <div className="profile_cross_icon">
          <img
            src={Cross}
            alt=""
            onClick={() => {
              setMenu(false);
              document.body.style.overflow = "visible";
            }}
          />
        </div>
        <div className="profile_img_detail">
          <div className="profile_img">
            <div className="avatar_first">
              <img src={avatarImages[userData.user_avatar]} alt="" />
            </div>
            <div className="avatar_top">
              <div className="avatar_top_inner1">
                <img src={Pencile} alt="" />
              </div>
              <div className="avatar_top_inner">
                <img src={Pencil} alt="" onClick={handlePencil} />
              </div>
            </div>
          </div>
          <div className="profile_detail">
            <span className="name">{userData?.data?.fname}</span>
            <span className="gmail">{userData?.data?.email}</span>
          </div>
        </div>

        <div className="profile_center">
          <hr className="profle_hr" />
          <div className="contact_us">
            <img src={Complain} alt="" />
            <span onClick={handleContact}>Contact Us</span>
          </div>
          <hr className="profle_hr" />
          <div className="term_services">
            <img src={Help} alt="" />
            <span onClick={handleTerm}>Terms of Services</span>
          </div>
          <hr className="profle_hr" />
          <div className="linkRedirect">
            <div className="logout" onClick={handleLogout}>
              <img src={Logout} alt="Logout" />
              <span>Log Out</span>
            </div>
          </div>
          <hr className="profle_hr" />
        </div>
        <div className="profile_down">
          <div className="profile_paragraph">
            <p>Help us spread the word and pass on savings to your friends</p>
          </div>
          <Link
            to="/login"
            className="linkRedirect"
            onClick={() => {
              localStorage.removeItem("token");
              toast.success("Successfully logged out.");
            }}
          >
            <div className="profile_button">
              <button>
                <img src={Share} alt="" />
                Back To Sign In
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Profile;
