export const createGameboard = () => ({
    type: 'CREATE_GAMEBOARD'
})

export const placeShip = (location, horizontal = true) => ({
    type: 'PLACE_SHIP',
    location,
    horizontal
})

export const isAttacked = (location) => ({
    type: 'Is_ATTACKED',
    location
})

export const resetGameboard = () => ({
    type: 'RESET_GAMEBOARD'
})