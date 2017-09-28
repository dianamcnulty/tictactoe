const winlogic = require('./winlogic')
const gameui = require('./gameui')
// const gamedata = require('./gameAPI/gamedata')
const gameapi = require('./gameAPI/gameapi')

let player = 'X'
const cells = ['', '', '', '', '', '', '', '', '']
let turns = 0
const playerMark = function (event) {
  console.log('cells on player turen is', cells)
  if (!cells[event.target.id]) {
    $('#' + event.target.id).text(player)// updates the cell
    cells[event.target.id] = player
    const winner = winlogic.findWinner(cells)
    if (winner !== undefined) { // if there's a winner - declare the winner
      console.log('winner is', winner)
      gameui.declareWinner(winner) // updates ui to announce winner
      // gamedata.addFinishedGame(cells)
      gameapi.sendMove(event.target.id, player, true)
      return winner
    }
    gameapi.sendMove(event.target.id, player, false)
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

const resetGameData = function () {
  for (let i = 0; i < cells.length; i++) {
    cells[i] = ''
  }
  turns = 0
  console.log(cells)
  gameapi.newGame()
}
module.exports = {
  playerMark,
  cells,
  resetGameData
}
