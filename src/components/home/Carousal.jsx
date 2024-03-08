import React, { useEffect, useState } from "react";
// import Logotop from "../../images/logotop.png";
// import Kitchen from "../../images/kitchen.png";
// import Artisan from "../../images/Artisan.png";
// import Mimal from "../../images/Mimal.png";
import { toast } from "react-toastify";

import Love from "../../images/love.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Winner from "../popups/Winner";
import api from "../../api";
import location from "../../images/loation.svg";
import Map from "../Map";
import Reel from "../Reel";
import { Store } from "../../StoreContext";

const settings = {
  dots: true,

  speed: 300,

  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Carousal = ({ sliderData, setSliderData }) => {
  const [reel, setReel] = useState(false);
  const [map, setMap] = useState(false);
  const { user } = Store();
  const [winner, setWinner] = useState(false);
  const [reelMedia, setReelMedia] = useState({
    media: null,
    logo: null,
    mediaType: null,
  });
  const [imagepath, setImagePath] = useState("");
  const [mediaPath, setMediaPath] = useState("");

  const handleWinner = () => {
    setWinner(!winner);
    document.body.style.overflow = "hidden";
  };
  const handleMap = () => {
    setMap(!map);
    document.body.style.overflow = "hidden";
  };
  const handleReel = (media, logo, url) => {
    setReelMedia({ media, logo, url });
    setReel(!reel);
    document.body.style.overflow = "hidden";
  };

  const handleAddFavorite = (eventId) => {
    api("post", "/favourite/store", { user_id: user.id, event_id: eventId })
      .then((response) => {
        console.log("Added to favorites:", response.data);
        toast.success("Event add to your favorite list");
      })
      .catch((error) => {
        console.error("Error adding to favorites:", error);
      });
  };

  useEffect(() => {
    api("post", "/event_offers/list", { user_id: 5 })
      .then((response) => {
        console.log("Success Data:", response.data);
        setImagePath(response?.data?.r_logo_path);
        setMediaPath(response?.data?.media_content_path);
        setSliderData(response?.data?.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [user.id]);

  return (
    <>
      {winner && <Winner setWinner={setWinner} />}
      {winner && (
        <div
          className="side_bar_background"
          onClick={() => {
            setWinner(false);
            document.body.style.overflow = "visible";
          }}
        />
      )}
      {reel && <Reel reelMedia={reelMedia} setReel={setReel} />}
      {reel && (
        <div
          className="side_bar_backgroundss"
          onClick={() => {
            setReel(false);
            document.body.style.overflow = "visible";
          }}
        />
      )}
      {map && <Map setMap={setMap} />}
      {map && (
        <div
          className="side_bar_background"
          onClick={() => {
            setMap(false);
            document.body.style.overflow = "visible";
          }}
        />
      )}
      <div class="slider_back">
        {sliderData.length > 1 ? (
          <Slider {...settings}>
            {sliderData.map((slide) => (
              <div className="slider_box" key={slide.id}>
                <div className="Slider_logo">
                  <div
                    className="logo_top"
                    onClick={() =>
                      handleReel(
                        mediaPath + slide?.media_content,
                        imagepath + slide?.r_logo,
                        slide?.media_type
                      )
                    }
                  >
                    <img src={imagepath + slide?.r_logo} alt="" />
                  </div>
                  <div className="location">
                    <img src={location} alt="" onClick={handleMap} />
                  </div>
                </div>
                <div className="slide_head">
                  <span>{slide?.rest_title}</span>
                </div>
                <div className="slider_heading_price">
                  <div className="slider_heading">
                    <span>{slide?.offer_title}</span>
                  </div>
                  <div className="Price">
                    <p>
                      <span style={{ display: "flex" }}>
                        {slide?.new_price !== null &&
                        slide?.old_price !== null ? (
                          <>
                            <span className="old_price">{slide.new_price}$</span>
                            <span >{slide.old_price}$</span>
                          </>
                        ) : slide?.new_price !== null ? (
                          <span>{slide.new_price}</span>
                        ) : slide?.old_price !== null ? (
                          <span>{slide.old_price}</span>
                        ) : slide?.discount_amount !== null ? (
                          <span>{slide.discount_amount}%</span>
                        ) : slide?.offer_type !== null ? (
                          <span>{slide.offer_type}</span>
                        ) : (
                          <span>No Price Available</span>
                        )}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="slide_detail">
                  <p>{slide?.description}</p>
                </div>
                <div className="slide_icon_button">
                  <div
                    className="love_icon"
                    onClick={() => handleAddFavorite(slide.id)}
                  >
                    <img src={Love} alt="" />
                  </div>
                  <div className="slidebutton">
                    <button onClick={handleWinner}>Reedem Me</button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="slider_box" key={sliderData[0]?.id}>
            <div className="Slider_logo">
              <div className="logo_top" onClick={handleReel}>
                <img src={imagepath + sliderData[0]?.r_logo} alt="" />
                <div className="location">
                  <img src={location} alt="" onClick={handleMap} />
                </div>
              </div>
            </div>
            <div className="slide_head">
              <span>{sliderData[0]?.rest_title}</span>
            </div>
            <div className="slider_heading_price">
              <div className="slider_heading">
                <span>{sliderData[0]?.offer_title}</span>
              </div>
              <div className="Price">
                <p>
                  <span>{sliderData[0]?.old_price}</span>{" "}
                  {sliderData[0]?.new_price}
                </p>
              </div>
            </div>
            <div className="slide_detail">
              <p>{sliderData[0]?.description}</p>
            </div>
            <div className="slide_icon_button">
              <div className="love_icon" onClick={handleAddFavorite}>
                <img src={Love} alt="" />
              </div>
              <div className="slidebutton">
                <button onClick={handleWinner}>Reedem Me</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Carousal;
