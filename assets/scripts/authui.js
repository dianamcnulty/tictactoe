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
module.exports = {
  signUpSuccess,
  authFail,
  logInSuccess,
  logOutSuccess
}
