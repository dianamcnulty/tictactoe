const gameapi = require('./gameAPI/gameapi')

const showStats = function (data) {
  $('#totalgames').text(data.games.length)
  let totalComplete = 0
  for (let i = 0; i < data.games.length; i++) {
    if (data.games.over === true) {
      totalComplete++
    }
  }
  $('#totalfinished').text(totalComplete)
  $('#statview').show()
  console.log(data)
}
const statHandler = function () {
  gameapi.getStats()
    .then((data) => {
      showStats(data)
    })
    .catch((error) => { console.log('failed to get stats', error) })
}

module.exports = {
  statHandler
}
