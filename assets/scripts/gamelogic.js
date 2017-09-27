const playerMark = function (event) {
  console.log('player took a turn', event.target.id)
  $('#' + event.target.id).text('X')
}
module.exports = {
  playerMark
}
