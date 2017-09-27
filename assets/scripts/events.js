const signUpBehavior = function (event) {
  event.preventDefault()
  console.log('I clicked the signup button')
}
const logInBehavior = function (event) {
  event.preventDefault()
  console.log('I clicked the login button')
}
const playerMove = function (event) {
  console.log('player took a turn', event.target.id)
  $('#' + event.target.id).text('X')
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
  $('#boxZero').on('click', playerMove)
  $('#boxOne').on('click', playerMove)
  $('#boxTwo').on('click', playerMove)
  $('#boxThree').on('click', playerMove)
  $('#boxFour').on('click', playerMove)
  $('#boxFive').on('click', playerMove)
  $('#boxSix').on('click', playerMove)
  $('#boxSeven').on('click', playerMove)
  $('#boxEight').on('click', playerMove)
  $('#reset').on('click', reset)
  $('#logout').on('click', logOut)
  $('#stats').on('click', getStats)
}
module.exports = {
  clickHandlers // need to import to index, then call this function at ready
}
