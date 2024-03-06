import React, { useState } from "react";

import About from "../../images/About.png";
import Event from "../../images/Event.png";
import Abouts from "../../components/popups/Abouttenner";
import Events from "../../components/popups/Event";
import api from "../../api";
const Dinner = () => {
  const [about, setAbout] = useState(false);
  const [event, setEvent] = useState(false);
  const [tennerEvent, setTennerEvent] = useState(false);
  const handleAbout = () => {
    setAbout(!about);
    document.body.style.overflow = "hidden";
  };
  const handleEvents = () => {
    setEvent(!event);
    document.body.style.overflow = "hidden";
    api("get", "/event/popup")
      .then((response) => {
        console.log("Success Dinner", response);
        setTennerEvent(response.data.data);
      })
      .catch((error) => {
        console.error("Error adding to favorites:", error);
      });
  };
  return (
    <>
      {about && <Abouts setAbout={setAbout} />}
      {about && (
        <div
          className="side_bar_background"
          onClick={() => {
            setAbout(false);
            document.body.style.overflow = "visible";
          }}
        />
      )}
      {event && <Events tennerEvent={tennerEvent} setEvent={setEvent} />}
      {event && (
        <div
          className="side_bar_background"
          onClick={() => {
            setEvent(false);
            document.body.style.overflow = "visible";
          }}
        />
      )}
      <div className="dinner">
        <div className="dinner_heading">
          <span>
            Get Dinner With <span>Tenner</span>
          </span>
        </div>
        <div className="dinner_box">
          <div className="dinner_box1" onClick={handleAbout}>
            <span>About Tenner</span>
            <div className="about_img">
              <img src={About} alt="" />
            </div>
          </div>
          <div className="dinner_box2" onClick={handleEvents}>
            <span>A Tenner Events</span>
            <div className="event_img">
              <img src={Event} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dinner;
