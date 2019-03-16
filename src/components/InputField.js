import React from 'react';

export default function InputField(props) {
    return(
        <div className="input-field">
            {props.result}
            {props.currentLetter}
            <span className="blinker">|</span>
        </div>
    );
}