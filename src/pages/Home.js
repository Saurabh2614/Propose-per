import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

export default function Home(){
    const navigate=useNavigate();
    
      const [ad,setAd]=useState();
      const sendEmail=(e)=>{
        e.preventDefault();
        emailjs.sendForm("service_lr1jfjl","template_ea06xs5",e.target,"6_6TqZVVWNATtR8Kr");
      }
    return(
        <header className="App-header">
        <form className='send' onSubmit={sendEmail}>

        <div className='field'>
          <label id='name' >Enter your name</label><br/>
          <input type='text' id='message' onChange={(e)=>setAd(e.target.value)}></input><br/>
          <button type="submit" id='btn' onClick={()=>{navigate("/home1")}}>Add</button>
          {/* <input type='btn1' onClick={add}>Add</input> */}
        </div>
        <br/>
        </form>
         <div className='welcome'>Welcome '❤️❤️ <u><i>{ad}</i></u> ❤️❤️' Princess</div> 
      </header>

    );
}