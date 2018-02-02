'use strict'
const config = require('./config')


const displayOneBook = function(id) {
  return $.ajax({
    url: config.apiOrigin + '/books/' + id,
    method: 'GET'
  })
}




module.exports = {
  displayOneBook
}
