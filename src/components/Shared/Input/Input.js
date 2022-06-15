import React from "react";

import './Input.scss'

function Input(props) {
    return (
        <div className={props.className ? `${props.className} input` : 'input'}>
            {
                props.label && props.name &&
                <label
                    className={props.value ? 'input__label input__label_focus' : 'input__label'}
                    htmlFor={props.name}
                >
                    {props.label}
                </label>
            }
            <input
                className="input__field"
                type={props.type ? props.type : 'text'}
                name={props.name ? props.name : ''}
                id={props.name ? props.name : ''}
                onChange={props.change}
                value={props.value}
                autoComplete="off"
            />
            {
                !props.error.status &&
                <p className="input__error">{props.error.message}</p>
            }
        </div>
    );
}

export default Input;
