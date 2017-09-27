const winlogic = require('./winlogic')
const findWinner = winlogic.findWinner
let player = 'X'
const cells = []
const playerMark = function (event) {
  // console.log('player took a turn', event.target.id)
  $('#' + event.target.id).text(player)// updates the cell
  cells[event.target.id] = player
  const winner = findWinner(cells)
  if (winner !== undefined) {
    console.log('winner is', winner)
    declareWinner(winner)
    return winner
  }
  if (player === 'X') {
    player = 'O'
  } else {
    player = 'X'
  }
  $('#player').text(player) // changes player name in the message box
}

const declareWinner = function (winner) {
  $('#winnername').text(winner)
  $('.board').hide()
  $('#next-move').hide()
}
module.exports = {
  playerMark,
  cells
}
