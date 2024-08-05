import player1 from './BasketJS2.js';

let playerOne = [player1.points, player1.rebounds, player1.assists, player1.blocks, player1.stolen, `${player1.shots_hit}|${player1.shots_missed}`, `${player1.three_hit}|${player1.three_missed}`, player1.freethrows_percentage];
for (let i = 0; i < playerOne.length; i++) {
  const element = document.querySelector('.element-01' + i);
  element.append(playerOne[i].property);
}
