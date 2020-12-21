const CreateShip = (id, size, position) => {
    let trackHit = [];

    const isHit = (location) => {
        if (position.includes(location) && !trackHit.includes(location)) {
            trackHit.push(location)
            return true;
        } else {
            return false;
        }
    }
    
    const isSunk = () => {
        return position.length === trackHit.length && position.every(location => trackHit.includes(location))
    }


    
    return {trackHit, isHit, isSunk}
}

export default CreateShip;