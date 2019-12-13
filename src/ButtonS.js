import React from 'react';

function ButtonS(props) {
    return (
        <button 
            className="counter-button" 
            style={{
                background: props.bgColor,
                color: props.textColor
            }}
            onClick={props.onClick}
        >
            {props.label}
        </button>
    )
}

export default ButtonS;