import { player1 } from "./BasketJS2";

let playerOne = [player1.name, player1.points, player1.rebounds, player1.assists, player1.blocks, player1.stolen];
for(let i = 0; i < array.length; i++){
  const element = document.querySelector('.element-01' + i);
  element.append(playerOne[i].property)
}