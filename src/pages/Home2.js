import React from "react";

import { useNavigate } from 'react-router-dom';
import Img from '../image/home2.gif';

export default function Home2() {
    const navigate=useNavigate();
        
    return(
        <div className='d1'>
      <div className='d'>
      
      <img src={Img} alt='img' />
      <br/>
        <h2><strong>Soch Le Acche Se '😫😫</strong></h2><br/>
        <h4>DO You Love Me 💕💕😩🤌</h4><br/>
        <div className='but'>
          <button onClick={()=>{navigate("/home5")}} id="yess">Yes</button> &nbsp; <button onClick={()=>{navigate("/home3")}} id="no">No</button>
        </div>
      </div>
      
    </div>
    )
}