const config = require('../config')
const store = require('../store')

const newGame = function () {
  console.log('sending new game call - token is', store.user.token)
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const sendMove = function (index, player, over) {
  console.log('tracked move ')
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': player
        },
        'over': over
      }
    }
  })
}
const getStats = function () {
  // console.log('sending get stats call')
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  sendMove,
  newGame,
  getStats
}
