const findWinner = require('./findWinner')
let player = 'X'
const cells = []
const playerMark = function (event) {
  // console.log('player took a turn', event.target.id)
  $('#' + event.target.id).text(player)// updates the cell
  cells[event.target.id] = player

  console.log(cells)
  const winner = findWinner.findWinner()
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
