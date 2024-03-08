/* eslint-disable jsx-a11y/iframe-has-title */


import React,{useEffect,useState} from 'react'
import Cross from "../images/cross.png"
import axios from 'axios';

const Map = ({setMap}) => {
    const lat = '31.5843';
    const lon = '74.3828';
    const [data, setData] = useState();
    // Construct the API URL with query parameters
    useEffect(() => {
        const apiUrl = 'https://tennerdealsapi.envobyte.dev/api/v1/event_offers/list';
    
        const fetchData = async () => {
          try {
            const response = await axios.post(apiUrl);
            // Handle the API response data as needed
            console.log(response,"sdfghjkjhg");
            setData(response)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData(); // Call the fetchData function when the component mounts
    
        // If you need to clean up after the component unmounts, you can return a cleanup function
        return () => {
          // Cleanup logic (if needed)
        };
      }, []); 
      console.log(data,'123456789');

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
   <iframe
            style={{
              width: '100%',
              height: '100%',
              borderTopRightRadius: '12px',
              borderTopLeftRadius: '12px',
            }}
            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6807.880480041278!2d${lat}!3d${lon}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1658227823231!5m2!1sen!2s`}
          />
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
