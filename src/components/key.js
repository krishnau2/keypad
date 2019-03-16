import React from 'react';
import { KeyMap } from '../constants/AppConstants'

class Key extends React.Component {

    getLettersForKey = (key) => {
        let letters = KeyMap[key].slice(0, -1).join(' ');
        return letters;
    }
    
    render() {
        return (
            <div key={this.props.label} className="key" onClick={this.props.handleClick}>
                <div className="digits">{this.props.label}</div>
                <div>{this.getLettersForKey(this.props.label)}</div>
            </div>
        );
    }
}

export default Key;