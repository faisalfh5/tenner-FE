import React, { useState } from "react";
// import Avatar1 from "../../images/avatar1.svg";
// import Avatar2 from "../../images/avatar2.svg";
// import Avatar3 from "../../images/avatar3.svg";
import { toast } from "react-toastify";

import Cross from "../../images/cross.png";
import api from "../../api";
import { Store } from "../../StoreContext";

const Avatar = ({ setAvatar, avatarImages }) => {
  const { user } = Store();
  console.log("🚀 ~ Avatar ~ user:", user.id);
  // const avatarImages = [Avatar1, Avatar2, Avatar3];

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  console.log("🚀 ~ Avatar ~ selectedImageIndex:", selectedImageIndex);

  const handleImageChange = (imageIndex) => {
    setSelectedImageIndex(imageIndex);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    api("get", `/UpdateuserAvatar/${user.id}/${selectedImageIndex}`)
      .then((response) => {
        if (response.status === 200) {
          toast.success("Image Updated Successfully");
          setAvatar(false);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="avatar">
        <div className="avatar_heading">
          <h6>Choose Your Avatar</h6>
          <div className="avatar_cross_icon">
            <img
              src={Cross}
              alt=""
              onClick={() => {
                setAvatar(false);
                document.body.style.overflow = "visible";
              }}
            />
          </div>
        </div>
        <div className="avatar-imgs">
          {/* Map over the avatarImages array to render the images */}
          {avatarImages.map((avatar, index) => (
            <img
              key={index}
              src={avatar}
              alt={`Avatar ${index + 1}`}
              onClick={() => handleImageChange(index)}
              style={{
                border:
                  selectedImageIndex === index ? "2px solid blue" : "none",
              }}
            />
          ))}
        </div>
        <div className="avatar_button">
          <button onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </>
  );
};

export default Avatar;
