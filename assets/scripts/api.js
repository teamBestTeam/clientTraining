'use strict'
const config = require('./config')

const displayOneBook = function(id) {
  return $.ajax({
    url: config.apiOrigin + '/books/' + id,
    method: 'GET'
  })
}

const displayManyBooks = function() {
  return $.ajax({
    url: config.apiOrigin + '/books',
    method: 'GET'
  })
}

module.exports = {
  displayOneBook,
  displayManyBooks
}
