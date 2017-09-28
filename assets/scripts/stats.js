const gameapi = require('./gameAPI/gameapi')

const showStats = function () {
  gameapi.getStats()
    .then((data) => { console.log('stats game back!', data) })
    .catch((error) => { console.log('failed to get stats', error) })
  console.log('where my stats at?')
}

module.exports = {
  showStats
}
