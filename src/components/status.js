import React from 'react';

const Status = (props) => {
    let message;

    if (props.winner) {
        message = <strong>Player {props.winner} Won! </strong>;
    } else {
        message = 'Next player : ' + props.nextPlayer;
    }

    return (
        <div className="status">{message}</div>
    );
}

export default Status;