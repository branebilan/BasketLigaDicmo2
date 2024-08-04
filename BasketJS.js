let team1 = {
  name: "Dicmo Vruchina",
  points: 2,
  scores: 21,
  against: 11,
  wins: 1,
  losses: 0,
};

team1.diff = team1.scores - team1.against;


console.log(team1.diff);

let team2 = {
  name: "Butt Pluggers",
  points: 2,
  scores: 24,
  against: 22,
  wins: 1,
  losses: 0,
};

team2.diff = team2.scores - team2.against;

console.log(team2.diff);

let team3 = {
  name: "Ona Nova",
  points: 2,
  scores: 21,
  against: 19,
  wins: 1,
  losses: 0,
};

team3.diff = team3.scores - team3.against;

console.log(team3.diff);

let team4 = {
  name: "Profesionalci",
  points: 1,
  scores: 11,
  against: 21,
  wins: 0,
  losses: 1,
};

team4.diff = team4.scores - team4.against;

console.log(team4.diff);

let team5 = {
  name: "No Name",
  points: 1,
  scores: 19,
  against: 21,
  wins: 0,
  losses: 1,
};

team5.diff = team5.scores - team5.against;

console.log(team5.diff);

let team6 = {
  name: "Grčići",
  points: 1,
  scores: 22,
  against: 24,
  wins: 0,
  losses: 1,
};

team6.diff = team6.scores - team6.against;

console.log(team6.diff);
 

let teams = [team1, team2, team3, team4, team5, team6];
 const tabela = teams.map(({ name, wins, losses, scores, against, points, diff }) => ({ name, wins, losses, scores, against, points, diff })).sort((a,b) => b.wins - a.wins || b.diff - a.diff || b.scores - a.scores);
console.log(tabela);
const element1 = document.querySelector('.tabla-prvi'); 
element1.append(tabela[0].name);
const element2 = document.querySelector('.skor-prvi');
element2.append(`${tabela[0].scores} : ${tabela[0].against}`);
const element3 = document.querySelector('.poeni-prvi');
element3.append(tabela[0].points);
const element4 = document.querySelector('.razlika-prvi');
element4.append(tabela[0].diff);
const element5 = document.querySelector('.tabla-drugi'); 
element5.append(tabela[1].name);
const element6 = document.querySelector('.skor-drugi');
element6.append(`${tabela[1].scores} : ${tabela[1].against}`);
const element7 = document.querySelector('.poeni-drugi');
element7.append(tabela[1].points);
const element8 = document.querySelector('.razlika-drugi');
element8.append(tabela[1].diff);
const element9 = document.querySelector('.tabla-trechi'); 
element9.append(tabela[2].name);
const element10 = document.querySelector('.skor-trechi');
element10.append(`${tabela[2].scores} : ${tabela[2].against}`);
const element11 = document.querySelector('.poeni-trechi');
element11.append(tabela[2].points);
const element12 = document.querySelector('.razlika-trechi');
element12.append(tabela[2].diff);
const element13 = document.querySelector('.tabla-cetri'); 
element13.append(tabela[3].name);
const element14 = document.querySelector('.skor-cetri');
element14.append(`${tabela[3].scores} : ${tabela[3].against}`);
const element15 = document.querySelector('.poeni-cetri');
element15.append(tabela[3].points);
const element16 = document.querySelector('.razlika-cetri');
element16.append(tabela[3].diff);
const element17 = document.querySelector('.tabla-peti'); 
element17.append(tabela[4].name);
const element18 = document.querySelector('.skor-peti');
element18.append(`${tabela[4].scores} : ${tabela[4].against}`);
const element19 = document.querySelector('.poeni-peti');
element19.append(tabela[4].points);
const element20 = document.querySelector('.razlika-peti');
element20.append(tabela[4].diff);
const element21 = document.querySelector('.tabla-sesti'); 
element21.append(tabela[5].name);
const element22 = document.querySelector('.skor-sesti');
element22.append(`${tabela[5].scores} : ${tabela[5].against}`);
const element23 = document.querySelector('.poeni-sesti');
element23.append(tabela[5].points);
const element24 = document.querySelector('.razlika-sesti');
element24.append(tabela[5].diff);

function matchDay(homeTeam, awayTeam, scoreHome, scoreAway) {

  if (scoreHome > scoreAway) {
    homeTeam.points = homeTeam.points + 2;
    awayTeam.points = awayTeam.points + 1;
    homeTeam.wins = homeTeam.wins + 1;
    awayTeam.losses = awayTeam.losses + 1;
    console.log(homeTeam.points, awayTeam.points, homeTeam.wins, awayTeam.losses);
  }
  
  else if (scoreAway > scoreHome) {
    awayTeam.points = awayTeam.points + 2;
    homeTeam.points = homeTeam.points + 1;
    awayTeam.wins = awayTeam.wins + 1;
    homeTeam.losses = homeTeam.losses + 1;
    console.log(homeTeam.points, awayTeam.points, homeTeam.wins, awayTeam.losses);
  }
  
  homeTeam.scores = homeTeam.scores + scoreHome;
  awayTeam.scores = awayTeam.scores + scoreAway;
  homeTeam.against = homeTeam.against + scoreAway;
  awayTeam.against = awayTeam.against + scoreHome;

  console.log(homeTeam.scores, awayTeam.scores, homeTeam.diff, awayTeam.diff);
}