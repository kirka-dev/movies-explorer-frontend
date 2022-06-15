import React from "react";
import { UserContext } from "../../../contexts/UserContext";
import useWindowSize from "../../../contexts/WindowSizeContext";
import Logotype from "../Logotype/Logotype";
import Navigation from "../Navigation/Navigation"
import BoxProfile from "./components/BoxProfile/BoxProfile";
import MobNavigation from "./components/BoxProfile/MobNavigation/MobNavigation";

import "./Header.scss";

function Header(props) {
  const [width] = useWindowSize();
  const {isLoggedIn} = React.useContext(UserContext);

  return (
    <header className="header">
      <div className="header__container container">
        <Logotype className="header__logotype" />
        {
          (width < 1024 ?
            isLoggedIn.value ?
              <MobNavigation className="header__mob-navigation" />
              :
              <BoxProfile className="header__box-profile" />
            :
            <>
              <Navigation className="header__navigation" />
              <BoxProfile className="header__box-profile" />
            </>
          )
        }
      </div>
    </header>
  );
}

export default Header;
