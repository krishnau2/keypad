import React from 'react'

export default function ActionButtons(props) {
    return(
        <div className="actions">
            <button className="clear-button" onClick={props.clearData}>Clear</button>
            <button className="remove-button" onClick={props.removeLastLetter}>Remove</button>
            <div className="clear"></div>
        </div>
    )
}