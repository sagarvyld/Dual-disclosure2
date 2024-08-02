import React from 'react'

const SkipBox = ({skip , setskip}) => {
  return (
    <div className="skip_container">
    <div className="main_Skip">
         </div>
        <div className="the_skip_box">
            <p className="skip_heading">Sure you want to skip?</p>
            <p className="skip_text">We'll save this challenge for you</p>
            <div className="skip_buttons">
                <buttons className="Skip_it">Skip</buttons>
                <button className="cancel_it" onClick={()=>setskip(false)}>Cancel</button>
            </div>
        </div>
        </div>
   
  )
}

export default SkipBox