import React from "react";

import "./Alert.scss"

function Alert(props) {
  return (
    props.text && <div className={props.className ? `${props.className} alert` : 'alert'}>
      {props.text}
    </div>
  );
}

export default Alert;
