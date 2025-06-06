import React from "react";

import Img from '../image/home4.gif';
import { useNavigate } from 'react-router-dom';
export default function Home4() {
   const navigate=useNavigate();
        // function moveRandomEl(elm) {
        //   elm.style.position = "absolute";
        //   elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
        //   elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
        // }
        
        // const moveRandom = document.querySelector("noo");
        
        // moveRandom.addEventListener("mouseenter", function (e) {
        //   moveRandomEl(e.target);
        // });


    return(
        <div className='d1'>
      <div className='d'>
      <img src={Img} alt='img' />
        <br/>
        <h2><strong>Maan Ja Na! Kitna Bhav Khayegi ??? '🤗🤗</strong></h2><br/>
        <h4>DO You Love Me 💕💕😩🤌</h4><br/>
        <div className='but'>
          <button onClick={()=>{navigate("/home5")}} id="yess">Yes</button> &nbsp; <button  id="noo">No</button>
        </div>
      </div>
      
    </div>
    )
}
