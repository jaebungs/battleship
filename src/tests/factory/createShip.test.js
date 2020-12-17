import CreateShip from '../../factory/CreateShip';
import fixture from '../fixture/fixture';

test('should isHit return true  and push to trackHit when hit', ()=>{
    const ship = CreateShip(1, 3, [4, 14, 24])

    expect(ship.isHit(4)).toBe(true)
    expect(ship.trackHit).toEqual( [4] );
})

test('should isHit return false when not hit', ()=>{
    const ship = CreateShip(1, 3, [4, 14, 24])

    expect(ship.isHit(7)).toBe(false)
    expect(ship.trackHit).toEqual( [] );
})


test('should isSunk return true when all positios are hit', () => {
    const ship = CreateShip(1, 3, [4, 14, 24])
    ship.isHit(4)
    ship.isHit(14)
    ship.isHit(24)
    expect(ship.isSunk()).toBe(true)
})

test('should isSunk return false when not all positios are hit', () => {
    const ship = CreateShip(1, 3, [4, 14, 24])
    ship.isHit(14)
    ship.isHit(25)
    expect(ship.isSunk()).toBe(false)
})

