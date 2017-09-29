const gameapi = require('./gameAPI/gameapi')
const winlogic = require('./winlogic')

const showStats = function (data) {
  // console.log('my stats are', data)
  $('#totalgames').text(data.games.length)
  let totalComplete = 0
  let totalWon = 0
  for (let i = 0; i < data.games.length; i++) {
    if (data.games[i].over === true) {
      totalComplete++
      const winner = winlogic.findWinner(data.games[i].cells)
      if (winner.toLowerCase() === 'x') {
        totalWon++
      }
    }
  }
  $('#totalfinished').text(totalComplete)
  $('#totalwins').text(totalWon)
  $('#password-update').hide()
  $('#password-complete').hide()
  $('#statview').show()
}
const statHandler = function () {
  gameapi.getStats()
    .then((data) => {
      showStats(data)
    })
    .catch(() => { $('#password-message').text('Uh Oh, we had a problem getting those stats for you. Please try again.') })
}

module.exports = {
  statHandler,
  showStats
}
