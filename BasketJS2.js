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
  three_missed: 1,
  freethrows_hit: 0,
  freethrows_missed: 1
}

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

let player9 = {
  name: "Ante Grčić sr.",
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

let player4 = {
  name: "Ante Grčić jr.",
  matches: 1,
  points: 10,
  rebounds: 9,
  assists: 0,
  blocks: 1,
  stolen: 1,
  shots_hit: 10,
  shots_missed: 22,
  three_hit: 0,
  three_missed: 4,
  freethrows_hit: 0,
  freethrows_missed: 1
}

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
  freethrows_missed: 1
}

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

let player17 = {
  name: "Dominik Bralić",
  matches: 1,
  points: 3,
  rebounds: 5,
  assists: 4,
  blocks: 0,
  stolen: 2,
  shots_hit: 2,
  shots_missed: 4,
  three_hit: 1,
  three_missed: 2,
  freethrows_hit: 0,
  freethrows_missed: 1
}

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
  three_missed: 1,
  freethrows_hit: 0,
  freethrows_missed: 1
}

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

let player23 = {
  name: "Vinko Andrin",
  matches: 1,
  points: 0,
  rebounds: 2,
  assists: 1,
  blocks: 0,
  stolen: 0,
  shots_hit: 0,
  shots_missed: 5,
  three_hit: 0,
  three_missed: 2,
  freethrows_hit: 0,
  freethrows_missed: 1
}

let player24 = {
  name: "Ante Brkić",
  matches: 1,
  points: 2,
  rebounds: 4,
  assists: 3,
  blocks: 0,
  stolen: 1,
  shots_hit: 1,
  shots_missed: 8,
  three_hit: 1,
  three_missed: 5,
  freethrows_hit: 0,
  freethrows_missed: 1
}

let player25 = {
  name: "Mate Bilan",
  matches: 1,
  points: 5,
  rebounds: 8,
  assists: 1,
  blocks: 0,
  stolen: 2,
  shots_hit: 2,
  shots_missed: 11,
  three_hit: 2,
  three_missed: 6,
  freethrows_hit: 0,
  freethrows_missed: 1
}

let player26 = {
  name: "Luka Ćapeta",
  matches: 1,
  points: 1,
  rebounds: 6,
  assists: 3,
  blocks: 1,
  stolen: 4,
  shots_hit: 1,
  shots_missed: 5,
  three_hit: 0,
  three_missed: 1,
  freethrows_hit: 0,
  freethrows_missed: 1
}

let player27 = {
  name: "Anđelo Zečević",
  matches: 1,
  points: 1,
  rebounds: 5,
  assists: 0,
  blocks: 0,
  stolen: 0,
  shots_hit: 1,
  shots_missed: 3,
  three_hit: 0,
  three_missed: 1,
  freethrows_hit: 0,
  freethrows_missed: 1
}

let player28 = {
  name: "Nikica Podrug",
  matches: 1,
  points: 4,
  rebounds: 6,
  assists: 1,
  blocks: 2,
  stolen: 2,
  shots_hit: 3,
  shots_missed: 9,
  three_hit: 1,
  three_missed: 6,
  freethrows_hit: 0,
  freethrows_missed: 2
}

let player29 = {
  name: "Mateo Podrug",
  matches: 1,
  points: 9,
  rebounds: 1,
  assists: 1,
  blocks: 0,
  stolen: 0,
  shots_hit: 5,
  shots_missed: 15,
  three_hit: 2,
  three_missed: 3,
  freethrows_hit: 1,
  freethrows_missed: 1
}

let player30 = {
  name: "Tomislav Mirčeta",
  matches: 1,
  points: 4,
  rebounds: 4,
  assists: 2,
  blocks: 0,
  stolen: 2,
  shots_hit: 2,
  shots_missed: 18,
  three_hit: 2,
  three_missed: 14,
  freethrows_hit: 0,
  freethrows_missed: 1
}

let player31 = {
  name: "Zvonimir Zebić",
  matches: 1,
  points: 4,
  rebounds: 4,
  assists: 2,
  blocks: 0,
  stolen: 1,
  shots_hit: 3,
  shots_missed: 8,
  three_hit: 1,
  three_missed: 3,
  freethrows_hit: 0,
  freethrows_missed: 1
}

let player32 = {
  name: "Anđelko Podrug",
  matches: 1,
  points: 0,
  rebounds: 2,
  assists: 3,
  blocks: 0,
  stolen: 1,
  shots_hit: 0,
  shots_missed: 1,
  three_hit: 0,
  three_missed: 1,
  freethrows_hit: 0,
  freethrows_missed: 1
}


// Ulomak za najbolje:

export function playerBest() {
let playersPoints = [player1, player2, player3, player5, player6, player7, player8, player9, player10, player11, player12, player13, player14, player15, player16, player17, player18, player19, player20, player21, player22, player23, player24, player25, player26, player27, player28, player29, player30];

const poredak = playersPoints.map(({ name, matches, points_average }) => ({ name, matches, points_average })).sort((a,b) => b.points_average - a.points_average);

const elementno1 = document.querySelector('.skor-prvi-ime'); 
elementno1.append(poredak[0].name);
const elementno2 = document.querySelector('.skor-prvi-broj'); 
elementno2.append(poredak[0].points_average.toFixed(1));
const elementno3 = document.querySelector('.skor-drugi-ime'); 
elementno3.append(poredak[1].name);
const elementno4 = document.querySelector('.skor-drugi-broj'); 
elementno4.append(poredak[1].points_average.toFixed(1));
const elementno5 = document.querySelector('.skor-trechi-ime'); 
elementno5.append(poredak[2].name);
const elementno6 = document.querySelector('.skor-trechi-broj'); 
elementno6.append(poredak[2].points_average.toFixed(1));

let playersRebounds = [player1, player2, player3, player5, player6, player7, player8, player9, player10, player11, player12, player13, player14, player15, player16, player17, player18, player19, player20, player21, player22, player23, player24, player25, player26, player27, player28, player29, player30];
const poredakSkoka = playersRebounds.map(({ name, rebounds_average }) => ({ name, rebounds_average })).sort((a,b) => b.rebounds_average - a.rebounds_average);

const elementno7 = document.querySelector('.skokovi-prvi-ime'); 
elementno7.append(poredakSkoka[0].name);
const elementno8 = document.querySelector('.skokovi-prvi-broj'); 
elementno8.append(poredakSkoka[0].rebounds_average.toFixed(1));
const elementno9 = document.querySelector('.skokovi-drugi-ime'); 
elementno9.append(poredakSkoka[1].name);
const elementno10 = document.querySelector('.skokovi-drugi-broj'); 
elementno10.append(poredakSkoka[1].rebounds_average.toFixed(1));
const elementno11 = document.querySelector('.skokovi-trechi-ime'); 
elementno11.append(poredakSkoka[2].name);
const elementno12 = document.querySelector('.skokovi-trechi-broj'); 
elementno12.append(poredakSkoka[2].rebounds_average.toFixed(1));

let playersAssists = [player1, player2, player3, player5, player6, player7, player8, player9, player10, player11, player12, player13, player14, player15, player16, player17, player18, player19, player20, player21, player22, player23, player25, player26, player27, player28, player29, player30];
const poredakAsista = playersAssists.map(({ name, assists_average }) => ({ name, assists_average })).sort((a,b) => b.assists_average - a.assists_average);

const elementno13 = document.querySelector('.asisti-prvi-ime'); 
elementno13.append(poredakAsista[0].name);
const elementno14 = document.querySelector('.asisti-prvi-broj'); 
elementno14.append(poredakAsista[0].assists_average.toFixed(1));
const elementno15 = document.querySelector('.asisti-drugi-ime'); 
elementno15.append(poredakAsista[1].name);
const elementno16 = document.querySelector('.asisti-drugi-broj'); 
elementno16.append(poredakAsista[1].assists_average.toFixed(1));
const elementno17 = document.querySelector('.asisti-trechi-ime'); 
elementno17.append(poredakAsista[2].name);
const elementno18 = document.querySelector('.asisti-trechi-broj'); 
elementno18.append(poredakAsista[2].assists_average);

let playersBlocks = [player1, player2, player3, player5, player6, player7, player8, player9, player10, player11, player12, player14, player15, player16, player17, player18, player19, player20, player21, player22, player23, player24, player25, player26, player27, player29, player30, player4];
const poredakBlokova = playersBlocks.map(({ name, blocks_average }) => ({ name, blocks_average })).sort((a,b) => b.blocks_average - a.blocks_average);

const elementno19 = document.querySelector('.blokovi-prvi-ime'); 
elementno19.append(poredakBlokova[0].name);
const elementno20 = document.querySelector('.blokovi-prvi-broj'); 
elementno20.append(poredakBlokova[0].blocks_average.toFixed(1));
const elementno21 = document.querySelector('.blokovi-drugi-ime'); 
elementno21.append(poredakBlokova[1].name);
const elementno22 = document.querySelector('.blokovi-drugi-broj'); 
elementno22.append(poredakBlokova[1].blocks_average.toFixed(1));
const elementno23 = document.querySelector('.blokovi-trechi-ime'); 
elementno23.append(poredakBlokova[2].name);
const elementno24 = document.querySelector('.blokovi-trechi-broj'); 
elementno24.append(poredakBlokova[2].blocks_average.toFixed(1));

let playersStolen = [player1, player2, player3, player5, player6, player7, player8, player9, player10, player11, player12, player13, player14, player15, player16, player17, player18, player19, player20, player21, player22, player23, player24, player26, player27, player28, player29, player30, player4];
const poredakKradja = playersStolen.map(({ name, stolen_average }) => ({ name, stolen_average })).sort((a,b) => b.stolen_average - a.stolen_average);

const elementno25 = document.querySelector('.stolen-prvi-ime'); 
elementno25.append(poredakKradja[0].name);
const elementno26 = document.querySelector('.stolen-prvi-broj'); 
elementno26.append(poredakKradja[0].stolen_average.toFixed(1));
const elementno27 = document.querySelector('.stolen-drugi-ime'); 
elementno27.append(poredakKradja[1].name);
const elementno28 = document.querySelector('.stolen-drugi-broj'); 
elementno28.append(poredakKradja[1].stolen_average.toFixed(1));
const elementno29 = document.querySelector('.stolen-trechi-ime'); 
elementno29.append(poredakKradja[2].name);
const elementno30 = document.querySelector('.stolen-trechi-broj'); 
elementno30.append(poredakKradja[2].stolen_average.toFixed(1));

let playersShothit = [player1, player2, player3, player5, player6, player7, player8, player9, player10, player11, player12, player13, player14, player15, player16, player17, player18, player19, player20, player21, player22, player23, player24, player25, player26, player27, player29, player30];
const poredakTrica = playersShothit.map(({ name, shots_percentage }) => ({ name, shots_percentage })).sort((a,b) => b.shots_percentage - a.shots_percentage);

const elementno31 = document.querySelector('.threepct-prvi-ime'); 
elementno31.append(poredakTrica[0].name);
const elementno32 = document.querySelector('.threepct-prvi-broj'); 
elementno32.append(`${poredakTrica[0].shots_percentage.toFixed(2)} %`);
const elementno33 = document.querySelector('.threepct-drugi-ime'); 
elementno33.append(poredakTrica[1].name);
const elementno34 = document.querySelector('.threepct-drugi-broj'); 
elementno34.append(`${poredakTrica[1].shots_percentage.toFixed(2)} %`);
const elementno35 = document.querySelector('.threepct-trechi-ime'); 
elementno35.append(poredakTrica[2].name);
const elementno36 = document.querySelector('.threepct-trechi-broj'); 
elementno36.append(`${poredakTrica[2].shots_percentage.toFixed(2)} %`);

let playersThreehit = [player1, player2, player3, player5, player6, player7, player8, player9, player10, player11, player12, player13, player14, player15, player16, player17, player18, player19, player20, player21, player22, player23, player24, player25, player26, player27, player28, player30, player4];
const poredakTrojki = playersThreehit.map(({ name, three_percentage }) => ({ name, three_percentage })).sort((a,b) => b.three_percentage - a.three_percentage);

const elementno37 = document.querySelector('.trojke-prvi-ime'); 
elementno37.append(poredakTrojki[0].name);
const elementno38 = document.querySelector('.trojke-prvi-broj'); 
elementno38.append(`${poredakTrojki[0].three_percentage.toFixed(2)} %`);
const elementno39 = document.querySelector('.trojke-drugi-ime'); 
elementno39.append(poredakTrojki[1].name);
const elementno40 = document.querySelector('.trojke-drugi-broj'); 
elementno40.append(`${poredakTrojki[1].three_percentage.toFixed(2)} %`);
const elementno41 = document.querySelector('.trojke-trechi-ime'); 
elementno41.append(poredakTrojki[2].name);
const elementno42 = document.querySelector('.trojke-trechi-broj'); 
elementno42.append(`${poredakTrojki[2].three_percentage.toFixed(2)} %`);

let playersFreehit = [player1, player2, player3, player5, player6, player7, player8, player9, player10, player11, player12, player13, player14, player15, player16, player17, player18, player19, player20, player21, player22, player23, player24, player25, player26, player27, player28, player30, player4];
const poredakFt = playersFreehit.map(({ name, freethrows_percentage }) => ({ name, freethrows_percentage })).sort((a,b) => b.freethrows_percentage - a.freethrows_percentage);

const elementno43 = document.querySelector('.ft-prvi-ime'); 
elementno43.append(poredakFt[0].name);
const elementno44 = document.querySelector('.ft-prvi-broj'); 
elementno44.append(`${poredakFt[0].freethrows_percentage.toFixed(2)} %`);
const elementno45 = document.querySelector('.ft-drugi-ime'); 
elementno45.append(poredakFt[1].name);
const elementno46 = document.querySelector('.ft-drugi-broj'); 
elementno46.append(`${poredakFt[1].freethrows_percentage.toFixed(2)} %`);
const elementno47 = document.querySelector('.ft-trechi-ime'); 
elementno47.append(poredakFt[2].name);
const elementno48 = document.querySelector('.ft-trechi-broj'); 
elementno48.append(`${poredakFt[2].freethrows_percentage.toFixed(2)} %`);
}

export function teamstatsOne() {
  let playerOne = [player1.points_average.toFixed(1), player1.rebounds_average.toFixed(1), player1.assists_average.toFixed(1), player1.blocks_average.toFixed(1), player1.stolen_average.toFixed(1), `${player1.shots_percentage.toFixed(1)} %`, `${player1.three_percentage.toFixed(1)} %`, `${player1.freethrows_percentage} %`];
  for (let i = 0; i < playerOne.length; i++){
    const element = document.querySelector('.element-01' + i);
    element.append(playerOne[i]);
  }

  let playerTwo = [player2.points_average, player2.rebounds_average.toFixed(1), player2.assists_average.toFixed(1), player2.blocks_average.toFixed(1), player2.stolen_average.toFixed(1), `${player2.shots_percentage.toFixed(1)} %`, `${player2.three_percentage.toFixed(1)} %`, `${player2.freethrows_percentage.toFixed(2)} %`];
  for (let i = 0; i < playerTwo.length; i++){
    const element = document.querySelector('.element-02' + i);
    element.append(playerTwo[i]);
  }

  let playerThree = [player3.points_average.toFixed(1), player3.rebounds_average.toFixed(1), player3.assists_average.toFixed(1), player3.blocks_average.toFixed(1), player3.stolen_average.toFixed(1), `${player3.shots_percentage.toFixed(2)} %`, `${player3.three_percentage.toFixed(2)} %`, `${player3.freethrows_percentage} %`];
  for (let i = 0; i < playerThree.length; i++){
    const element = document.querySelector('.element-03' + i);
    element.append(playerThree[i]);
  }

  let playerFive = [player5.points_average.toFixed(1), player5.rebounds_average.toFixed(1), player5.assists_average.toFixed(1), player5.blocks_average.toFixed(1), player5.stolen_average.toFixed(1), `${player5.shots_percentage.toFixed(2)} %`, `${player5.three_percentage.toFixed(2)} %`, `${player5.freethrows_percentage} %`];
  for (let i = 0; i < playerFive.length; i++){
    const element = document.querySelector('.element-05' + i);
    element.append(playerFive[i]);
  }

  let playerTwentysix = [player26.points_average.toFixed(1), player26.rebounds_average.toFixed(1), player26.assists_average.toFixed(1), player26.blocks_average.toFixed(1), player26.stolen_average.toFixed(1), `${player26.shots_percentage.toFixed(2)} %`, `${player26.three_percentage.toFixed(2)} %`, `${player26.freethrows_percentage} %`];
  for (let i = 0; i < playerTwentysix.length; i++){
    const element = document.querySelector('.element-26' + i);
    element.append(playerTwentysix[i]);
  }

  let playerThirtytwo = [player32.points_average.toFixed(1), player32.rebounds_average.toFixed(1), player32.assists_average.toFixed(1), player32.blocks_average.toFixed(1), player32.stolen_average.toFixed(1), `${player32.shots_percentage.toFixed(2)} %`, `${player32.three_percentage.toFixed(2)} %`, `${player32.freethrows_percentage} %`];
  for (let i = 0; i < playerThirtytwo.length; i++){
    const element = document.querySelector('.element-32' + i);
    element.append(playerThirtytwo[i]);
  }
} 

export function teamstatsTwo() {
  let playerSix = [player6.points_average, player6.rebounds_average, player6.assists_average, player6.blocks_average, player6.stolen_average, `${player6.shots_percentage.toFixed(2)} %`, `${player6.three_percentage.toFixed(2)} %`, `${player6.freethrows_percentage.toFixed(1)} %`];
  for (let i = 0; i < playerSix.length; i++){
    const element = document.querySelector('.element-06' + i);
    element.append(playerSix[i]);
  }

  let playerSeven = [player7.points_average, player7.rebounds_average, player7.assists_average, player7.blocks_average, player7.stolen_average, `${player7.shots_percentage.toFixed(2)} %`, `${player7.three_percentage.toFixed(2)} %`, `${player7.freethrows_percentage} %`];
  for (let i = 0; i < playerSeven.length; i++){
    const element = document.querySelector('.element-07' + i);
    element.append(playerSeven[i]);
  }

  let playerEight = [player8.points_average, player8.rebounds_average, player8.assists_average, player8.blocks_average, player8.stolen_average, `${player8.shots_percentage.toFixed(2)} %`, `${player8.three_percentage.toFixed(2)} %`, `${player8.freethrows_percentage} %`];
  for (let i = 0; i < playerEight.length; i++){
    const element = document.querySelector('.element-08' + i);
    element.append(playerEight[i]);
  }

  let playerTwentyfour = [player24.points_average, player24.rebounds_average, player24.assists_average, player24.blocks_average, player24.stolen_average, `${player24.shots_percentage.toFixed(2)} %`, `${player24.three_percentage.toFixed(2)} %`, `${player24.freethrows_percentage} %`];
  for (let i = 0; i < playerTwentyfour.length; i++){
    const element = document.querySelector('.element-24' + i);
    element.append(playerTwentyfour[i]);
  }

  let playerTwentynine = [player29.points_average, player29.rebounds_average, player29.assists_average, player29.blocks_average, player29.stolen_average, `${player29.shots_percentage.toFixed(2)} %`, `${player29.three_percentage.toFixed(2)} %`, `${player29.freethrows_percentage} %`];
  for (let i = 0; i < playerTwentynine.length; i++){
    const element = document.querySelector('.element-29' + i);
    element.append(playerTwentynine[i]);
  }

  let playerThirtyone = [player31.points_average, player31.rebounds_average, player31.assists_average, player31.blocks_average.toFixed(1), player31.stolen_average.toFixed(1), `${player31.shots_percentage.toFixed(2)} %`, `${player31.three_percentage.toFixed(2)} %`, `${player31.freethrows_percentage} %`];
  for (let i = 0; i < playerThirtyone.length; i++){
    const element = document.querySelector('.element-31' + i);
    element.append(playerThirtyone[i]);
  }
}

export function teamstatsThree() {
  let playerNine = [player9.points_average, player9.rebounds_average.toFixed(1), player9.assists_average.toFixed(1), player9.blocks_average.toFixed(1), player9.stolen_average.toFixed(1), `${player9.shots_percentage.toFixed(2)} %`, `${player9.three_percentage.toFixed(2)} %`, `${player9.freethrows_percentage} %`];
  for (let i = 0; i < playerNine.length; i++){
    const element = document.querySelector('.element-09' + i);
    element.append(playerNine[i]);
  }

  let playerTen = [player10.points_average.toFixed(1), player10.rebounds_average.toFixed(1), player10.assists_average.toFixed(1), player10.blocks_average, player10.stolen_average.toFixed(1), `${player10.shots_percentage.toFixed(2)} %`, `${player10.three_percentage.toFixed(2)} %`, `${player10.freethrows_percentage} %`];
  for (let i = 0; i < playerTen.length; i++){
    const element = document.querySelector('.element-10' + i);
    element.append(playerTen[i]);
  }

  let playerEleven = [player11.points_average, player11.rebounds_average, player11.assists_average, player11.blocks_average, player11.stolen_average, `${player11.shots_percentage.toFixed(2)} %`, `${player11.three_percentage.toFixed(2)} %`, `${player11.freethrows_percentage} %`];
  for (let i = 0; i < playerEleven.length; i++){
    const element = document.querySelector('.element-11' + i);
    element.append(playerEleven[i]);
  }

  let playerThirteen = [player13.points_average.toFixed(2), player13.rebounds_average.toFixed(2), player13.assists_average, player13.blocks_average, player13.stolen_average.toFixed(2), `${player13.shots_percentage.toFixed(2)} %`, `${player13.three_percentage.toFixed(2)} %`, `${player13.freethrows_percentage} %`];
  for (let i = 0; i < playerThirteen.length; i++){
    const element = document.querySelector('.element-13' + i);
    element.append(playerThirteen[i]);
  }

  let playerFour = [player4.points_average, player4.rebounds_average, player4.assists_average, player4.blocks_average, player4.stolen_average, `${player4.shots_percentage.toFixed(2)} %`, `${player4.three_percentage.toFixed(2)} %`, `${player4.freethrows_percentage} %`];
  for (let i = 0; i < playerFour.length; i++){
    const element = document.querySelector('.element-04' + i);
    element.append(playerFour[i]);
  }
}

export function teamstatsFour() {
  let playerFourteen = [player14.points_average.toFixed(1), player14.rebounds_average.toFixed(1), player14.assists_average.toFixed(1), player14.blocks_average.toFixed(1), player14.stolen_average.toFixed(2), `${player14.shots_percentage.toFixed(2)} %`, `${player14.three_percentage.toFixed(2)} %`, `${player14.freethrows_percentage} %`];
  for (let i = 0; i < playerFourteen.length; i++){
    const element = document.querySelector('.element-14' + i);
    element.append(playerFourteen[i]);
  }

  let playerTwelve = [player12.points_average.toFixed(2), player12.rebounds_average.toFixed(2), player12.assists_average.toFixed(2), player12.blocks_average.toFixed(2), player12.stolen_average.toFixed(2), `${player12.shots_percentage.toFixed(2)} %`, `${player12.three_percentage.toFixed(2)} %`, `${player12.freethrows_percentage} %`];
  for (let i = 0; i < playerTwelve.length; i++){
    const element = document.querySelector('.element-12' + i);
    element.append(playerTwelve[i]);
  }

  let playerFifteen = [player15.points_average, player15.rebounds_average, player15.assists_average, player15.blocks_average, player15.stolen_average, `${player15.shots_percentage.toFixed(2)} %`, `${player15.three_percentage.toFixed(2)} %`, `${player15.freethrows_percentage} %`];
  for (let i = 0; i < playerFifteen.length; i++){
    const element = document.querySelector('.element-15' + i);
    element.append(playerFifteen[i]);
  }

  let playerTwentythree = [player23.points_average, player23.rebounds_average.toFixed(2), player23.assists_average.toFixed(2), player23.blocks_average, player23.stolen_average.toFixed(2),`${player23.shots_percentage.toFixed(2)} %`, `${player23.three_percentage.toFixed(2)} %`, `${player23.freethrows_percentage} %`];
  for (let i = 0; i < playerTwentythree.length; i++){
    const element = document.querySelector('.element-23' + i);
    element.append(playerTwentythree[i]);
  }

  let playerTwentyfive = [player25.points_average, player25.rebounds_average, player25.assists_average, player25.blocks_average, player25.stolen_average, `${player25.shots_percentage.toFixed(2)} %`, `${player25.three_percentage.toFixed(2)} %`, `${player25.freethrows_percentage} %`];
  for (let i = 0; i < playerTwentyfive.length; i++){
    const element = document.querySelector('.element-25' + i);
    element.append(playerTwentyfive[i]);
  }

  let playerThirty = [player30.points_average.toFixed(1), player30.rebounds_average.toFixed(1), player30.assists_average.toFixed(1), player30.blocks_average, player30.stolen_average.toFixed(1), `${player30.shots_percentage.toFixed(2)} %`, `${player30.three_percentage.toFixed(2)} %`, `${player30.freethrows_percentage} %`];
  for (let i = 0; i < playerThirty.length; i++){
    const element = document.querySelector('.element-30' + i);
    element.append(playerThirty[i]);
  }
}

export function teamstatsFive() {
  let playerSixteen = [player16.points_average, player16.rebounds_average.toFixed(2), player16.assists_average.toFixed(2), player16.blocks_average, player16.stolen_average.toFixed(2), `${player16.shots_percentage.toFixed(2)} %`, `${player16.three_percentage.toFixed(2)} %`, `${player16.freethrows_percentage} %`];
  for (let i = 0; i < playerSixteen.length; i++){
    const element = document.querySelector('.element-16' + i);
    element.append(playerSixteen[i]);
  }

  let playerSeventeen = [player17.points_average, player17.rebounds_average, player17.assists_average.toFixed(1), player17.blocks_average, player17.stolen_average.toFixed(1), `${player17.shots_percentage.toFixed(2)} %`, `${player17.three_percentage.toFixed(2)} %`, `${player17.freethrows_percentage} %`];
  for (let i = 0; i < playerSeventeen.length; i++){
    const element = document.querySelector('.element-17' + i);
    element.append(playerSeventeen[i]);
  }

  let playerEighteen = [player18.points_average.toFixed(2), player18.rebounds_average.toFixed(2), player18.assists_average, player18.blocks_average.toFixed(2), player18.stolen_average.toFixed(2), `${player18.shots_percentage.toFixed(2)} %`, `${player18.three_percentage.toFixed(2)} %`, `${player18.freethrows_percentage} %`];
  for (let i = 0; i < playerEighteen.length; i++){
    const element = document.querySelector('.element-18' + i);
    element.append(playerEighteen[i]);
  }
  
  let playerNineteen = [player19.points_average, player19.rebounds_average, player19.assists_average, player19.blocks_average, player19.stolen_average, `${player19.shots_percentage.toFixed(2)} %`, `${player19.three_percentage.toFixed(2)} %`, `${player19.freethrows_percentage} %`];
  for (let i = 0; i < playerNineteen.length; i++){
    const element = document.querySelector('.element-19' + i);
    element.append(playerNineteen[i]);
  }

  let playerTwentyseven = [player27.points_average, player27.rebounds_average.toFixed(2), player27.assists_average.toFixed(2), player27.blocks_average.toFixed(2), player27.stolen_average, `${player27.shots_percentage.toFixed(2)} %`, `${player27.three_percentage.toFixed(2)} %`, `${player27.freethrows_percentage} %`];
  for (let i = 0; i < playerTwentyseven.length; i++){
    const element = document.querySelector('.element-27' + i);
    element.append(playerTwentyseven[i]);
  }
}

export function teamstatsSix() {
  let playerTwenty = [player20.points_average, player20.rebounds_average, player20.assists_average, player20.blocks_average, player20.stolen_average, `${player20.shots_percentage.toFixed(2)} %`, `${player20.three_percentage.toFixed(2)} %`, `${player20.freethrows_percentage} %`];
  for (let i = 0; i < playerTwenty.length; i++){
    const element = document.querySelector('.element-20' + i);
    element.append(playerTwenty[i]);
  }

  let playerTwentyone = [player21.points_average, player21.rebounds_average, player21.assists_average, player21.blocks_average, player21.stolen_average, `${player21.shots_percentage.toFixed(2)} %`, `${player21.three_percentage.toFixed(2)} %`, `${player21.freethrows_percentage} %`];
  for (let i = 0; i < playerTwentyone.length; i++){
    const element = document.querySelector('.element-21' + i);
    element.append(playerTwentyone[i]);
  }

  let playerTwentytwo = [player22.points_average, player22.rebounds_average, player22.assists_average, player22.blocks_average, player22.stolen_average, `${player22.shots_percentage.toFixed(2)} %`, `${player22.three_percentage.toFixed(2)} %`, `${player22.freethrows_percentage} %`];
  for (let i = 0; i < playerTwentytwo.length; i++){
    const element = document.querySelector('.element-22' + i);
    element.append(playerTwentytwo[i]);
  }

  let playerTwentyeight = [player28.points_average, player28.rebounds_average, player28.assists_average, player28.blocks_average, player28.stolen_average, `${player28.shots_percentage.toFixed(2)} %`, `${player28.three_percentage.toFixed(2)} %`, `${player28.freethrows_percentage} %`];
  for (let i = 0; i < playerTwentyeight.length; i++){
    const element = document.querySelector('.element-28' + i);
    element.append(playerTwentyeight[i]);
  }
}
  
 function matchStats(playerNumber, pts, rbd, ast, blk, stl, shothit, shotmiss, thrhit, thrmiss, frthit, frtmiss) {
  playerNumber.matches = playerNumber.matches + 1;
  playerNumber.points = playerNumber.points + pts;
  playerNumber.rebounds = playerNumber.rebounds + rbd;
  playerNumber.assists = playerNumber.assists + ast;
  playerNumber.blocks = playerNumber.blocks + blk;
  playerNumber.stolen = playerNumber.stolen + stl;
  playerNumber.shots_hit = playerNumber.shots_hit + shothit;
  playerNumber.shots_missed = playerNumber.shots_missed + shotmiss;
  playerNumber.three_hit = playerNumber.three_hit + thrhit;
  playerNumber.three_missed = playerNumber.three_missed + thrmiss;
  playerNumber.freethrows_hit = playerNumber.freethrows_hit + frthit;
  playerNumber.freethrows_missed = playerNumber.freethrows_missed + frtmiss;
  
}

matchStats(player6, 9, 7, 2, 0, 0, 5, 15, 2, 10, 2, 2);
matchStats(player7, 8, 4, 1, 0, 0, 7, 18, 1, 5, 0, 0);
matchStats(player8, 2, 4, 0, 1, 3, 2, 6, 0, 1, 0, 0);
matchStats(player16, 10, 9, 2, 0, 0, 7, 19, 3, 9, 0, 2);
matchStats(player19, 3, 4, 1, 0, 1, 3, 16, 0, 7, 0, 1);
matchStats(player18, 0, 5, 1, 1, 1, 0, 2, 0, 0, 0, 1);
matchStats(player17, 2, 5, 0, 0, 0, 1, 6, 1, 3, 0, 0);
matchStats(player9, 11, 7, 4, 2, 1, 7, 10, 4, 7, 0, 0);
matchStats(player10, 4, 8, 4, 0, 1, 3, 16, 1, 9, 0, 0);
matchStats(player11, 2, 3, 2, 0, 0, 2, 4, 0, 0, 0, 0);
matchStats(player13, 4, 2, 2, 1, 0, 3, 5, 1, 3, 0, 0);
matchStats(player15, 1, 5, 0, 0, 2, 1, 5, 0, 2, 0, 0);
matchStats(player14, 4, 3, 2, 1, 5, 2, 16, 2, 14, 0, 0);
matchStats(player16, 10, 9, 2, 0, 0, 7, 19, 3, 9, 0, 0);
matchStats(player12, 0, 0, 0, 0, 1, 0, 3, 0, 3, 0, 0);
matchStats(player1, 6, 2, 3, 1, 1, 3, 10, 3, 10, 0, 0);
matchStats(player2, 4, 8, 1, 2, 1, 3, 7, 0, 1, 1, 5);
matchStats(player3, 9, 3, 3, 0, 2, 6, 12, 2, 5, 0, 0);
matchStats(player5, 1, 2, 0, 0, 1, 1, 3, 0, 0, 0, 1);
matchStats(player20, 0, 4, 1, 0, 2, 0, 4, 0, 2, 0, 0);
matchStats(player21, 2, 2, 5, 1, 2, 2, 13, 0, 5, 0, 1);
matchStats(player22, 1, 1, 1, 0, 0, 1, 3, 0, 1, 0, 1);
matchStats(player11, 9, 8, 3, 0, 1, 8, 17, 0, 3, 1, 3);
matchStats(player9, 2, 20, 11, 3, 5, 2, 11, 0, 3, 0, 2);
matchStats(player21, 5, 13, 1, 1, 6, 4, 28, 1, 13, 0, 2);
matchStats(player22, 1, 8, 1, 0, 1, 1, 7, 0, 2, 0, 0);
matchStats(player20, 2, 3, 3, 1, 0, 2, 19, 0, 9, 0, 0);
matchStats(player2, 10, 10, 3, 0, 4, 9, 23, 1, 5, 0, 2);
matchStats(player1, 2, 4, 0, 0, 0, 2, 14, 0, 7, 0, 1);
matchStats(player3, 2, 6, 7, 0, 4, 2, 10, 0, 2, 0, 0);
matchStats(player26, 7, 11, 0, 1, 0, 7, 12, 0, 1, 0, 1);
matchStats(player16, 5, 4, 1, 0, 0, 2, 16, 1, 13, 2, 2);
matchStats(player27, 1, 17, 1, 2, 4, 1, 6, 0, 0, 0, 0);
matchStats(player19, 5, 3, 0, 0, 1, 5, 13, 0, 4, 0, 0);
matchStats(player8, 1, 7, 1, 0, 0, 1, 4, 0, 0, 0, 0);
matchStats(player6, 4, 6, 2, 1, 1, 2, 10, 2, 8, 0, 0);
matchStats(player7, 7, 9, 2, 0, 3, 5, 8, 2, 4, 0, 3);
matchStats(player25, 4, 5, 1, 0, 4, 2, 13, 2, 11, 0, 0);
matchStats(player15, 5, 7, 0, 0, 1, 4, 13, 1, 7, 0, 0);
matchStats(player30, 4, 4, 2, 0, 2, 2, 18, 2, 14, 0, 0);

matchStats(player10, 6, 4, 2, 0, 2, 4, 12, 0, 5, 2, 2);
matchStats(player9, 11, 3, 3, 0, 1, 6, 10, 5, 8, 0, 1);
matchStats(player11, 4, 2, 0, 0, 1, 3, 6, 0, 1, 1, 1);
matchStats(player6, 13, 4, 1, 1, 2, 6, 15, 6, 15, 1, 1);
matchStats(player7, 1, 3, 2, 0, 1, 1, 9, 0, 6, 0, 0);
matchStats(player8, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 0);
matchStats(player31, 4, 4, 2, 0, 1, 3, 8, 1, 3, 0, 1);
matchStats(player2, 10, 9, 3, 1, 4, 9, 18, 0, 3, 1, 1);
matchStats(player1, 7, 2, 7, 0, 2, 4, 12, 3, 11, 0, 1);
matchStats(player5, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
matchStats(player32, 0, 2, 3, 0, 1, 0, 1, 0, 1, 0, 1);
matchStats(player26, 4, 8, 0, 0, 4, 4, 7, 0, 0, 0, 1);
matchStats(player14, 5, 10, 1, 0, 3, 3, 17, 2, 11, 0, 0);
matchStats(player15, 3, 5, 1, 1, 0, 2, 6, 1, 3, 0, 0);
matchStats(player30, 4, 2, 2, 0, 4, 3, 13, 1, 9, 0, 0);
matchStats(player23, 1, 2, 0, 0, 1, 1, 4, 0, 1, 0, 0);
matchStats(player16, 8, 1, 2, 0, 0, 4, 9, 3, 8, 1, 1);
matchStats(player17, 7, 11, 1, 0, 2, 4, 7, 3, 5, 0, 1);
matchStats(player19, 6, 2, 1, 1, 0, 5, 13, 1, 4, 0, 0);
matchStats(player20, 3, 1, 1, 0, 1, 2, 5, 1, 3, 0, 0);
matchStats(player21, 6, 10, 1, 1, 4, 5, 16, 1, 4, 0, 1);
matchStats(player22, 0, 2, 0, 0, 0, 0, 3, 0, 1, 0, 0);
matchStats(player28, 7, 4, 2, 1, 2, 5, 9, 2, 6, 0, 0);

matchStats(player15, 9, 8, 1, 0, 2, 6, 15, 2, 10, 1, 1);
matchStats(player12, 4, 12, 0, 1, 0, 3, 11, 1, 1, 0, 0);
matchStats(player23, 5, 4, 4, 0, 0, 4, 17, 1, 7, 0, 0);
matchStats(player30, 3, 12, 4, 0, 1, 3, 15, 0, 6, 0, 0);
matchStats(player22, 3, 6, 0, 0, 2, 3, 12, 0, 0, 0, 1);
matchStats(player20, 4, 4, 5, 0, 3, 3, 19, 1, 11, 0, 0);
matchStats(player21, 10, 12, 2, 2, 6, 7, 25, 3, 8, 0, 3);
matchStats(player9, 8, 13, 4, 1, 4, 5, 12, 3, 6, 0, 0);
matchStats(player10, 10, 4, 1, 0, 0, 8, 16, 1, 4, 1, 1);
matchStats(player13, 1, 3, 1, 0, 1, 1, 3, 0, 0, 0, 0);
matchStats(player11, 2, 6, 2, 0, 1, 2, 4, 0, 1, 0, 0);
matchStats(player16, 2, 2, 3, 0, 1, 1, 13, 1, 10, 0, 0);
matchStats(player18, 3, 2, 1, 0, 0, 1, 2, 0, 0, 0, 0);
matchStats(player27, 4, 6, 0, 0, 5, 4, 9, 0, 0, 0, 0);
matchStats(player19, 2, 3, 0, 0, 1, 1, 12, 1, 6, 0, 0);
matchStats(player2, 6, 5, 0, 4, 1, 4, 11, 2, 5, 0, 0);
matchStats(player26, 3, 8, 0, 1, 0, 2, 9, 0, 0, 1, 2);
matchStats(player1, 2, 2, 1, 1, 0, 1, 7, 1, 7, 0, 0);
matchStats(player32, 0, 3, 1, 0, 0, 0, 2, 0, 1, 0, 0);
matchStats(player3, 11, 9, 1, 0, 1, 5, 24, 4, 13, 2, 2);
matchStats(player7, 6, 7, 2, 0, 0, 5, 9, 2, 6, 0, 0);
matchStats(player8, 0, 3, 1, 0, 0, 5, 9, 2, 6, 0, 0);
matchStats(player29, 1, 3, 1, 0, 1, 1, 2, 0, 0, 0, 0);
matchStats(player6, 6, 5, 3, 1, 1, 3, 9, 3, 8, 0, 0);
matchStats(player31, 7, 10, 2, 1, 3, 6, 14, 1, 7, 0, 0);

console.log(player1.matches);
console.log(player1.points);
console.log(player1.points_average);

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

player23.points_average = player23.points / player23.matches;
player23.rebounds_average = player23.rebounds / player23.matches;
player23.assists_average = player23.assists / player23.matches;
player23.blocks_average = player23.blocks / player23.matches;
player23.stolen_average = player23.stolen / player23.matches;
player23.shots_hit_average = player23.shots_hit / player23.matches;
player23.shots_missed_average = player23.shots_missed / player23.matches;
player23.three_hit_average = player23.three_hit / player23.matches;
player23.three_missed_average = player23.three_missed / player23.matches;
player23.shots_percentage = (player23.shots_hit / player23.shots_missed) * 100;
player23.three_percentage = (player23.three_hit / player23.three_missed) * 100;
player23.freethrows_percentage = (player23.freethrows_hit / player23.freethrows_missed) * 100;

player24.points_average = player24.points / player24.matches;
player24.rebounds_average = player24.rebounds / player24.matches;
player24.assists_average = player24.assists / player24.matches;
player24.blocks_average = player24.blocks / player24.matches;
player24.stolen_average = player24.stolen / player24.matches;
player24.shots_hit_average = player24.shots_hit / player24.matches;
player24.shots_missed_average = player24.shots_missed / player24.matches;
player24.three_hit_average = player24.three_hit / player24.matches;
player24.three_missed_average = player24.three_missed / player24.matches;
player24.shots_percentage = (player24.shots_hit / player24.shots_missed) * 100;
player24.three_percentage = (player24.three_hit / player24.three_missed) * 100;
player24.freethrows_percentage = (player24.freethrows_hit / player24.freethrows_missed) * 100;

player25.points_average = player25.points / player25.matches;
player25.rebounds_average = player25.rebounds / player25.matches;
player25.assists_average = player25.assists / player25.matches;
player25.blocks_average = player25.blocks / player25.matches;
player25.stolen_average = player25.stolen / player25.matches;
player25.shots_hit_average = player25.shots_hit / player25.matches;
player25.shots_missed_average = player25.shots_missed / player25.matches;
player25.three_hit_average = player25.three_hit / player25.matches;
player25.three_missed_average = player25.three_missed / player25.matches;
player25.shots_percentage = (player25.shots_hit / player25.shots_missed) * 100;
player25.three_percentage = (player25.three_hit / player25.three_missed) * 100;
player25.freethrows_percentage = (player25.freethrows_hit / player25.freethrows_missed) * 100;

player26.points_average = player26.points / player26.matches;
player26.rebounds_average = player26.rebounds / player26.matches;
player26.assists_average = player26.assists / player26.matches;
player26.blocks_average = player26.blocks / player26.matches;
player26.stolen_average = player26.stolen / player26.matches;
player26.shots_hit_average = player26.shots_hit / player26.matches;
player26.shots_missed_average = player26.shots_missed / player26.matches;
player26.three_hit_average = player26.three_hit / player26.matches;
player26.three_missed_average = player26.three_missed / player26.matches;
player26.shots_percentage = (player26.shots_hit / player26.shots_missed) * 100;
player26.three_percentage = (player26.three_hit / player26.three_missed) * 100;
player26.freethrows_percentage = (player26.freethrows_hit / player26.freethrows_missed) * 100;

player27.points_average = player27.points / player27.matches;
player27.rebounds_average = player27.rebounds / player27.matches;
player27.assists_average = player27.assists / player27.matches;
player27.blocks_average = player27.blocks / player27.matches;
player27.stolen_average = player27.stolen / player27.matches;
player27.shots_hit_average = player27.shots_hit / player27.matches;
player27.shots_missed_average = player27.shots_missed / player27.matches;
player27.three_hit_average = player27.three_hit / player27.matches;
player27.three_missed_average = player27.three_missed / player27.matches;
player27.shots_percentage = (player27.shots_hit / player27.shots_missed) * 100;
player27.three_percentage = (player27.three_hit / player27.three_missed) * 100;
player27.freethrows_percentage = (player27.freethrows_hit / player27.freethrows_missed) * 100;

player28.points_average = player28.points / player28.matches;
player28.rebounds_average = player28.rebounds / player28.matches;
player28.assists_average = player28.assists / player28.matches;
player28.blocks_average = player28.blocks / player28.matches;
player28.stolen_average = player28.stolen / player28.matches;
player28.shots_hit_average = player28.shots_hit / player28.matches;
player28.shots_missed_average = player28.shots_missed / player28.matches;
player28.three_hit_average = player28.three_hit / player28.matches;
player28.three_missed_average = player28.three_missed / player28.matches;
player28.shots_percentage = (player28.shots_hit / player28.shots_missed) * 100;
player28.three_percentage = (player28.three_hit / player28.three_missed) * 100;
player28.freethrows_percentage = (player28.freethrows_hit / player28.freethrows_missed) * 100;

player29.points_average = player29.points / player29.matches;
player29.rebounds_average = player29.rebounds / player29.matches;
player29.assists_average = player29.assists / player29.matches;
player29.blocks_average = player29.blocks / player29.matches;
player29.stolen_average = player29.stolen / player29.matches;
player29.shots_hit_average = player29.shots_hit / player29.matches;
player29.shots_missed_average = player29.shots_missed / player29.matches;
player29.three_hit_average = player29.three_hit / player29.matches;
player29.three_missed_average = player29.three_missed / player29.matches;
player29.shots_percentage = (player29.shots_hit / player29.shots_missed) * 100;
player29.three_percentage = (player29.three_hit / player29.three_missed) * 100;
player29.freethrows_percentage = (player29.freethrows_hit / player29.freethrows_missed) * 100;

player30.points_average = player30.points / player30.matches;
player30.rebounds_average = player30.rebounds / player30.matches;
player30.assists_average = player30.assists / player30.matches;
player30.blocks_average = player30.blocks / player30.matches;
player30.stolen_average = player30.stolen / player30.matches;
player30.shots_hit_average = player30.shots_hit / player30.matches;
player30.shots_missed_average = player30.shots_missed / player30.matches;
player30.three_hit_average = player30.three_hit / player30.matches;
player30.three_missed_average = player30.three_missed / player30.matches;
player30.shots_percentage = (player30.shots_hit / player30.shots_missed) * 100;
player30.three_percentage = (player30.three_hit / player30.three_missed) * 100;
player30.freethrows_percentage = (player30.freethrows_hit / player30.freethrows_missed) * 100;

player4.points_average = player4.points / player4.matches;
player4.rebounds_average = player4.rebounds / player4.matches;
player4.assists_average = player4.assists / player4.matches;
player4.blocks_average = player4.blocks / player4.matches;
player4.stolen_average = player4.stolen / player4.matches;
player4.shots_hit_average = player4.shots_hit / player4.matches;
player4.shots_missed_average = player4.shots_missed / player4.matches;
player4.three_hit_average = player4.three_hit / player4.matches;
player4.three_missed_average = player4.three_missed / player4.matches;
player4.shots_percentage = (player4.shots_hit / player4.shots_missed) * 100;
player4.three_percentage = (player4.three_hit / player4.three_missed) * 100;
player4.freethrows_percentage = (player4.freethrows_hit / player4.freethrows_missed) * 100;

player30.points_average = player30.points / player30.matches;
player30.rebounds_average = player30.rebounds / player30.matches;
player30.assists_average = player30.assists / player30.matches;
player30.blocks_average = player30.blocks / player30.matches;
player30.stolen_average = player30.stolen / player30.matches;
player30.shots_hit_average = player30.shots_hit / player30.matches;
player30.shots_missed_average = player30.shots_missed / player30.matches;
player30.three_hit_average = player30.three_hit / player30.matches;
player30.three_missed_average = player30.three_missed / player30.matches;
player30.shots_percentage = (player30.shots_hit / player30.shots_missed) * 100;
player30.three_percentage = (player30.three_hit / player30.three_missed) * 100;
player30.freethrows_percentage = (player30.freethrows_hit / player30.freethrows_missed) * 100;

player31.points_average = player31.points / player31.matches;
player31.rebounds_average = player31.rebounds / player31.matches;
player31.assists_average = player31.assists / player31.matches;
player31.blocks_average = player31.blocks / player31.matches;
player31.stolen_average = player31.stolen / player31.matches;
player31.shots_hit_average = player31.shots_hit / player31.matches;
player31.shots_missed_average = player31.shots_missed / player31.matches;
player31.three_hit_average = player31.three_hit / player31.matches;
player31.three_missed_average = player31.three_missed / player31.matches;
player31.shots_percentage = (player31.shots_hit / player31.shots_missed) * 100;
player31.three_percentage = (player31.three_hit / player31.three_missed) * 100;
player31.freethrows_percentage = (player31.freethrows_hit / player31.freethrows_missed) * 100;

player32.points_average = player32.points / player32.matches;
player32.rebounds_average = player32.rebounds / player32.matches;
player32.assists_average = player32.assists / player32.matches;
player32.blocks_average = player32.blocks / player32.matches;
player32.stolen_average = player32.stolen / player32.matches;
player32.shots_hit_average = player32.shots_hit / player32.matches;
player32.shots_missed_average = player32.shots_missed / player32.matches;
player32.three_hit_average = player32.three_hit / player32.matches;
player32.three_missed_average = player32.three_missed / player32.matches;
player32.shots_percentage = (player32.shots_hit / player32.shots_missed) * 100;
player32.three_percentage = (player32.three_hit / player32.three_missed) * 100;
player32.freethrows_percentage = (player32.freethrows_hit / player32.freethrows_missed) * 100;

console.log(player12.shots_hit);
console.log(player12.shots_missed);