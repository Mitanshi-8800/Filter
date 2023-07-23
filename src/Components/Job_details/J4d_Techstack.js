import React from "react";
function J4d_Techstack ({props}) {
  
   
    return (
        <div className="J4d_Techstack">
          <div className="J4d_Techstack_field">
          <img src={props.imgsrc} alt='image' className='J4d_Techstack_field_img' />
           
          </div>
          <div className="J4d_Techstack_field_info" >
          <p className='J4d_Techstack_field_info_mid'> {props.title} </p>
          <h3 className='J4d_Techstack_field_info_last'> {props.sname} </h3>
          </div>
        </div>
      );
    }

export default J4d_Techstack;