import React from "react";
import Cross from "../../images/cross.png";

const Event = ({ setEvent, tennerEvent }) => {
  console.log("🚀 ~ Event ~ tennerEvent.description:", tennerEvent.description);
  return (
    <>
      <div className="event">
        <div className="event_heading">
          <h6>Tenner Events</h6>
          <div className="event_cross_icon">
            <img
              src={Cross}
              alt=""
              onClick={() => {
                setEvent(false);
                document.body.style.overflow = "visible";
              }}
            />
          </div>
        </div>
        <div className="event_paragraph">
          <p>{tennerEvent.description}</p>
        </div>
      </div>
    </>
  );
};

export default Event;
