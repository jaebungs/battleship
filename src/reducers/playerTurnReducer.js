const playerTurn = (state, action) => {
    if (action.type === 'PLAYER_TURN') {
        if (state.player === 'player') {
            return {
                ...state,
                player = 'ai'
            }
        } else if (state.player === 'ai') {
            return {
                ...state,
                player = 'player'
            }
        }
    }
}

export default playerTurn;