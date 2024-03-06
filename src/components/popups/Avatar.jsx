import React, { useState } from "react";
import Avatar1 from "../../images/avatar1.svg";
import Avatar2 from "../../images/avatar2.svg";
import Avatar3 from "../../images/avatar3.svg";
import { toast } from "react-toastify";

import Cross from "../../images/cross.png";
import api from "../../api";
import { Store } from "../../StoreContext";

const Avatar = ({ setAvatar }) => {
  const { user } = Store();
  console.log("🚀 ~ Avatar ~ user:", user.id);
  const avatarImages = [Avatar1, Avatar2, Avatar3];
  const formData = new FormData();

  const [selectedImageFilename, setSelectedImageFilename] = useState(null);
  console.log("🚀 ~ Avatar ~ selectedImageFilename:", selectedImageFilename);

  const handleImageChange = (imagePath) => {
    const parts = imagePath.split(".");
    const uniqueIdentifier = parts[1];
    setSelectedImageFilename(uniqueIdentifier);
  };

  const handleSubmit = () => {
    const formData = new FormData(); // Create a new FormData object

    // Append user_id and photo parameters to the formData object
    formData.append("user_id", user.id);
    formData.append("photo", selectedImageFilename);

    console.log("🚀 ~ handleSubmit ~ formData:", formData);
    api("post", "/profile/update_profile", formData)
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
              onClick={() => handleImageChange(avatar)}
              style={{
                border:
                  selectedImageFilename === avatar.split(".")[1]
                    ? "2px solid blue"
                    : "none",
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
