import React, { Component } from 'react';
import Square from './square';
import Status from './status';
import gameStateCalculator from '../judgingEngine/gameStateCalculator';
import BoardTraverser from '../judgingEngine/boardTraverser';

class Board extends Component {
    constructor(props) {
        super(props);

        this.size = this.props.size || 15;
        let board = Array(this.size);
        for (let i = 0; i < this.size; i++) {
            board[i] = Array(this.size).fill(null);
        }
        this.gameState = null;
        this.state = {
            squares: board,
            xIsNext: true
        };
    }

    handleClick(row, col) {
        const squares = this.state.squares.slice();

        if ((this.gameState && this.gameState.gameFinished) || squares[row][col]) {
            return;
        }
        squares[row][col] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });
    }

    checkGameState() {
        this.gameState = new gameStateCalculator();
        BoardTraverser.accept(this, this.gameState);
    }

    renderRow(row) {
        let arr = [];
        for (let col = 0; col < this.size; col++) {
            arr.push(
                <Square
                    value={this.state.squares[row][col]}
                    key={row * this.size + col}
                    onClick={() => this.handleClick(row, col)} />
            );
        }
        return arr;
    }

    renderBoard(freeze) {
        let arr = [];
        for (let i = 0; i < this.size; i++) {
            arr.push(
                <div className={'board-row' + (freeze ? ' freeze' : '')} key={i}>
                    {this.renderRow(i)}
                </div>
            );
        }
        return arr;
    }

    get(row, col) {
        return this.state.squares[row][col];
    }

    set(row, col, callback) {

    }

    render() {
        if (this.size < 5) return <p>Board size can not be less than 5x5.</p>;

        this.checkGameState();

        return (
            <React.Fragment>
                <Status winner={this.gameState.winner} nextPlayer={this.state.xIsNext ? 'X' : 'O'} />
                {this.renderBoard(this.gameState.gameFinished)}
            </React.Fragment>
        );
    }
}

export default Board;