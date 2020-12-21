import { createGameboard, placeShip, isAttacked, resetGameboard } from '../../actions/gameboard';

test('should setup createGameboard action object', ()=>{
    const action = createGameboard();
    expect(action).toEqual({type: 'CREATE_GAMEBOARD'});
})

test('should setup resetGameboard action object', ()=>{
    const action = resetGameboard();
    expect(action).toEqual({type: 'RESET_GAMEBOARD'});
})


test('should setup placeShip with horizontal false value action object', ()=>{
    const action = placeShip(4, false);
    expect(action).toEqual({
        type: 'PLACE_SHIP',
        location: 4,
        horizontal: false
    });
})

test('should setup placeShip with horizontal default value action object', ()=>{
    const action = placeShip(19);
    expect(action).toEqual({
        type: 'PLACE_SHIP',
        location: 19,
        horizontal: true
    });
})

test('should setup isAttacked action object', ()=>{
    const action = isAttacked(14);
    expect(action).toEqual({
        type: 'Is_ATTACKED',
        location: 14
    });
})