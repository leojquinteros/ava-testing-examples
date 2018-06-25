'use strict'
// Aim and shoot!
// The competition is up.
// There are n players. They take turns to shoot. Each circle has its prize in points.
// Also… remember: these darts are perfect. They never fall or move after they hit a target.
// Player 1 always starts first. Player 2 is next.. and finally Player N. On each turn, each player only throws one dart.
// Your goal is to write an algorithm to figure out how many points each player made, and of course, determine who wins.

// const arrowX0 = 10
// const arrowY0 = 10
// const stealDistance = 5
// const targets = [
//   { x: 100, y: 50, diameter: 10, prizePoints: 100 },
//   { x: 300, y: 300, diameter: 25, prizePoints: 200 },
//   { x: 500, y: 300, diameter: 25, prizePoints: 200 }
// ]
// const players = [
//   {
//     id: 'player1',
//     shots: [
//       { turn: 1, shootAngle: 23 },
//       { turn: 4, shootAngle: 27 },
//       { turn: 7, shootAngle: 45 }
//     ]
//   },
//   {
//     id: 'player2',
//     shots: [
//       { turn: 2, shootAngle: 25 },
//       { turn: 5, shootAngle: 50 },
//       { turn: 8, shootAngle: 65 }
//     ]
//   },
//   {
//     id: 'player3',
//     shots: [
//       { turn: 3, shootAngle: 40 },
//       { turn: 6, shootAngle: 55 },
//       { turn: 9, shootAngle: 80 }
//     ]
//   }
// ]

// function startGame (players, targets) {
//   var player, score, winnerPlayerID
//   var maxScore = 0

//   for (var turn = 1; turn <= 9; turn++) {
//     player = getCurrentPlayer(turn)
//     score = getScore(player)
//   }
// }

// function getCurrentPlayer (turn) {
//   var shootAngle
//   var player = players.filter((player) => {
//     return player.shots.filter((shot) => {
//       return shot.turn === turn
//     })
//   })
//   return {
//     player
//   }
// }
