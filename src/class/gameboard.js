"use strict";
export default class Gameboard {
    
    constructor(player){
        this.player = player;
        this._ships = [];
        this.gameboard = new Array(100);
        this._error = '';
    }

    get gameboard() {
        return this.gameboard
    }

    set gameboard(ship){
        if ('shipName' in ship && 'shipLength' in ship && 'shipDirection' in ship && 'shipCordination' in ship) {
            // check if ship is a valid object.
            // Check shipDirection and check if it is placeable to the gameboard.
            if (ship.shipDirection === 'horizontal'){
                if ((ship.shipCordination % 10) + ship.shipLength > 9) { //This means ship would be out of the gameboard,
                    return this.gameboard
                } else {
                    for (let i=ship.shipCordination; i <ship.shipLength; i++){
                        this.gameboard[i] = {'hit': false}
                    }
                }
            }  else if (ship.shipDirection === 'vertical'){
                if (ship.shipCordination.toString()[0] + ship.shipLength*10 > 99) { 
                    //This means ship would be out of the gameboard
                    return this.gameboard
                } else {
                    for (let i=ship.shipCordination; i <ship.shipLength; i+10){
                        this.gameboard[i] = {'hit': false};
                    }
                }
            }
            
            return this.gameboard
        }
        
    }


    player(){
        return this.player
    }

}
