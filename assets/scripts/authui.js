const gameui = require('./gameui')
const store = require('./store')

const signUpSuccess = function (data) {
  console.log('signed up successfully', store)
  gameui.showGame()
}
const authFail = function (error) {
  console.log('sign up error', error)
  $('.error').show()
}
const logInSuccess = function (data) {
  store.user = data.user
  console.log('logged in successfully', store)
  gameui.showGame()
}
const logOutSuccess = function (data) {
  store.user = null
  console.log('logged out successfully')
  gameui.hideGame()
  $('#auth').show()
}
const passwordSuccess = function (data) {
  console.log('password changed successfully')
  $('#password-complete').text('Your password has beeen updated. Please use your new password next time you log in.')
  $('#password-update').hide()
}
const passwordFail = function (error) {
  console.log('password error', error)
  $('#password-complete').text('uh oh... your password update didn\'t process. Please Try again')
}
module.exports = {
  signUpSuccess,
  authFail,
  logInSuccess,
  logOutSuccess,
  passwordSuccess,
  passwordFail
}
