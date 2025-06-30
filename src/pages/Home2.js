import React from "react";

import { useNavigate } from 'react-router-dom';
import Img from '../image/pic2bg.jpg';

export default function Home2() {
    const navigate=useNavigate();
        
    return(
      <header className="App-header">
      <div className='picc' alt="pic">
      <img id="pic" src={Img} alt='img' onClick={()=>{navigate("/home5")}}/>
      <div className='text' onClick={()=>{navigate("/home5")}}>
      <br/><h1>manny people have wished you on your birthday, but I wish you with all my heart and soul, that you get everything you want in life. May you always be happy and healthy. Happy birthday to you!<br />
      </h1><br />
      <h1>🎂wish you many many happy birthday once again🎂 </h1>
      <span>from</span><br/>
      <span>💕your heartless💕</span>
      </div>   
      </div>  
    </header>
    )
}