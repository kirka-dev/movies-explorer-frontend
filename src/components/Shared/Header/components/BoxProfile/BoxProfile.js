import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../../../contexts/UserContext";

import "./BoxProfile.scss";

function BoxProfile(props) {
    const {isLoggedIn} = React.useContext(UserContext);

    return (
        <div className={props.className ? `${props.className} box-profile` : 'box-profile'}>
            {isLoggedIn.value ?
                <Link className="box-profile__link box-profile__link_profile" to="/profile" onClick={props.click}>Аккаунт</Link>
                :
                (
                    <>
                        <Link className="box-profile__link" to="/register">Регистрация</Link>
                        <Link className="box-profile__button" to="/login">Вход</Link>
                    </>
                )
            }
        </div>
    );
}

export default BoxProfile;
