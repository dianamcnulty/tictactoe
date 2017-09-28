const gamelogic = require('./gamelogic')
const getFormFields = require(`../../lib/get-form-fields`)
const authui = require('./authui')
const api = require('./userapi')
const gameUi = require('./gameui')

const signUpBehavior = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  // console.log('I clicked the signup button', data)
  api.signUp(data)
    .then(authui.signUpSuccess)
    .catch(authui.authFail)
}
const logInBehavior = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('I clicked the login button', data)
  api.logIn(data)
    .then(authui.logInSuccess)
    .catch(authui.authFail)
}
const logOutBehavior = function () {
  console.log('I clicked logout')
  api.logOut()
    .then(authui.logOutSuccess)
    .catch(() => console.log('logOut Failure'))
}
const reset = function () {
  gameUi.resetGame()
  gamelogic.resetGameData()
}
const getStats = function () {
  console.log('I cliked get stats')
}
const passwordBehavior = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('I clicked the password button', data)
  api.updatePassword(data)
    .then(authui.passwordSuccess)
    .catch(authui.passwordFail)
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
  $('#logout').on('click', logOutBehavior)
  $('#stats').on('click', getStats)
  $('#show-password-form').on('click', () => $('#password-update').show())
  $('#password-update').on('submit', passwordBehavior)
}
module.exports = {
  clickHandlers // need to import to index, then call this function at ready
}
