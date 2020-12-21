export const createShip = (id, length, position = []) => ({
    type: 'CREATE_SHIP',
    id,
    length,
    position
})

export const isShipHit = (location) => ({
    type: 'IS_SHIP_HIT',
    location
})

export const isShipSunk = () => ({
    type: 'IS_SHIP_SUNK'
})