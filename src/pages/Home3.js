import React from "react";
import Img from '../image/home3.gif';
import { useNavigate } from 'react-router-dom';

export default function Home3() {
  const navigate=useNavigate();
          
    return(
        <div className='d1'>
      <div className='d'>
      <img src={Img} alt='img' />
        <br/>
        <h2><strong>Ek Baar Or Soch Le '🥹🥹</strong></h2><br/>
        <h4>DO You Love Me 💕💕😩🤌</h4><br/>
        <div className='but'>
          <button onClick={()=>{navigate("/home5")}} id="yess">Yes</button> &nbsp; <button onClick={()=>{navigate("/home4")}} id="no">No</button>
        </div>
      </div>
      
    </div>
    )
};