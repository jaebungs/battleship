import playerTurn from '../../reducers/playerTurnReducers';
import playerFixture from '../fixtures/playerFixture';
import aiFixture from '../fixtures/aiFixture';

test('should change player property value to ai', ()=>{
    const state = playerTurn(playerFixture, {type: 'PLAYER_TURN'})

    expect(state.player).toBe('ai')
})

test('should change player property value to player', ()=>{
    const state = playerTurn(aiFixture, {type: 'PLAYER_TURN'})

    expect(state.player).toBe('player')
})