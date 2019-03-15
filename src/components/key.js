import React from 'react';

class Key extends React.Component {
    
    render() {
        return (
            <div key={this.props.label} className="key" onClick={this.props.handleClick}>
                <div className="digits">{this.props.label}</div>
                <div>{this.props.letters}</div>
            </div>
        );
    }
}

export default Key;