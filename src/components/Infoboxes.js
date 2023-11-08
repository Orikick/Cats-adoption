import * as React from 'react';
import './Infoboxes.css';

function Infoboxes(props) {
  
  return (
      <div className="infoboxes">
        <div>
            <img src={props.img1}></img>
            <h2>{props.head1}</h2>
            <p>{props.par1}</p>
        </div>
        <div>
            <img src={props.img2}></img>
            <h2>{props.head2}</h2>
            <p>{props.par2}</p>
        </div>
        <div>
            <img src={props.img3}></img>
            <h2>{props.head3}</h2>
            <p>{props.par3}</p>
        </div>
      </div>
  );
}

export default Infoboxes;