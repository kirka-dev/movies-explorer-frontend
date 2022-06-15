import React from "react";

import './NavTab.scss'

function NavTab(props) {
  return (
    <ul className="navtab">
      <li className="navtab__button">О проекте</li>
      <li className="navtab__button">Технологии</li>
      <li className="navtab__button">Студент</li>
    </ul>
  );
}

export default NavTab;
