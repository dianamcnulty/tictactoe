const winlogic = require('./winlogic')
const gameui = require('./gameui')

let player = 'X'
const cells = []
let turns = 0
const playerMark = function (event) {
  // console.log('player took a turn', event.target.id)
  if (!cells[event.target.id]) {
    $('#' + event.target.id).text(player)// updates the cell
    cells[event.target.id] = player
    const winner = winlogic.findWinner(cells)
    if (winner !== undefined) { // if there's a winner - declare the winner
      console.log('winner is', winner)
      gameui.declareWinner(winner) // updates ui to announce winner
      return winner
    }
    turns++
    if (turns >= 9) {
      gameui.declareDraw()
    }
    if (player === 'X') { // switch players
      player = 'O'
    } else {
      player = 'X'
    }
    $('#player').text(player) // changes player name in the message box
  }
}

module.exports = {
  playerMark,
  cells
}
