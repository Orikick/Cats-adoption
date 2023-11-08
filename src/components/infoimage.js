import * as React from 'react';
import './infoimage.css';

function Infoimage(props) {
  
  return (
      <div className="infoimage">
        <div>
            <h1>{props.head}</h1>
            <p>{props.par}</p>
        </div>
        <img src={props.img}></img>
      </div>

  );
}

export default Infoimage;