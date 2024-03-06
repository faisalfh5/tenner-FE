import React, { useEffect, useState } from "react";
// import Logotop from "../../images/logotop.png";
// import Kitchen from "../../images/kitchen.png";
// import Artisan from "../../images/Artisan.png";
// import Mimal from "../../images/Mimal.png";
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

// const slidesData = [
//   {
//     id: 1,

//     logoTopSrc: Logotop,
//     companyName: "Fauget Catering",
//     heading: "Sandwich combo",
//     originalPrice: "$18",
//     discountedPrice: "$12",
//     detail:
//       "Come in today and get a smoothie plus sandwch combo in 10% off for just $10, which resular price is $12",
//     buttonText: "Redeem Now",
//     icon: location,
//   },
//   {
//     id: 2,
//     logoTopSrc: Kitchen,
//     companyName: "Kitchen Cafe",
//     heading: "Pizza Buy 1 Get 1",
//     originalPrice: "$12",
//     discountedPrice: "$8",
//     detail:
//       "Come in today and get a smoothie plus sandwich combo at 10% off for just $10, which regular price is $12",
//     buttonText: "Redeem Now",
//     icon: location,
//   },
// ];

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

const Carousal = ({ reqData, setReqData }) => {
  const [reel, setReel] = useState(false);
  const [map, setMap] = useState(false);
  const { user } = Store();
  const [winner, setWinner] = useState(false);
  const [sliderData, setSliderData] = useState([]);
  console.log("🚀 ~ Carousal ~ sliderData:", sliderData);
  const [imagepath, setImagePath] = useState("");

  const handleWinner = () => {
    setWinner(!winner);
    document.body.style.overflow = "hidden";
  };
  const handleMap = () => {
    setMap(!map);
    document.body.style.overflow = "hidden";
  };
  const handleReel = () => {
    setReel(!reel);
    document.body.style.overflow = "hidden";
  };

  const handleAddFavorite = (id) => {
    api("post", "/favourite/store", user.id)
      .then((response) => {
        console.log("Added to favorites:", response.data);
        alert("Event add to your favorite list");
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
      {reel && <Reel setReel={setReel} />}
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
                  <div className="logo_top" onClick={handleReel}>
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
                      <span>{slide?.old_price}</span> {slide?.new_price}
                    </p>
                  </div>
                </div>
                <div className="slide_detail">
                  <p>{slide?.description}</p>
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
