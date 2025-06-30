import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Img from '../image/pic1bg.jpg';
import Img1 from '../image/pic1.jpg';
import Img2 from '../image/pic2.jpg';
import Img3 from '../image/pic3.jpg';
import Img4 from '../image/pic4.jpg';
import Img5 from '../image/pic5.jpg';


export default function Home1() {
    const navigate=useNavigate();
    const[show,setShow]=useState(false);
    const[show1,setShow1]=useState(false);
    const[show2,setShow2]=useState(false);
    const[show3,setShow3]=useState(false);
    const[show4,setShow4]=useState(false);



    
    return (
      <header className="App-header1">
          <div className='picc' alt="pic" onClick={()=>{navigate("/home3")}}>
            <img id="pic" src={Img} alt='img' onClick={()=>{navigate("/home3")}}/>
              
              <img id='pic1' src={Img1} alt='img' onClick={()=>setShow(true)} title='Count your life by smiles, not tears. Count your age by friends, not years. Happy birthday!💕🎂'/>
              {show && <div className='s'>Count your life by smiles, not tears. Count your age by friends, not years. Happy birthday!💕🎂 </div>}
              <img id='pic2' src={Img2} alt='img' onClick={()=>setShow1(true)} title='Happy birthday! I hope all your birthday wishes and dreams come true.🤗❤️'/>
              {show1 && <div className='s'>Happy birthday! I hope all your birthday wishes and dreams come true.🤗❤️ </div>}
              
              <img id='pic3' src={Img3} alt='img' onClick={()=>setShow2(true)} title='A wish for you on your birthday, whatever you ask may you receive, whatever you seek may you find, whatever you wish may it be fulfilled on your birthday and always. Happy birthday!😩🤌'/>
              {show2 && <div className='s'>A wish for you on your birthday, whatever you ask may you receive, whatever you seek may you find, whatever you wish may it be fulfilled on your birthday and always. Happy birthday!😩🤌</div>}
              
              <img id='pic4' src={Img4} alt='img' onClick={()=>setShow3(true)} title='Another adventure filled year awaits you. Welcome it by celebrating your birthday with pomp and splendor. Wishing you a very happy and fun-filled birthday!🫣😚'/>
              {show3 && <div className='s'>Another adventure filled year awaits you. Welcome it by celebrating your birthday with pomp and splendor. Wishing you a very happy and fun-filled birthday!🫣😚 </div>}
              
              <img id='pic5' src={Img5} alt='img' onClick={()=>setShow4(true)} title='This birthday, I wish you abundant happiness and love. May all your dreams turn into reality and may lady luck visit your home today. Happy birthday to one of the sweetest people I’ve ever known.💕❤️'/>
              {show4 && <div className='s'>This birthday, I wish you abundant happiness and love. May all your dreams turn into reality and may lady luck visit your home today. Happy birthday to one of the sweetest people I’ve ever known.💕❤️ </div>}
              
          </div>
          
      </header>
    )
  }