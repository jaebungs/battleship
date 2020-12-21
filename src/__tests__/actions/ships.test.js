import { createShip, isShipHit, isShipSunk } from '../../actions/ships';

test('should setup createShip action object', ()=>{
    const action = createShip('destroyer', 3, [5,6,7]);
    expect(action).toEqual({
        type: 'CREATE_SHIP',
        id: 'destroyer',
        length:3,
        position: [5,6,7]
    })
})

test('should setup isShipHit action object', ()=>{
    const action = isShipHit(30);
    expect(action).toEqual({
        type: 'IS_SHIP_HIT',
        location: 30
    })
})

test('should setup isShipSunk action object', ()=>{
    const action = isShipSunk();
    expect(action).toEqual({
        type: 'IS_SHIP_SUNK'
    })
})