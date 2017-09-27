const gamelogic = require('./gamelogic')
const getFormFields = require(`../../lib/get-form-fields`)

const signUpBehavior = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('I clicked the signup button', data)
}
const logInBehavior = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('I clicked the login button', data)
}
const logOut = function () {
  console.log('I clicked logout')
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
  $('#boxZero').on('click', gamelogic.playerMark)
  $('#boxOne').on('click', gamelogic.playerMark)
  $('#boxTwo').on('click', gamelogic.playerMark)
  $('#boxThree').on('click', gamelogic.playerMark)
  $('#boxFour').on('click', gamelogic.playerMark)
  $('#boxFive').on('click', gamelogic.playerMark)
  $('#boxSix').on('click', gamelogic.playerMark)
  $('#boxSeven').on('click', gamelogic.playerMark)
  $('#boxEight').on('click', gamelogic.playerMark)
  $('#reset').on('click', reset)
  $('#logout').on('click', logOut)
  $('#stats').on('click', getStats)
}
module.exports = {
  clickHandlers // need to import to index, then call this function at ready
}
