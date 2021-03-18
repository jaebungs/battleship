import React, {useState, Fragment} from 'react';
import Gameboard from '../class/gameboard.js';

const InitializeGame = () => {
    const [playerName, setPlayerName] = useState('');

    const handleInputOnChange = (e) => {
        setPlayerName(e.target.value)
        console.log(e.target.value)
    }

    const handleButtonClicked = () => {
        if (playerName.trim() !== ''){
            const gameboard = new Gameboard(playerName)
            console.log(gameboard)
        }
    }

    return (
        <Fragment>
            <input type="text" onChange={handleInputOnChange} />
            <button onClick={handleButtonClicked}>Game Start!</button>
        </Fragment>
    )
}

export default InitializeGame