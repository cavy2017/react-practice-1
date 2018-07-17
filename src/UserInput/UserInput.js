import React from 'react';

const userInput = (props) => {
    const inputStyle = {
        marginTop: '100px',
        border: '1px solid green',
        padding: '2px 10px',
        borderRadius: '3px'
      };
    return <input type="text" style={inputStyle} onChange={props.changed} value={props.name}/>
}

export default userInput;