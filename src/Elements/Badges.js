import React from 'react';
import "./Badges.css";


function Badges(props) {
    const id = props.id;
    
   if(id%2===0)
   { return (
        <div className="circle">
           {
             <div className="badge box bounce-1">
             <img src={props.s_image} alt="Skills"/>
             <span class="tooltiptext"> {props.name} </span>
         </div>    
            }
       </div>
    )}
    return (
        <div className="circle">
           
          
           {
               
            <div  className="badge box bounce-2">
                <img src={props.s_image} alt="Skills"/>
                <span class="tooltiptext"> {props.name} </span>
            </div>   
            }
       </div>
    )


}

export default Badges;


// Skill Badges initial --  

  {/* <div className="badge box bounce-1">
                <img src={props.s_image} alt="Skills"/>
                <span class="tooltiptext"> {props.name} </span>
            </div>    */}