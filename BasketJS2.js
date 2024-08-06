// Kreiranje igrača/objekata:

let player1 = {
  name: "Ivan Maretić",
  matches: 1,
  points: 9,
  rebounds: 11,
  assists: 2,
  blocks: 1,
  stolen: 1,
  shots_hit: 6,
  shots_missed: 31,
  three_hit: 3,
  three_missed: 21,
  freethrows_hit: 0,
  freethrows_missed: 1
}

player1.points_average = player1.points / player1.matches;
player1.rebounds_average = player1.rebounds / player1.matches;
player1.assists_average = player1.assists / player1.matches;
player1.blocks_average = player1.blocks / player1.matches;
player1.stolen_average = player1.stolen / player1.matches;
player1.shots_hit_average = player1.shots_hit / player1.matches;
player1.shots_missed_average = player1.shots_missed / player1.matches;
player1.three_hit_average = player1.three_hit / player1.matches;
player1.three_missed_average = player1.three_missed / player1.matches;
player1.three_missed_average = player1.three_missed / player1.matches;
player1.shots_percentage = (player1.shots_hit / player1.shots_missed) * 100;
player1.three_percentage = (player1.three_hit / player1.three_missed) * 100;
player1.freethrows_percentage = (player1.freethrows_hit / player1.freethrows_missed) * 100;

let player2 = {
  name: "Toni Maretić",
  matches: 1,
  points: 10,
  rebounds: 20,
  assists: 3,
  blocks: 0,
  stolen: 1,
  shots_hit: 8,
  shots_missed: 25,
  three_hit: 2,
  three_missed: 7,
  freethrows_hit: 0,
  freethrows_missed: 2
}

player2.points_average = player2.points / player2.matches;
player2.rebounds_average = player2.rebounds / player2.matches;
player2.assists_average = player2.assists / player2.matches;
player2.blocks_average = player2.blocks / player2.matches;
player2.stolen_average = player2.stolen / player2.matches;
player2.shots_hit_average = player2.shots_hit / player2.matches;
player2.shots_missed_average = player2.shots_missed / player2.matches;
player2.three_hit_average = player2.three_hit / player2.matches;
player2.three_missed_average = player2.three_missed / player2.matches;
player2.shots_percentage = (player2.shots_hit / player2.shots_missed) * 100;
player2.three_percentage = (player2.three_hit / player2.three_missed) * 100;
player2.freethrows_percentage = (player2.freethrows_hit / player2.freethrows_missed) * 100;

let player3 = {
  name: "Damir Podrug",
  matches: 1,
  points: 5,
  rebounds: 10,
  assists: 2,
  blocks: 2,
  stolen: 1,
  shots_hit: 4,
  shots_missed: 11,
  three_hit: 1,
  three_missed: 6,
  freethrows_hit: 0,
  freethrows_missed: 1
}

player3.points_average = player3.points / player3.matches;
player3.rebounds_average = player3.rebounds / player3.matches;
player3.assists_average = player3.assists / player3.matches;
player3.blocks_average = player3.blocks / player3.matches;
player3.stolen_average = player3.stolen / player3.matches;
player3.shots_hit_average = player3.shots_hit / player3.matches;
player3.shots_missed_average = player3.shots_missed / player3.matches;
player3.three_hit_average = player3.three_hit / player3.matches;
player3.three_missed_average = player3.three_missed / player3.matches;
player3.shots_percentage = (player3.shots_hit / player3.shots_missed) * 100;
player3.three_percentage = (player3.three_hit / player3.three_missed) * 100;
player3.freethrows_percentage = (player3.freethrows_hit / player3.freethrows_missed) * 100;

let player5 = {
  name: "Hrvoje Podrug",
  matches: 1,
  points: 0,
  rebounds: 1,
  assists: 0,
  blocks: 0,
  stolen: 0,
  shots_hit: 0,
  shots_missed: 0,
  three_hit: 0,
  three_missed: 0,
  freethrows_hit: 0,
  freethrows_missed: 1
}

player5.points_average = player5.points / player5.matches;
player5.rebounds_average = player5.rebounds / player5.matches;
player5.assists_average = player5.assists / player5.matches;
player5.blocks_average = player5.blocks / player5.matches;
player5.stolen_average = player5.stolen / player5.matches;
player5.shots_hit_average = player5.shots_hit / player5.matches;
player5.shots_missed_average = player5.shots_missed / player5.matches;
player5.three_hit_average = player5.three_hit / player5.matches;
player5.three_missed_average = player5.three_missed / player5.matches;
player5.shots_percentage = (player5.shots_hit / player5.shots_missed) * 100;
player5.three_percentage = (player5.three_hit / player5.three_missed) * 100;
player5.freethrows_percentage = (player5.freethrows_hit / player5.freethrows_missed) * 100;

let player6 = {
  name: "Renato Bilan",
  matches: 1,
  points: 16,
  rebounds: 4,
  assists: 3,
  blocks: 2,
  stolen: 1,
  shots_hit: 9,
  shots_missed: 16,
  three_hit: 7,
  three_missed: 12,
  freethrows_hit: 0,
  freethrows_missed: 1
}

player6.points_average = player6.points / player6.matches;
player6.rebounds_average = player6.rebounds / player6.matches;
player6.assists_average = player6.assists / player6.matches;
player6.blocks_average = player6.blocks / player6.matches;
player6.stolen_average = player6.stolen / player6.matches;
player6.shots_hit_average = player6.shots_hit / player6.matches;
player6.shots_missed_average = player6.shots_missed / player6.matches;
player6.three_hit_average = player6.three_hit / player6.matches;
player6.three_missed_average = player6.three_missed / player6.matches;
player6.shots_percentage = (player6.shots_hit / player6.shots_missed) * 100;
player6.three_percentage = (player6.three_hit / player6.three_missed) * 100;
player6.freethrows_percentage = (player6.freethrows_hit / player6.freethrows_missed) * 100;

let player7 = {
  name: "Boško Zebić",
  matches: 1,
  points: 1,
  rebounds: 10,
  assists: 6,
  blocks: 1,
  stolen: 2,
  shots_hit: 0,
  shots_missed: 10,
  three_hit: 0,
  three_missed: 0,
  freethrows_hit: 1,
  freethrows_missed: 2
}

player7.points_average = player7.points / player7.matches;
player7.rebounds_average = player7.rebounds / player7.matches;
player7.assists_average = player7.assists / player7.matches;
player7.blocks_average = player7.blocks / player7.matches;
player7.stolen_average = player7.stolen / player7.matches;
player7.shots_hit_average = player7.shots_hit / player7.matches;
player7.shots_missed_average = player7.shots_missed / player7.matches;
player7.three_hit_average = player7.three_hit / player7.matches;
player7.three_missed_average = player7.three_missed / player7.matches;
player7.shots_percentage = (player7.shots_hit / player7.shots_missed) * 100;
player7.three_percentage = (player7.three_hit / player7.three_missed) * 100;
player7.freethrows_percentage = (player7.freethrows_hit / player7.freethrows_missed) * 100;

let player8 = {
  name: "Josip Podrug",
  matches: 1,
  points: 4,
  rebounds: 6,
  assists: 1,
  blocks: 0,
  stolen: 1,
  shots_hit: 4,
  shots_missed: 14,
  three_hit: 0,
  three_missed: 0,
  freethrows_hit: 1,
  freethrows_missed: 2
}

player8.points_average = player8.points / player8.matches;
player8.rebounds_average = player8.rebounds / player8.matches;
player8.assists_average = player8.assists / player8.matches;
player8.blocks_average = player8.blocks / player8.matches;
player8.stolen_average = player8.stolen / player8.matches;
player8.shots_hit_average = player8.shots_hit / player8.matches;
player8.shots_missed_average = player8.shots_missed / player8.matches;
player8.three_hit_average = player8.three_hit / player8.matches;
player8.three_missed_average = player8.three_missed / player8.matches;
player8.shots_percentage = (player8.shots_hit / player8.shots_missed) * 100;
player8.three_percentage = (player8.three_hit / player8.three_missed) * 100;
player8.freethrows_percentage = (player8.freethrows_hit / player8.freethrows_missed) * 100;

let player9 = {
  name: "Ante Grčić",
  matches: 1,
  points: 2,
  rebounds: 8,
  assists: 8,
  blocks: 2,
  stolen: 3,
  shots_hit: 1,
  shots_missed: 6,
  three_hit: 1,
  three_missed: 5,
  freethrows_hit: 0,
  freethrows_missed: 1
}

player9.points_average = player9.points / player9.matches;
player9.rebounds_average = player9.rebounds / player9.matches;
player9.assists_average = player9.assists / player9.matches;
player9.blocks_average = player9.blocks / player9.matches;
player9.stolen_average = player9.stolen / player9.matches;
player9.shots_hit_average = player9.shots_hit / player9.matches;
player9.shots_missed_average = player9.shots_missed / player9.matches;
player9.three_hit_average = player9.three_hit / player9.matches;
player9.three_missed_average = player9.three_missed / player9.matches;
player9.shots_percentage = (player9.shots_hit / player9.shots_missed) * 100;
player9.three_percentage = (player9.three_hit / player9.three_missed) * 100;
player9.freethrows_percentage = (player9.freethrows_hit / player9.freethrows_missed) * 100;

let player10 = {
  name: "Ivica Grčić",
  matches: 1,
  points: 14,
  rebounds: 8,
  assists: 1,
  blocks: 0,
  stolen: 1,
  shots_hit: 12,
  shots_missed: 30,
  three_hit: 1,
  three_missed: 11,
  freethrows_hit: 1,
  freethrows_missed: 1
}

player10.points_average = player10.points / player10.matches;
player10.rebounds_average = player10.rebounds / player10.matches;
player10.assists_average = player10.assists / player10.matches;
player10.blocks_average = player10.blocks / player10.matches;
player10.stolen_average = player10.stolen / player10.matches;
player10.shots_hit_average = player10.shots_hit / player10.matches;
player10.shots_missed_average = player10.shots_missed / player10.matches;
player10.three_hit_average = player10.three_hit / player10.matches;
player10.three_missed_average = player10.three_missed / player10.matches;
player10.shots_percentage = (player10.shots_hit / player10.shots_missed) * 100;
player10.three_percentage = (player10.three_hit / player10.three_missed) * 100;
player10.freethrows_percentage = (player10.freethrows_hit / player10.freethrows_missed) * 100;

let player11 = {
  name: "Mario Grčić",
  matches: 1,
  points: 0,
  rebounds: 8,
  assists: 0,
  blocks: 0,
  stolen: 2,
  shots_hit: 0,
  shots_missed: 8,
  three_hit: 0,
  three_missed: 2,
  freethrows_hit: 0,
  freethrows_missed: 1
}

player11.points_average = player11.points / player11.matches;
player11.rebounds_average = player11.rebounds / player11.matches;
player11.assists_average = player11.assists / player11.matches;
player11.blocks_average = player11.blocks / player11.matches;
player11.stolen_average = player11.stolen / player11.matches;
player11.shots_hit_average = player11.shots_hit / player11.matches;
player11.shots_missed_average = player11.shots_missed / player11.matches;
player11.three_hit_average = player11.three_hit / player11.matches;
player11.three_missed_average = player11.three_missed / player11.matches;
player11.shots_percentage = (player11.shots_hit / player11.shots_missed) * 100;
player11.three_percentage = (player11.three_hit / player11.three_missed) * 100;
player11.freethrows_percentage = (player11.freethrows_hit / player11.freethrows_missed) * 100;

let player13 = {
  name: "Stipe Beljo",
  matches: 1,
  points: 6,
  rebounds: 6,
  assists: 3,
  blocks: 2,
  stolen: 0,
  shots_hit: 4,
  shots_missed: 17,
  three_hit: 2,
  three_missed: 12,
  freethrows_hit: 0,
  freethrows_missed: 1
}

player13.points_average = player13.points / player13.matches;
player13.rebounds_average = player13.rebounds / player13.matches;
player13.assists_average = player13.assists / player13.matches;
player13.blocks_average = player13.blocks / player13.matches;
player13.stolen_average = player13.stolen / player13.matches;
player13.shots_hit_average = player13.shots_hit / player13.matches;
player13.shots_missed_average = player13.shots_missed / player13.matches;
player13.three_hit_average = player13.three_hit / player13.matches;
player13.three_missed_average = player13.three_missed / player13.matches;
player13.shots_percentage = (player13.shots_hit / player13.shots_missed) * 100;
player13.three_percentage = (player13.three_hit / player13.three_missed) * 100;
player13.freethrows_percentage = (player13.freethrows_hit / player13.freethrows_missed) * 100;

let player14 = {
  name: "Ante Dragunić",
  matches: 1,
  points: 9,
  rebounds: 6,
  assists: 3,
  blocks: 1,
  stolen: 1,
  shots_hit: 5,
  shots_missed: 23,
  three_hit: 4,
  three_missed: 17,
  freethrows_hit: 0,
  freethrows_missed: 0
}

player14.points_average = player14.points / player14.matches;
player14.rebounds_average = player14.rebounds / player14.matches;
player14.assists_average = player14.assists / player14.matches;
player14.blocks_average = player14.blocks / player14.matches;
player14.stolen_average = player14.stolen / player14.matches;
player14.shots_hit_average = player14.shots_hit / player14.matches;
player14.shots_missed_average = player14.shots_missed / player14.matches;
player14.three_hit_average = player14.three_hit / player14.matches;
player14.three_missed_average = player14.three_missed / player14.matches;
player14.shots_percentage = (player14.shots_hit / player14.shots_missed) * 100;
player14.three_percentage = (player14.three_hit / player14.three_missed) * 100;
player14.freethrows_percentage = (player14.freethrows_hit / player14.freethrows_missed) * 100;

let player12 = {
  name: "Bože Bralić",
  matches: 1,
  points: 4,
  rebounds: 14,
  assists: 1,
  blocks: 0,
  stolen: 1,
  shots_hit: 4,
  shots_missed: 12,
  three_hit: 2,
  three_missed: 7,
  freethrows_hit: 0,
  freethrows_missed: 1
}

player12.points_average = player12.points / player12.matches;
player12.rebounds_average = player12.rebounds / player12.matches;
player12.assists_average = player12.assists / player12.matches;
player12.blocks_average = player12.blocks / player12.matches;
player12.stolen_average = player12.stolen / player12.matches;
player12.shots_hit_average = player12.shots_hit / player12.matches;
player12.shots_missed_average = player12.shots_missed / player12.matches;
player12.three_hit_average = player12.three_hit / player12.matches;
player12.three_missed_average = player12.three_missed / player12.matches;
player12.shots_percentage = (player12.shots_hit / player12.shots_missed) * 100;
player12.three_percentage = (player12.three_hit / player12.three_missed) * 100;
player12.freethrows_percentage = (player12.freethrows_hit / player12.freethrows_missed) * 100;

let player15 = {
  name: "Tomislav Zebić",
  matches: 1,
  points: 6,
  rebounds: 8,
  assists: 2,
  blocks: 0,
  stolen: 0,
  shots_hit: 4,
  shots_missed: 15,
  three_hit: 2,
  three_missed: 11,
  freethrows_hit: 0,
  freethrows_missed: 1
}

player15.points_average = player15.points / player15.matches;
player15.rebounds_average = player15.rebounds / player15.matches;
player15.assists_average = player15.assists / player15.matches;
player15.blocks_average = player15.blocks / player15.matches;
player15.stolen_average = player15.stolen / player15.matches;
player15.shots_hit_average = player15.shots_hit / player15.matches;
player15.shots_missed_average = player15.shots_missed / player15.matches;
player15.three_hit_average = player15.three_hit / player15.matches;
player15.three_missed_average = player15.three_missed / player15.matches;
player15.shots_percentage = (player15.shots_hit / player15.shots_missed) * 100;
player15.three_percentage = (player15.three_hit / player15.three_missed) * 100;
player15.freethrows_percentage = (player15.freethrows_hit / player15.freethrows_missed) * 100;

let player16 = {
  name: "Mateo Bralić",
  matches: 1,
  points: 10,
  rebounds: 4,
  assists: 4,
  blocks: 0,
  stolen: 2,
  shots_hit: 7,
  shots_missed: 21,
  three_hit: 3,
  three_missed: 13,
  freethrows_hit: 0,
  freethrows_missed: 1
}

player16.points_average = player16.points / player16.matches;
player16.rebounds_average = player16.rebounds / player16.matches;
player16.assists_average = player16.assists / player16.matches;
player16.blocks_average = player16.blocks / player16.matches;
player16.stolen_average = player16.stolen / player16.matches;
player16.shots_hit_average = player16.shots_hit / player16.matches;
player16.shots_missed_average = player16.shots_missed / player16.matches;
player16.three_hit_average = player16.three_hit / player16.matches;
player16.three_missed_average = player16.three_missed / player16.matches;
player16.shots_percentage = (player16.shots_hit / player16.shots_missed) * 100;
player16.three_percentage = (player16.three_hit / player16.three_missed) * 100;
player16.freethrows_percentage = (player16.freethrows_hit / player16.freethrows_missed) * 100;

let player17 = {
  name: "Dominik Bralić",
  matches: 1,
  points: 3,
  rebounds: 5,
  assists: 4,
  blocks: 0,
  stolen: 2,
  shots_hit: 7,
  shots_missed: 21,
  three_hit: 3,
  three_missed: 13,
  freethrows_hit: 0,
  freethrows_missed: 1
}

player17.points_average = player17.points / player17.matches;
player17.rebounds_average = player17.rebounds / player17.matches;
player17.assists_average = player17.assists / player17.matches;
player17.blocks_average = player17.blocks / player17.matches;
player17.stolen_average = player17.stolen / player17.matches;
player17.shots_hit_average = player17.shots_hit / player17.matches;
player17.shots_missed_average = player17.shots_missed / player17.matches;
player17.three_hit_average = player17.three_hit / player17.matches;
player17.three_missed_average = player17.three_missed / player17.matches;
player17.shots_percentage = (player17.shots_hit / player17.shots_missed) * 100;
player17.three_percentage = (player17.three_hit / player17.three_missed) * 100;
player17.freethrows_percentage = (player17.freethrows_hit / player17.freethrows_missed) * 100;

let player18 = {
  name: "Kristian Milun",
  matches: 1,
  points: 1,
  rebounds: 6,
  assists: 1,
  blocks: 0,
  stolen: 1,
  shots_hit: 1,
  shots_missed: 2,
  three_hit: 0,
  three_missed: 0,
  freethrows_hit: 0,
  freethrows_missed: 1
}

player18.points_average = player18.points / player18.matches;
player18.rebounds_average = player18.rebounds / player18.matches;
player18.assists_average = player18.assists / player18.matches;
player18.blocks_average = player18.blocks / player18.matches;
player18.stolen_average = player18.stolen / player18.matches;
player18.shots_hit_average = player18.shots_hit / player18.matches;
player18.shots_missed_average = player18.shots_missed / player18.matches;
player18.three_hit_average = player18.three_hit / player18.matches;
player18.three_missed_average = player18.three_missed / player18.matches;
player18.shots_percentage = (player18.shots_hit / player18.shots_missed) * 100;
player18.three_percentage = (player18.three_hit / player18.three_missed) * 100;
player18.freethrows_percentage = (player18.freethrows_hit / player18.freethrows_missed) * 100;

let player19 = {
  name: "Josip Murat",
  matches: 1,
  points: 7,
  rebounds: 3,
  assists: 1,
  blocks: 0,
  stolen: 0,
  shots_hit: 5,
  shots_missed: 14,
  three_hit: 2,
  three_missed: 5,
  freethrows_hit: 0,
  freethrows_missed: 3
}

player19.points_average = player19.points / player19.matches;
player19.rebounds_average = player19.rebounds / player19.matches;
player19.assists_average = player19.assists / player19.matches;
player19.blocks_average = player19.blocks / player19.matches;
player19.stolen_average = player19.stolen / player19.matches;
player19.shots_hit_average = player19.shots_hit / player19.matches;
player19.shots_missed_average = player19.shots_missed / player19.matches;
player19.three_hit_average = player19.three_hit / player19.matches;
player19.three_missed_average = player19.three_missed / player19.matches;
player19.shots_percentage = (player19.shots_hit / player19.shots_missed) * 100;
player19.three_percentage = (player19.three_hit / player19.three_missed) * 100;
player19.freethrows_percentage = (player19.freethrows_hit / player19.freethrows_missed) * 100;

let player20 = {
  name: "Zoran Stojanac",
  matches: 1,
  points: 3,
  rebounds: 9,
  assists: 3,
  blocks: 1,
  stolen: 1,
  shots_hit: 2,
  shots_missed: 10,
  three_hit: 1,
  three_missed: 7,
  freethrows_hit: 0,
  freethrows_missed: 1
}

player20.points_average = player20.points / player20.matches;
player20.rebounds_average = player20.rebounds / player20.matches;
player20.assists_average = player20.assists / player20.matches;
player20.blocks_average = player20.blocks / player20.matches;
player20.stolen_average = player20.stolen / player20.matches;
player20.shots_hit_average = player20.shots_hit / player20.matches;
player20.shots_missed_average = player20.shots_missed / player20.matches;
player20.three_hit_average = player20.three_hit / player20.matches;
player20.three_missed_average = player20.three_missed / player20.matches;
player20.shots_percentage = (player20.shots_hit / player20.shots_missed) * 100;
player20.three_percentage = (player20.three_hit / player20.three_missed) * 100;
player20.freethrows_percentage = (player20.freethrows_hit / player20.freethrows_missed) * 100;

let player21 = {
  name: "Darko Ćapeta",
  matches: 1,
  points: 8,
  rebounds: 5,
  assists: 1,
  blocks: 0,
  stolen: 2,
  shots_hit: 5,
  shots_missed: 17,
  three_hit: 3,
  three_missed: 13,
  freethrows_hit: 0,
  freethrows_missed: 1
}

player21.points_average = player21.points / player21.matches;
player21.rebounds_average = player21.rebounds / player21.matches;
player21.assists_average = player21.assists / player21.matches;
player21.blocks_average = player21.blocks / player21.matches;
player21.stolen_average = player21.stolen / player21.matches;
player21.shots_hit_average = player21.shots_hit / player21.matches;
player21.shots_missed_average = player21.shots_missed / player21.matches;
player21.three_hit_average = player21.three_hit / player21.matches;
player21.three_missed_average = player21.three_missed / player21.matches;
player21.shots_percentage = (player21.shots_hit / player21.shots_missed) * 100;
player21.three_percentage = (player21.three_hit / player21.three_missed) * 100;
player21.freethrows_percentage = (player21.freethrows_hit / player21.freethrows_missed) * 100;

let player22 = {
  name: "Jure Ćapeta",
  matches: 1,
  points: 0,
  rebounds: 4,
  assists: 1,
  blocks: 0,
  stolen: 0,
  shots_hit: 0,
  shots_missed: 6,
  three_hit: 0,
  three_missed: 2,
  freethrows_hit: 0,
  freethrows_missed: 1
}

player22.points_average = player22.points / player22.matches;
player22.rebounds_average = player22.rebounds / player22.matches;
player22.assists_average = player22.assists / player22.matches;
player22.blocks_average = player22.blocks / player22.matches;
player22.stolen_average = player22.stolen / player22.matches;
player22.shots_hit_average = player22.shots_hit / player22.matches;
player22.shots_missed_average = player22.shots_missed / player22.matches;
player22.three_hit_average = player22.three_hit / player22.matches;
player22.three_missed_average = player22.three_missed / player22.matches;
player22.shots_percentage = (player22.shots_hit / player22.shots_missed) * 100;
player22.three_percentage = (player22.three_hit / player22.three_missed) * 100;
player22.freethrows_percentage = (player22.freethrows_hit / player22.freethrows_missed) * 100;


// Ulomak za najbolje:

function playerBest() {
let playersPoints = [player1, player2, player3, player5, player6, player7, player8, player9, player10, player11, player12, player13, player14, player15, player16, player17, player18, player19, player20, player21, player22];
const poredak = playersPoints.map(({ name, points_average }) => ({ name, points_average })).sort((a,b) => b.points_average - a.points_average);

const elementno1 = document.querySelector('.skor-prvi-ime'); 
elementno1.append(poredak[0].name);
const elementno2 = document.querySelector('.skor-prvi-broj'); 
elementno2.append(poredak[0].points_average);
const elementno3 = document.querySelector('.skor-drugi-ime'); 
elementno3.append(poredak[1].name);
const elementno4 = document.querySelector('.skor-drugi-broj'); 
elementno4.append(poredak[1].points_average);
const elementno5 = document.querySelector('.skor-trechi-ime'); 
elementno5.append(poredak[2].name);
const elementno6 = document.querySelector('.skor-trechi-broj'); 
elementno6.append(poredak[2].points_average);

let playersRebounds = [player1, player2, player3, player5, player6, player7, player8, player9, player10, player11, player12, player13, player14, player15, player16, player17, player18, player19, player20, player21, player22];
const poredakSkoka = playersRebounds.map(({ name, rebounds_average }) => ({ name, rebounds_average })).sort((a,b) => b.rebounds_average - a.rebounds_average);

const elementno7 = document.querySelector('.skokovi-prvi-ime'); 
elementno7.append(poredakSkoka[0].name);
const elementno8 = document.querySelector('.skokovi-prvi-broj'); 
elementno8.append(poredakSkoka[0].rebounds_average);
const elementno9 = document.querySelector('.skokovi-drugi-ime'); 
elementno9.append(poredakSkoka[1].name);
const elementno10 = document.querySelector('.skokovi-drugi-broj'); 
elementno10.append(poredakSkoka[1].rebounds_average);
const elementno11 = document.querySelector('.skokovi-trechi-ime'); 
elementno11.append(poredakSkoka[2].name);
const elementno12 = document.querySelector('.skokovi-trechi-broj'); 
elementno12.append(poredakSkoka[2].rebounds_average);

let playersAssists = [player1, player2, player3, player5, player6, player7, player8, player9, player10, player11, player12, player13, player14, player15, player16, player17, player18, player19, player20, player21, player22];
const poredakAsista = playersAssists.map(({ name, assists_average }) => ({ name, assists_average })).sort((a,b) => b.assists_average - a.assists_average);

const elementno13 = document.querySelector('.asisti-prvi-ime'); 
elementno13.append(poredakAsista[0].name);
const elementno14 = document.querySelector('.asisti-prvi-broj'); 
elementno14.append(poredakAsista[0].assists_average);
const elementno15 = document.querySelector('.asisti-drugi-ime'); 
elementno15.append(poredakAsista[1].name);
const elementno16 = document.querySelector('.asisti-drugi-broj'); 
elementno16.append(poredakAsista[1].assists_average);
const elementno17 = document.querySelector('.asisti-trechi-ime'); 
elementno17.append(poredakAsista[2].name);
const elementno18 = document.querySelector('.asisti-trechi-broj'); 
elementno18.append(poredakAsista[2].assists_average);

let playersBlocks = [player1, player2, player3, player5, player6, player7, player8, player9, player10, player11, player12, player13, player14, player15, player16, player17, player18, player19, player20, player21, player22];
const poredakBlokova = playersBlocks.map(({ name, blocks_average }) => ({ name, blocks_average })).sort((a,b) => b.blocks_average - a.blocks_average);

const elementno19 = document.querySelector('.blokovi-prvi-ime'); 
elementno19.append(poredakBlokova[0].name);
const elementno20 = document.querySelector('.blokovi-prvi-broj'); 
elementno20.append(poredakBlokova[0].blocks_average);
const elementno21 = document.querySelector('.blokovi-drugi-ime'); 
elementno21.append(poredakBlokova[1].name);
const elementno22 = document.querySelector('.blokovi-drugi-broj'); 
elementno22.append(poredakBlokova[1].blocks_average);
const elementno23 = document.querySelector('.blokovi-trechi-ime'); 
elementno23.append(poredakBlokova[2].name);
const elementno24 = document.querySelector('.blokovi-trechi-broj'); 
elementno24.append(poredakBlokova[2].blocks_average);

let playersStolen = [player1, player2, player3, player5, player6, player7, player8, player9, player10, player11, player12, player13, player14, player15, player16, player17, player18, player19, player20, player21, player22];
const poredakKradja = playersStolen.map(({ name, stolen_average }) => ({ name, stolen_average })).sort((a,b) => b.stolen_average - a.stolen_average);

const elementno25 = document.querySelector('.stolen-prvi-ime'); 
elementno25.append(poredakKradja[0].name);
const elementno26 = document.querySelector('.stolen-prvi-broj'); 
elementno26.append(poredakKradja[0].stolen_average);
const elementno27 = document.querySelector('.stolen-drugi-ime'); 
elementno27.append(poredakKradja[1].name);
const elementno28 = document.querySelector('.stolen-drugi-broj'); 
elementno28.append(poredakKradja[1].stolen_average);
const elementno29 = document.querySelector('.stolen-trechi-ime'); 
elementno29.append(poredakKradja[2].name);
const elementno30 = document.querySelector('.stolen-trechi-broj'); 
elementno30.append(poredakKradja[2].stolen_average);

let playersShothit = [player1, player2, player3, player5, player6, player7, player8, player9, player10, player11, player12, player13, player14, player15, player16, player17, player18, player19, player20, player21, player22];
const poredakTrica = playersShothit.map(({ name, shots_percentage }) => ({ name, shots_percentage })).sort((a,b) => b.shots_percentage - a.shots_percentage);

const elementno31 = document.querySelector('.threepct-prvi-ime'); 
elementno31.append(poredakTrica[0].name);
const elementno32 = document.querySelector('.threepct-prvi-broj'); 
elementno32.append(`${poredakTrica[0].shots_percentage} %`);
const elementno33 = document.querySelector('.threepct-drugi-ime'); 
elementno33.append(poredakTrica[1].name);
const elementno34 = document.querySelector('.threepct-drugi-broj'); 
elementno34.append(`${poredakTrica[1].shots_percentage} %`);
const elementno35 = document.querySelector('.threepct-trechi-ime'); 
elementno35.append(poredakTrica[2].name);
const elementno36 = document.querySelector('.threepct-trechi-broj'); 
elementno36.append(`${poredakTrica[2].shots_percentage} %`);

let playersThreehit = [player1, player2, player3, player5, player6, player7, player8, player9, player10, player11, player12, player13, player14, player15, player16, player17, player18, player19, player20, player21, player22];
const poredakTrojki = playersThreehit.map(({ name, three_percentage }) => ({ name, three_percentage })).sort((a,b) => b.three_percentage - a.three_percentage);

const elementno37 = document.querySelector('.trojke-prvi-ime'); 
elementno37.append(poredakTrojki[0].name);
const elementno38 = document.querySelector('.trojke-prvi-broj'); 
elementno38.append(`${poredakTrojki[0].three_percentage} %`);
const elementno39 = document.querySelector('.trojke-drugi-ime'); 
elementno39.append(poredakTrojki[1].name);
const elementno40 = document.querySelector('.trojke-drugi-broj'); 
elementno40.append(`${poredakTrojki[1].three_percentage} %`);
const elementno41 = document.querySelector('.trojke-trechi-ime'); 
elementno41.append(poredakTrojki[2].name);
const elementno42 = document.querySelector('.trojke-trechi-broj'); 
elementno42.append(`${poredakTrojki[2].three_percentage} %`);

let playersFreehit = [player1, player2, player3, player5, player6, player7, player8, player9, player10, player11, player12, player13, player14, player15, player16, player17, player18, player19, player20, player21, player22];
const poredakFt = playersFreehit.map(({ name, freethrows_percentage }) => ({ name, freethrows_percentage })).sort((a,b) => b.freethrows_percentage - a.freethrows_percentage);

const elementno43 = document.querySelector('.ft-prvi-ime'); 
elementno43.append(poredakFt[0].name);
const elementno44 = document.querySelector('.ft-prvi-broj'); 
elementno44.append(`${poredakFt[0].freethrows_percentage} %`);
const elementno45 = document.querySelector('.ft-drugi-ime'); 
elementno45.append(poredakFt[1].name);
const elementno46 = document.querySelector('.ft-drugi-broj'); 
elementno46.append(`${poredakFt[1].freethrows_percentage} %`);
const elementno47 = document.querySelector('.ft-trechi-ime'); 
elementno47.append(poredakFt[2].name);
const elementno48 = document.querySelector('.ft-trechi-broj'); 
elementno48.append(`${poredakFt[2].freethrows_percentage} %`);
}

function playerStats() {
  let playerOne = [player1.points_average, player1.assists_average, player1.rebounds_average, player1.blocks_average, player1.stolen_average, player1.shots_hit_average];
  for (let i = 0; i < playerOne.length; i++){
    const element = document.querySelector('.element-01' + i);
    element.append(playerOne[i]);
  }
}
  
function matchStats(playerNumber, pts, rbd, ast, blk, stl, shothit, shotmiss, thrhit, thrmiss, frthit, frtmiss) {
  playerNumber.points = playerNumber.points + pts;
  playerNumber.rebounds = playerNumber.rebounds + rbd;
  playerNumber.assists = playerNumber.assists + ast;
  playerNumber.blocks = playerNumber.blocks + blk;
  playerNumber.stolen = playerNumber.stolen + stl;
  playerNumber.shots_hit = playerNumber.shots_hit + shothit;
  playerNumber.shots_missed = playerNumber.shots_hit + shotmiss;
  playerNumber.three_hit = playerNumber.three_hit + thrhit;
  playerNumber.three_missed = playerNumber.three_missed + thrmiss;
  playerNumber.freethrows_hit = playerNumber.freethrows_hit + frthit;
  playerNumber.freethrows_missed = playerNumber.freethrows_missed + frtmiss;
  
  const element01 = document.querySelector('.p01-points');
  element01.append(pts);
  const element02 = document.querySelector('.p01-rebounds');
  element02.append(rbd);
  const element03 = document.querySelector('.p01-assists');
  element03.append(ast);
  const element04 = document.querySelector('.p01-blocks');
  element04.append(blk);
  const element05 = document.querySelector('.p01-stolen');
  element05.append(stl);
  const element06 = document.querySelector('.p01-shot-pct');
  element06.append(`${shothit}/${shotmiss}`);
  const element07 = document.querySelector('.p01-three-pct');
  element07.append(`${thrhit}/${thrmiss}`);
  const element08 = document.querySelector('.p01-ft-pct');
  element08.append(`${frthit}/${frtmiss}`);
}

function matchTwo(playerNumber, pts, rbd, ast, blk, stl, shothit, shotmiss, thrhit, thrmiss, frthit, frtmiss) {
  playerNumber.points = playerNumber.points + pts;
  playerNumber.rebounds = playerNumber.rebounds + rbd;
  playerNumber.assists = playerNumber.assists + ast;
  playerNumber.blocks = playerNumber.blocks + blk;
  playerNumber.stolen = playerNumber.stolen + stl;
  playerNumber.shots_hit = playerNumber.shots_hit + shothit;
  playerNumber.shots_missed = playerNumber.shots_hit + shotmiss;
  playerNumber.three_hit = playerNumber.three_hit + thrhit;
  playerNumber.three_missed = playerNumber.three_missed + thrmiss;
  playerNumber.freethrows_hit = playerNumber.freethrows_hit + frthit;
  playerNumber.freethrows_missed = playerNumber.freethrows_missed + frtmiss;

  const element001 = document.querySelector('.p02-points');
  element001.append(pts);
  const element002 = document.querySelector('.p02-rebounds');
  element002.append(rbd);
  const element003 = document.querySelector('.p02-assists');
  element003.append(ast);
  const element004 = document.querySelector('.p02-blocks');
  element004.append(blk);
  const element005 = document.querySelector('.p02-stolen');
  element005.append(stl);
  const element006 = document.querySelector('.p02-shot-pct');
  element006.append(`${shothit}/${shotmiss}`);
  const element007 = document.querySelector('.p02-three-pct');
  element007.append(`${thrhit}/${thrmiss}`);
  const element008 = document.querySelector('.p02-ft-pct');
  element008.append(`${frthit}/${frtmiss}`);
}

function matchThree(playerNumber, pts, rbd, ast, blk, stl, shothit, shotmiss, thrhit, thrmiss, frthit, frtmiss) {
  playerNumber.points = playerNumber.points + pts;
  playerNumber.rebounds = playerNumber.rebounds + rbd;
  playerNumber.assists = playerNumber.assists + ast;
  playerNumber.blocks = playerNumber.blocks + blk;
  playerNumber.stolen = playerNumber.stolen + stl;
  playerNumber.shots_hit = playerNumber.shots_hit + shothit;
  playerNumber.shots_missed = playerNumber.shots_hit + shotmiss;
  playerNumber.three_hit = playerNumber.three_hit + thrhit;
  playerNumber.three_missed = playerNumber.three_missed + thrmiss;
  playerNumber.freethrows_hit = playerNumber.freethrows_hit + frthit;
  playerNumber.freethrows_missed = playerNumber.freethrows_missed + frtmiss;

  const element0001 = document.querySelector('.p03-points');
  element0001.append(pts);
  const element0002 = document.querySelector('.p03-rebounds');
  element0002.append(rbd);
  const element0003 = document.querySelector('.p03-assists');
  element0003.append(ast);
  const element0004 = document.querySelector('.p03-blocks');
  element0004.append(blk);
  const element0005 = document.querySelector('.p03-stolen');
  element0005.append(stl);
  const element0006 = document.querySelector('.p03-shot-pct');
  element0006.append(`${shothit}/${shotmiss}`);
  const element0007 = document.querySelector('.p03-three-pct');
  element0007.append(`${thrhit}/${thrmiss}`);
  const element0008 = document.querySelector('.p03-ft-pct');
  element0008.append(`${frthit}/${frtmiss}`);
}


function matchFour(playerNumber, pts, rbd, ast, blk, stl, shothit, shotmiss, thrhit, thrmiss, frthit, frtmiss) {
  playerNumber.points = playerNumber.points + pts;
  playerNumber.rebounds = playerNumber.rebounds + rbd;
  playerNumber.assists = playerNumber.assists + ast;
  playerNumber.blocks = playerNumber.blocks + blk;
  playerNumber.stolen = playerNumber.stolen + stl;
  playerNumber.shots_hit = playerNumber.shots_hit + shothit;
  playerNumber.shots_missed = playerNumber.shots_hit + shotmiss;
  playerNumber.three_hit = playerNumber.three_hit + thrhit;
  playerNumber.three_missed = playerNumber.three_missed + thrmiss;
  playerNumber.freethrows_hit = playerNumber.freethrows_hit + frthit;
  playerNumber.freethrows_missed = playerNumber.freethrows_missed + frtmiss;

  const element011 = document.querySelector('.p04-points');
  element011.append(pts);
  const element012 = document.querySelector('.p04-rebounds');
  element012.append(rbd);
  const element013 = document.querySelector('.p04-assists');
  element013.append(ast);
  const element014 = document.querySelector('.p04-blocks');
  element014.append(blk);
  const element015 = document.querySelector('.p04-stolen');
  element015.append(stl);
  const element016 = document.querySelector('.p04-shot-pct');
  element016.append(`${shothit}/${shotmiss}`);
  const element017 = document.querySelector('.p04-three-pct');
  element017.append(`${thrhit}/${thrmiss}`);
  const element018 = document.querySelector('.p04-ft-pct');
  element018.append(`${frthit}/${frtmiss}`);
}

function matchFive(playerNumber, pts, rbd, ast, blk, stl, shothit, shotmiss, thrhit, thrmiss, frthit, frtmiss) {
  playerNumber.points = playerNumber.points + pts;
  playerNumber.rebounds = playerNumber.rebounds + rbd;
  playerNumber.assists = playerNumber.assists + ast;
  playerNumber.blocks = playerNumber.blocks + blk;
  playerNumber.stolen = playerNumber.stolen + stl;
  playerNumber.shots_hit = playerNumber.shots_hit + shothit;
  playerNumber.shots_missed = playerNumber.shots_hit + shotmiss;
  playerNumber.three_hit = playerNumber.three_hit + thrhit;
  playerNumber.three_missed = playerNumber.three_missed + thrmiss;
  playerNumber.freethrows_hit = playerNumber.freethrows_hit + frthit;
  playerNumber.freethrows_missed = playerNumber.freethrows_missed + frtmiss;

  const element0011 = document.querySelector('.p05-points');
  element0011.append(pts);
  const element0012 = document.querySelector('.p05-rebounds');
  element0012.append(rbd);
  const element0013 = document.querySelector('.p05-assists');
  element0013.append(ast);
  const element0014 = document.querySelector('.p05-blocks');
  element0014.append(blk);
  const element0015 = document.querySelector('.p05-stolen');
  element0015.append(stl);
  const element0016 = document.querySelector('.p05-shot-pct');
  element0016.append(`${shothit}/${shotmiss}`);
  const element0017 = document.querySelector('.p05-three-pct');
  element0017.append(`${thrhit}/${thrmiss}`);
  const element0018 = document.querySelector('.p05-ft-pct');
  element0018.append(`${frthit}/${frtmiss}`);
}

function matchSix(playerNumber, pts, rbd, ast, blk, stl, shothit, shotmiss, thrhit, thrmiss, frthit, frtmiss) {
  playerNumber.points = playerNumber.points + pts;
  playerNumber.rebounds = playerNumber.rebounds + rbd;
  playerNumber.assists = playerNumber.assists + ast;
  playerNumber.blocks = playerNumber.blocks + blk;
  playerNumber.stolen = playerNumber.stolen + stl;
  playerNumber.shots_hit = playerNumber.shots_hit + shothit;
  playerNumber.shots_missed = playerNumber.shots_hit + shotmiss;
  playerNumber.three_hit = playerNumber.three_hit + thrhit;
  playerNumber.three_missed = playerNumber.three_missed + thrmiss;
  playerNumber.freethrows_hit = playerNumber.freethrows_hit + frthit;
  playerNumber.freethrows_missed = playerNumber.freethrows_missed + frtmiss;

  const element00111 = document.querySelector('.p06-points');
  element00111.append(pts);
  const element00112 = document.querySelector('.p06-rebounds');
  element00112.append(rbd);
  const element00113 = document.querySelector('.p06-assists');
  element00113.append(ast);
  const element00114 = document.querySelector('.p06-blocks');
  element00114.append(blk);
  const element00115 = document.querySelector('.p06-stolen');
  element00115.append(stl);
  const element00116 = document.querySelector('.p06-shot-pct');
  element00116.append(`${shothit}/${shotmiss}`);
  const element00117 = document.querySelector('.p06-three-pct');
  element00117.append(`${thrhit}/${thrmiss}`);
  const element00118 = document.querySelector('.p06-ft-pct');
  element00118.append(`${frthit}/${frtmiss}`);
}

function matchSeven(playerNumber, pts, rbd, ast, blk, stl, shothit, shotmiss, thrhit, thrmiss, frthit, frtmiss) {
  playerNumber.points = playerNumber.points + pts;
  playerNumber.rebounds = playerNumber.rebounds + rbd;
  playerNumber.assists = playerNumber.assists + ast;
  playerNumber.blocks = playerNumber.blocks + blk;
  playerNumber.stolen = playerNumber.stolen + stl;
  playerNumber.shots_hit = playerNumber.shots_hit + shothit;
  playerNumber.shots_missed = playerNumber.shots_hit + shotmiss;
  playerNumber.three_hit = playerNumber.three_hit + thrhit;
  playerNumber.three_missed = playerNumber.three_missed + thrmiss;
  playerNumber.freethrows_hit = playerNumber.freethrows_hit + frthit;
  playerNumber.freethrows_missed = playerNumber.freethrows_missed + frtmiss;

  const element100 = document.querySelector('.p07-points');
  element100.append(pts);
  const element101 = document.querySelector('.p07-rebounds');
  element101.append(rbd);
  const element102 = document.querySelector('.p07-assists');
  element102.append(ast);
  const element103 = document.querySelector('.p07-blocks');
  element103.append(blk);
  const element104 = document.querySelector('.p07-stolen');
  element104.append(stl);
  const element105 = document.querySelector('.p07-shot-pct');
  element105.append(`${shothit}/${shotmiss}`);
  const element106 = document.querySelector('.p07-three-pct');
  element106.append(`${thrhit}/${thrmiss}`);
  const element107 = document.querySelector('.p07-ft-pct');
  element107.append(`${frthit}/${frtmiss}`);
}

function matchEight(playerNumber, pts, rbd, ast, blk, stl, shothit, shotmiss, thrhit, thrmiss, frthit, frtmiss) {
  playerNumber.points = playerNumber.points + pts;
  playerNumber.rebounds = playerNumber.rebounds + rbd;
  playerNumber.assists = playerNumber.assists + ast;
  playerNumber.blocks = playerNumber.blocks + blk;
  playerNumber.stolen = playerNumber.stolen + stl;
  playerNumber.shots_hit = playerNumber.shots_hit + shothit;
  playerNumber.shots_missed = playerNumber.shots_hit + shotmiss;
  playerNumber.three_hit = playerNumber.three_hit + thrhit;
  playerNumber.three_missed = playerNumber.three_missed + thrmiss;
  playerNumber.freethrows_hit = playerNumber.freethrows_hit + frthit;
  playerNumber.freethrows_missed = playerNumber.freethrows_missed + frtmiss;

  const element110 = document.querySelector('.p08-points');
  element110.append(pts);
  const element120 = document.querySelector('.p08-rebounds');
  element120.append(rbd);
  const element130 = document.querySelector('.p08-assists');
  element130.append(ast);
  const element140 = document.querySelector('.p08-blocks');
  element140.append(blk);
  const element150 = document.querySelector('.p08-stolen');
  element150.append(stl);
  const element160 = document.querySelector('.p08-shot-pct');
  element160.append(`${shothit}/${shotmiss}`);
  const element170 = document.querySelector('.p08-three-pct');
  element170.append(`${thrhit}/${thrmiss}`);
  const element180 = document.querySelector('.p08-ft-pct');
  element180.append(`${frthit}/${frtmiss}`);
}

