import React from 'react'
import Winners from '../../images/winner.png'
import Cross from "../../images/cross.png"
import Share from "../../images/share.svg"
const Winner = ({setWinner}) => {
  return (
    <>
    <div className="winner">
    <div className="winner_top">
      <div className="winner_heading">
        <h6>Winner Winner Tenner Dinner!</h6>
        <div className="winner_cross_icon">
        <img
            src={Cross}
            alt=""
            onClick={() => {
              setWinner(false);
              document.body.style.overflow = "visible";
            }}
          />
        </div>
        </div>
        <div className="winner_paragraph">
        <p>Show this to your server when checking out to redeem your exclusive Tenner Special!</p>
        </div>
        </div>
     
       <div className="winner_img">
<img src={Winners} alt="" />
       </div>
       <div className="winner_span">
<span>Share this deal with your friends</span>
       </div>
       <div className="winner_button">
        <button ><img src={Share} alt="" />Share</button>
       </div>
   </div></>
  )
}

export default Winner