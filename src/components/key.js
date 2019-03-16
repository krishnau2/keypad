import React from 'react';
import { KeyMap } from '../constants/AppConstants'

const getLettersForKey = (key) => {
    let letters = KeyMap[key].slice(0, -1).join(' ');
    return letters;
}

export default function Key(props) {
    return (
        <button key={props.label} className="key" onClick={props.handleClick}>
            <div className="digits">{props.label}</div>
            <div>{getLettersForKey(props.label)}</div>
        </button>
    );
}