const hideGame = function () { // hideGame at start
  $('.board').hide()
  $('#declare-win').hide()
  $('#next-move').hide()
  $('#reset').hide()
  $('#stats').hide()
  $('#logout').hide()
}
const showGame = function () {
  $('.board').show()
  $('#auth').hide()
  $('#reset').show()
  $('#stats').show()
  $('#logout').show()
}

const declareWinner = function (winner) {
  $('#declare-win').show()
  $('#winnername').text(winner)
  $('.board').hide()
  $('#next-move').hide()
}
module.exports = {
  declareWinner,
  hideGame,
  showGame
}
