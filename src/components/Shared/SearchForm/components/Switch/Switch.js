import React from "react";

import "./Switch.scss";

function Switch(props) {
    return (
        <div className="switch">
            <label className="switch__label">
                <input type="checkbox" onClick={props.switch} checked={props.value} />
                <span className="switch__slider"></span>
            </label>
            <span className="switch__text">{props.children}</span>
        </div>
    );
}

export default Switch;
