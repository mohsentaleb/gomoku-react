import React from 'react';

const Square = (props) => {
    let color = '';
    if (props.value === 'X') {
        color = ' green'
    } else if (props.value === 'O') {
        color = ' red'
    }
    return (
        <button className={'square' + color} onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Square;