import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game'
import './styles.css';

ReactDOM.render(
    <Game size={15} />,
    document.getElementById('root')
);
