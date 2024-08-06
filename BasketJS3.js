import { player1 } from "./BasketJS2";

function playerStats() {
  let playerOne = [player1.points_average, player1.assists_average, player1.rebounds_average, player1.blocks_average, player1.stolen_average, player1.shots_hit_average];
  for (let i = 0; i < playerOne.length; i++){
    const element = document.querySelector('.element-01' + i);
    element.append(playerOne[i]);
  }
}
