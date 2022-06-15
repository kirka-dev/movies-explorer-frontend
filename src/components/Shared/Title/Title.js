import React from "react";

import './Title.scss';

function Title(props) {
  return (
    <h2 className={props.className ? `${props.className} title` : 'title'}>{props.children}</h2>
  );
}

export default Title;
