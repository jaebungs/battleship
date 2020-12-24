import gameBoardReducer from '../../reducers/gameboardReducer';
import playerFixture from '../fixtures/playerFixture';
import aiFixture from '../fixtures/aiFixture';

const initialBoard = () => {
    let array = []
    for (let i=0; i < 100; i++){
        const initialObject= {isTaken: false, isAttacked: false}
        array.push(initialObject)
    }
    return array
};

test('should create 100 obejcts in playerBoard & aiBoard array', ()=>{
    const state = gameBoardReducer(undefined, {type: 'CREATE_GAMEBOARD'});

    expect(state).toEqual({
        playerBoard: initialBoard(),
        aiBoard: initialBoard(),
        playerShip: [],
        aiShip: [],
        player: 'player',
        winner: ''
    })
})

test('should change playerBoard isAttacked property of specific location', ()=>{
    const state = gameBoardReducer(playerFixture, {type: 'Is_ATTACKED', location: 8} );

    expect(state.playerBoard[8]).toEqual({isTaken: false, isAttacked: true})
})

test('should change aiBoard isAttacked property of specific location', ()=>{
    const state = gameBoardReducer(aiFixture, {type: 'Is_ATTACKED', location: 4} );

    expect(state.aiBoard[4]).toEqual({isTaken: false, isAttacked: true})
})

test('should reset board', ()=>{
    const state = gameBoardReducer(playerFixture, {type: 'RESET_GAMEBOARD'} );

    expect(state).toEqual({
        playerBoard: [],
        aiBoard: [],
        playerShip: [],
        aiShip: [],
        player: 'player',
        winner: ''
    })
})