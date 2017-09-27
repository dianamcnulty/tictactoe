const gamelogic = require('./gamelogic')
const getFormFields = require(`../../lib/get-form-fields`)
const gameui = require('./gameui')

const signUpBehavior = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('I clicked the signup button', data)
  gameui.showGame()
}
const logInBehavior = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('I clicked the login button', data)
  gameui.showGame()
}
const logOut = function () {
  console.log('I clicked logout')
  gameui.hideGame()
  $('#auth').show()
}
const reset = function () {
  console.log('I clicked reset')
}
const getStats = function () {
  console.log('I cliked get stats')
}
const clickHandlers = function () {
  $('#sign-up').on('submit', signUpBehavior)
  $('#log-in').on('submit', logInBehavior) // need to define logInBehavior
  $('#0').on('click', gamelogic.playerMark)
  $('#1').on('click', gamelogic.playerMark)
  $('#2').on('click', gamelogic.playerMark)
  $('#3').on('click', gamelogic.playerMark)
  $('#4').on('click', gamelogic.playerMark)
  $('#5').on('click', gamelogic.playerMark)
  $('#6').on('click', gamelogic.playerMark)
  $('#7').on('click', gamelogic.playerMark)
  $('#8').on('click', gamelogic.playerMark)
  $('#reset').on('click', reset)
  $('#logout').on('click', logOut)
  $('#stats').on('click', getStats)
}
module.exports = {
  clickHandlers // need to import to index, then call this function at ready
}
