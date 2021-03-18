import { expect } from '@jest/globals';
import Gameboard from '../../class/gameboard.js';

test('Player name should return.', ()=>{
    let player1 = new Gameboard('IHitAllTheTime');

    expect(player1.player).toBe('IHitAllTheTime')
})