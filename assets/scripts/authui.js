const gameui = require('./gameui')
const store = require('./store')
const gameapi = require('./gameAPI/gameapi')

const signUpSuccess = function (data) {
  // console.log('signed up successfully', store)
  $('#signupmessage').text('Thanks for signing up! Enter your new user name and password to log in.')
  $('.error').hide()
  $('#sign-up').hide()
  $('#loginmessage').hide()
  // console.log(data)
}
const authFail = function () {
  $('.error').show()
}
const logInSuccess = function (data) {
  store.user = data.user
  // console.log('logged in successfully', store)
  gameui.showGame()
  gameapi.newGame().then((data) => { store.game = data.game })
  // store.game = gameData
  // console.log('logged in successfully', store)
  $('.error').hide()
}
const logOutSuccess = function (data) {
  store.user = null
  // console.log('logged out successfully')
  gameui.hideGame()
  $('#auth').show()
  $('#sign-up').show()
  $('#signupmessage').show()
  $('.error').hide()
  $('.login').val('')
  $('loginmessage').show()
  $('.square').text('.')
}
const passwordSuccess = function (data) {
  // console.log('password changed successfully')
  $('#password-message').text('Your password has beeen updated. Please use your new password next time you log in.')
  $('#password-update').hide()
  $('#oldpass').val('')
  $('#newpass').val('')
}
const passwordFail = function () {
  $('#password-message').text('uh oh... your password update didn\'t process. Please Try again')
  $('#password-message').show()
}
module.exports = {
  signUpSuccess,
  authFail,
  logInSuccess,
  logOutSuccess,
  passwordSuccess,
  passwordFail
}
