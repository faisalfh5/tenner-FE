import React from "react";
import Cross from "../../images/cross.png";
import api from "../../api";
const Filter = ({ setFilters }) => {
  const handleGetFavorite = () => {
    api("post", "/favourite/all_list", { user_id: 2 })
      .then((response) => {
        setFilters(response.data.data);
        alert("Event add to your favorite list");
      })
      .catch((error) => {
        console.error("Error adding to favorites:", error);
      });
  };
  return (
    <>
      <div className="filter">
        <div className="filter_heading">
          <h6>Filter By</h6>
          <div className="filter_cross_icon">
            <img
              src={Cross}
              alt=""
              onClick={() => {
                setFilters(false);
                document.body.style.overflow = "visible";
              }}
            />
          </div>
        </div>
        <div className="filter_checkbox">
          <div class="checkbox">
            <label class="checkbox_label"></label>
            <span class="label_text">Newest to Oldest</span>
          </div>
          <hr className="profle_hr" />
          <div class="checkbox">
            <label class="checkbox_label"></label>
            <span class="label_text">Alphabetically</span>
          </div>
          <hr className="profle_hr" />
          <div className="checkbox" onChange={handleGetFavorite}>
            <label
              type="checkbox"
              checked={true}
              className="checkbox_label"
            ></label>
            <span className="label_text">My Favorites Only</span>
          </div>
          <hr className="profle_hr" />
          <div class="checkbox_end">
            <span class="label_end">Refresh to apply</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
