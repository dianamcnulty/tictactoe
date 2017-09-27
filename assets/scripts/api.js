const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}
const logIn = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}
const logOut = function () {
  console.log('store id is', store)
  return $.ajax({
    method: 'DELETE',
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  signUp,
  logIn,
  logOut
}
