import * as React from 'react';
import './Infotext.css';

function Infotext(props) {
  
  return (
      <div className="infotext">
            <h1>{props.heading}</h1> 
            <p>{props.info}</p>
      </div>
  );
}

export default Infotext;