import { playerTurn } from '../../actions/playerTurn';

test('should setup PlayerTrun action object', ()=>{
    const action = playerTurn();
    expect(action).toEqual({
        type: 'PLAYER_TURN'
    })
})