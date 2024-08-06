import { player1 } from "./BasketJS2";

let playerOne = [player1.points_average, player1.assists_average, player1.rebounds_average];
for (let i = 0; i < array.length; i++){
  const element = document.querySelector('.element-01' + i);
  element.append(playerOne[i].property);
}