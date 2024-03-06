import React, { useState } from "react";
import Cross from "../../images/cross.png";
import Contactimg from "../../images/avatar1.svg";
import Call from "../../images/phone.png";
import Mail from "../../images/Mail.png";
import api from "../../api";
import { toast } from "react-toastify";
import { Store } from "../../StoreContext";

const Contact = ({ setContact }) => {
  const { user } = Store();

  const [textValue, setTextValue] = useState("");
  console.log("🚀 ~ Contact ~ textValue:", textValue);

  const handleChange = (event) => {
    setTextValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // API call to submit form data
    api("post", "/contact_us/store", { user_id: user.id, query: textValue })
      .then((response) => {
        toast.success("Thanks for your feedback");
        setContact(false);
      })
      .catch((error) => {
        // Handle error here
        console.error("Error:", error);
      });
  };
  return (
    <>
      <div className="contact">
        <div className="contact_top">
          <div className="contact_heading">
            <h6>Contact Us</h6>
            <div className="contact_cross_icon">
              <img
                src={Cross}
                alt=""
                onClick={() => {
                  setContact(false);
                  document.body.style.overflow = "visible";
                }}
              />
            </div>
          </div>
          <div className="contact_paragraph">
            <p>
              What do you like and dislike about Tenner? What business do you
              want us to add? What do you want? We are listening!
            </p>
          </div>
        </div>

        <div className="contact_textatrea">
          <textarea
            charswidth="23"
            name="text_body"
            placeholder="Write Your thoughts ..."
            value={textValue} // Bind the value of textarea to the state
            onChange={handleChange} // Call handleChange function on textarea change
            style={{ paddingLeft: "5px" }} // Add inline style with padding-left
          ></textarea>
          <div className="contact_button">
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>

        <div className="contact_profile_detail">
          <div className="contact_profile_img">
            <img src={Contactimg} alt="" />
          </div>
          <div className="contact_profile_name">
            <span>Nicholas LeJune, Founder</span>
          </div>
          <div className="contact_profile_number">
            <span>
              <img src={Call} alt="" />
              (337)2945999
            </span>
          </div>
          <div className="contact_profile_email">
            <span>
              <img src={Mail} alt="" />
              Support@tennerlocaldeals.com
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
