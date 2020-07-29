import React from 'react';
// import 'NumInput.css'

export const NumInput = (props) => {
    return (
        <input onChange={props.handleNumValue} value={props.number} placeholder="Enter Number..."
            className="textbox" />
    )
}
