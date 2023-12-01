import * as React from 'react';
import "../css/management.css"

export default function NearBy(props) {
  return (
    <>
    <div  >
      <div className='management-page-header'><span style={{ borderBottom: "2px solid #B8860B", display: 'inline-block',fontFamily: "cursive",color:"#B8860B"}}> Near-By Views</span></div>
      <div className='management-page-container'><span style={{ color:"black"}}>1) Dev Temple</span></div>
      <div className='management-page-container'><span style={{ color:"black"}}>2) Maa Satya Chandi Mandir</span></div>
      <div className='management-page-container'><span style={{ color:"black"}}>3) Maa Tara Chandi Mandir</span></div>
      <div className='management-page-container'><span style={{ color:"black"}}>4) Maa Mundeshwari Mandir</span></div>
      <div className='management-page-container'><span style={{ color:"black"}}>5) Maa Tutla Bhawani Mandir</span></div>
      <div className='management-page-container'><span style={{ color:"black"}}>6) Bodh Gaya</span></div>
      <div className='management-page-container'><span style={{ color:"black"}}>7) Rajgir</span></div>
    </div>
    <div>
      <ul className='facilities-list'>
        <li>
          Pick-Up and Drop Service Available
          </li>
          <li>

        Cab facilities Available
          </li>
          <li>

        Nearby Airport and Railway Station pickup and drop available
          </li>
      
    </ul>
    </div>
    </>
  );
}
