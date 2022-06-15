import React from "react";
import { Link } from "react-router-dom";
import BoxProfile from "../BoxProfile";

import "./MobNavigation.scss";

function MobNavigation(props) {
    const [showMenu, setShowMenu] = React.useState(false)

    const toggleMenu = () => showMenu ? setShowMenu(false) : setShowMenu(true);

    window.addEventListener("click", e => {
        const target = e.target;
        if (!target.closest(".mob-navigation__toggle") && !target.closest(".mob-navigation__container")) {
            setShowMenu(false);
        }
    })

    return (
        <div className={props.className ? `${props.className} mob-navigation` : "mob-navigation"}>
            <button className="mob-navigation__toggle" onClick={toggleMenu} />
            <div className={showMenu ? "mob-navigation__wrapper mob-navigation__wrapper_show" : "mob-navigation__wrapper"}>
                <div className={showMenu ? "mob-navigation__container mob-navigation__container_show" : "mob-navigation__container"}>
                    <button className="mob-navigation__toggle mob-navigation__toggle_close" onClick={toggleMenu} />
                    <nav className="mob-navigation__mob-menu mob-menu">
                        <Link className="mob-menu__link" to="/" onClick={toggleMenu}>Главная</Link>
                        <Link className="mob-menu__link" to="/movies" onClick={toggleMenu}>Фильмы</Link>
                        <Link className="mob-menu__link" to="/saved-movies" onClick={toggleMenu}>Сохранённые фильмы</Link>
                    </nav>
                    <BoxProfile className="mob-navigation__box-profile" click={toggleMenu} />
                </div>
            </div>
        </div>
    );
}

export default MobNavigation;
