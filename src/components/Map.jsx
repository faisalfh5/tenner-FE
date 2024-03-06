/* eslint-disable jsx-a11y/alt-text */

import React from 'react'
import Cross from "../images/cross.png"

const Map = ({setMap}) => {
  return (
   <>
   <div className="map_popup">
    <div className="map_cross_icon">
    <img src={Cross} alt="" 
             onClick={() => {
              setMap(false);
              document.body.style.overflow = 'visible';
            }}/>
        </div>
   <div className='map_img'>
   <img  src="https://via.placeholder.com/337x255" />
   </div>
   <div className='Map_div'>
   <div class="map_container">
    <div class="map_inner-div">
        <div class="title">Location</div>
    </div>
    <div class="inner-div">
        <div class="phone">109 General Mouton Avenue<br/>Lafayette, LA 70501</div>
    </div>
</div>

<div class="second-container">
    <div class="titles">Call Us</div>
    <div class="inner-div">
        <div>
            <span class="phone">Phone:</span>
            <span class="phone-number">(337) 294-5999</span>
        </div>
    </div>
</div>
</div>
</div>
   </>

  )
}

export default Map
