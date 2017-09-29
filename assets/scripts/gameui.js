// const gameapi = require('./gameAPI/gameapi')
// const gamelogic = require('./gamelogic')
const hideGame = function () { // hideGame at start
  $('.board').hide()
  $('#declare-win').hide()
  $('#next-move').hide()
  $('#reset').hide()
  $('#stats').hide()
  $('#logout').hide()
  $('.error').hide()
  $('#show-password-form').hide()
  $('#password-update').hide()
  $('#statview').hide()
}
const showGame = function () {
  $('#next-move').show()
  $('.board').show()
  $('#auth').hide()
  $('#reset').show()
  $('#stats').show()
  $('#logout').show()
  $('#show-password-form').show()
  $('#signupmessage').hide()
}
const inPlayView = function () {
  $('#statview').hide()
  $('#password-update').hide()
  $('#password-complete').hide()
  $('.error').hide()
}
const declareWinner = function (winner) {
  $('#declare-win').show()
  // console.log('declaring winner', winner)
  $('#winnername').text(winner)
  $('.board').hide()
  // $('.square').off()
  $('#next-move').hide()
  $('#password-update').hide()
  $('#password-complete').hide()
}
const declareDraw = function () {
  console.log('it was a draw')
  $('#declare-win').html('<h2>Woah, you are evenly matched! <br> This game was a draw</h2>')
  $('#declare-win').show()
  $('.board').hide()
  $('#next-move').hide()
}
const resetGame = function () {
  $('.square').text('.')
  $('.board').show()
  $('#statview').hide()
  $('#declare-win').hide()
  $('#player').text('X')
  $('#next-move').show()
}
module.exports = {
  declareWinner,
  hideGame,
  showGame,
  declareDraw,
  resetGame,
  inPlayView
}
