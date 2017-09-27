let player = 'X'
const cells = ['', '', '', '', '', '', '', '', '']
const playerMark = function (event) {
  //console.log('player took a turn', event.target.id)
  $('#' + event.target.id).text(player)//updated the cell

  cells[event.target.id] = player
  console.log(cells)
  if (player === 'X') {
    player = 'O'
  } else {
    player = 'X'
  }
  $('#player').text(player)
}
module.exports = {
  playerMark
}
