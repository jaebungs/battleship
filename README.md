# Battleship Game - OOP,TDD
### Introduction
I think I made many Odin Project practices without fully understanding Javascript.  
I came back to TOP and decided to do this project with React, OOP and TDD.  

## Process
There are many different type of ships, but the game only needs to know if any player got all the ships.  
It does not really need to know what type of ships are placed in a specific position.  
Ex) if the user got the right position, total--;. Check if total === 0, if yes means game over.  

## Think how the game flows...

1. Put user name.  
2. Create gameboard.  
3. Place ships.  
4. If confirmed, place ships in the gameboard.  
5. Create AI gamebaord with randomly placed ships.  
6. User click  
7. Verify hit or miss.  
8. If all ships got hit, that player loses.  
9. Display winner.  
10. Reset.  

## Lets think about classes first.
class - Gameboard for each player  
    method - getBoard  
    method - placeShips  
    method - reset? or create a new class?  
class - Ship (5 ships - 5-Aircraft Carreir 4-Battleship 3-Submarine 3-Destroyer 2-Cruiser)  
    this.shipName  
    this.shipLength  
    this.shipDirection  
    this.shipCordination  

