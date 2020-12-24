const initialState = {
    playerBoard: [],
    aiBoard: [],
    playerShip: [],
    aiShip: [],
    player: 'player',
    winner: ''
};

const initialBoard = () => {
    let array = []
    for (let i=0; i < 100; i++){
        const initialObject= {isTaken: false, isAttacked: false}
        array.push(initialObject)
    }
    return array
}

const gameBoardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_GAMEBOARD':
            return {...state,
            playerBoard: initialBoard(),
            aiBoard: initialBoard()
        }
        case 'Is_ATTACKED':
            if (state.player === 'player') {
                let board = [...state.playerBoard]
                board[action.location].isAttacked = true
                return {
                    ...state,
                    playerBoard: board
                }
            } else if (state.player === 'ai') {
                let board = [...state.aiBoard]
                board[action.location].isAttacked = true
                return {
                    ...state,
                    aiBoard: board
                }
            }
        case 'RESET_GAMEBOARD':
            return {
                ...state,
                ...initialState
            }
    
        default: 
            return state;
    }
} 

export default gameBoardReducer;