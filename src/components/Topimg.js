import * as React from 'react';
import './Topimg.css';

function Topimg(props) {
  
  return (
    <div >
      <div className="topimg">
            <img src={props.img}></img>
            <h1>{props.heading}</h1> 
      </div>
    </div>
  );
}

export default Topimg;
