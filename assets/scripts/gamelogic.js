const winlogic = require('./winlogic')
const findWinner = winlogic.findWinner
let player = 'X'
const cells = []

// const findWinner = function () {
//   console.log(cells)
//   // I know this is ugly and ridiculous! but I think it will work. This if statement checks if the winning combinations have the same player in those cells
//   if (cells[0] && cells[1] && cells[2]) {
//     if (cells[0] === cells[1] && cells[0] === cells[2]) {
//       const player = cells[0]
//       console.log('Winner is ', player)
//       return player
//     }
//   }
//   if (cells[3] && cells[4] && cells[5]) {
//     if (cells[3] === cells[4] && cells[3] === cells[5]) {
//       const player = cells[3]
//       console.log('Winner is ', player)
//       return player
//     }
//   }
//   if (cells[6] && cells[7] && cells[8]) {
//     if (cells[6] === cells[7] && cells[8] === cells[7]) {
//       const player = cells[6]
//       console.log('Winner is ' + player + '!!')
//       return player
//     }
//   }
//   if (cells[0] && cells[3] && cells[6]) {
//     if (cells[0] === cells[3] && cells[0] === cells[6]) {
//       const player = cells[6]
//       console.log('Winner is ' + player + '!!')
//       return player
//     }
//   }
//   if (cells[1] && cells[4] && cells[7]) {
//     if (cells[1] === cells[4] && cells[1] === cells[7]) {
//       const player = cells[7]
//       console.log('Winner is ' + player + '!!')
//       return player
//     }
//   }
//   if (cells[2] && cells[5] && cells[8]) {
//     if (cells[2] === cells[5] && cells[2] === cells[8]) {
//       const player = cells[2]
//       console.log('Winner is ' + player + '!!')
//       return player
//     }
//   }
//   if (cells[0] && cells[4] && cells[8]) {
//     if (cells[0] === cells[4] && cells[0] === cells[8]) {
//       const player = cells[8]
//       console.log('Winner is ' + player + '!!')
//       return player
//     }
//   }
//   if (cells[6] && cells[4] && cells[2]) {
//     if (cells[6] === cells[4] && cells[6] === cells[2]) {
//       const player = cells[6]
//       console.log('Winner is ' + player + '!!')
//       return player
//     }
//   }
// }

const playerMark = function (event) {
  // console.log('player took a turn', event.target.id)
  $('#' + event.target.id).text(player)// updates the cell
  cells[event.target.id] = player
  const winner = findWinner(cells)
  if (winner) {
    console.log(winner)
    return winner
  }
  if (player === 'X') {
    player = 'O'
  } else {
    player = 'X'
  }
  $('#player').text(player) // changes player name in the message box
}
module.exports = {
  playerMark,
  cells
}
