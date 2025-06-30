import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home(){
    const navigate=useNavigate();
    
      
    return(
        <header className="App-header">
        <form >
        <div className='welcome'>Welcome '❤️❤️ <u><i>Shruti</i></u> ❤️❤️' Princess</div> <br />
        <div className='welcome'>Sorry for the delay,<br/> but I have something special for you in next page, check it out,<br/>
happy birthday to you mam</div>
<br/>
        <div className='field'>
          
          <button type="submit" id='btn' onClick={()=>{navigate("/home1")}}>Next</button>
        </div>
        <br/>
        </form>
         </header>

    );
}