import React from 'react'
import BackArrow from "../icons/Backicon"
const Emailcheck = () => {
  return (
    <div className='emailcheck'>
       
      <div>
        <BackArrow/>
      </div>
      <div className="mailcheck_detail">
        <span>Check Your Email!</span>
        <p>An email has been sent to you promoting you to change your password. Please check your email</p>
        <div className="backtosignin">
            <button>Back to Sign In</button>
        </div>
      </div>
      </div>
     
  )
}

export default Emailcheck
