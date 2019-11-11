import React from 'react';
import Board from './board';

const Game = (props) => {
    return (
        <div className="game">
            <div className="game-board">
                <Board size={props.size} />
            </div>
        </div>
    );
}
 
export default Game;