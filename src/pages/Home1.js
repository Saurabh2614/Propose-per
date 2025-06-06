import { useNavigate } from 'react-router-dom';

import Img from '../image/home1.gif';

export default function Home1() {
    const navigate=useNavigate();
    
    return (
      <div className='d1'>
        <div className='d'>
          <img src={Img} alt='img' />
          <br/>
          <h2><strong>Sorry princess I have to ask you a one question. '🤗🤗</strong></h2><br/>
          <h4>DO You Love Me 💕💕😩🤌</h4><br/>
          <div className='but'>
            <button onClick={()=>{navigate("/home5")}} id="yess">Yes</button> &nbsp; <button onClick={()=>{navigate("/home2")}} id="no">No</button>
          </div>
        </div>
        
      </div>
    );
  }