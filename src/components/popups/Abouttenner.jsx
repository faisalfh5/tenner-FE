import React from 'react'
import Cross from "../../images/cross.png"
import Aboutimg from "../../images/aboutimg2.png"
import Logos from "../../images/logose.svg"
import Logoes from "../../images/logost.svg"
import Video from "../../images/video.svg"
const Abouttenner = ({setAbout}) => {
  return (
    <>
    <div className="about_tenner">
    <div className="about_heading">
            <h6>About Tenner</h6>
            <div className="about_cross_icon">
            <img src={Cross} alt="" 
             onClick={() => {
              setAbout(false);
              document.body.style.overflow = 'visible';
            }}/>
            </div>
            </div>
        
        <div className="about_tenner_img">
        <div className="about_logo">
            <div className="about_logo_top">
            <img src={Logoes} alt="" />  
            <img src={Logos} alt="" />
            </div>
            <div className='aboutlogo_down'>
            <span>Local Deals</span>
            </div>
            </div> 
            <div className="about_video">
              <img src={Video} alt="" />
            </div>
      
        </div>
        <div className="about_icon_text">
            <div className="about_imgpart">
              <img src={Aboutimg} alt="" />
            </div>
            <div className="about_text">
                <p>So, be on the lookout for this sticker all across Lafayette! If you see it, then scan the QR code when walking in to see how you can save money!</p>
            </div>
        </div>
        </div>
    </>
  )
}

export default Abouttenner