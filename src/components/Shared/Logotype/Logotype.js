import React from "react";
import { Link } from "react-router-dom";

import './Logotype.scss'

function Logotype(props) {
  return (
    <div className={props.className ? `${props.className} logotype` : 'logotype'}>
      <Link to="/">D</Link>
    </div>
  );
}

export default Logotype;
