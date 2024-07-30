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
 const tabela = teams.map(({ name, wins, losses, scores, against, points, diff }) => ({ name, wins, losses, scores, against, points, diff })).sort((a,b) => b.wins - a.wins  || b.diff - a.diff);
console.log(tabela);
document.querySelector('.tabla-prvi').innerHTML = tabela[0].name;
document.querySelector('.skor-prvi').innerHTML = `${tabela[0].scores} + ' : '  + ${tabela[0].against}`;
document.querySelector('.poeni-prvi').innerHTML = tabela[0].points;
document.querySelector('.razlika-prvi').innerHTML = tabela[0].diff;

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



