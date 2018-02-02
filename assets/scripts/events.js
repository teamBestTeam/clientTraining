'use strict'


// const ui = require('./ui.js')
const api = require('./api.js')

const onDisplayOneBook = (event) => {
  api.displayOneBook()
    // .then(ui.displayOneBookSuccess)
    // .catch(ui.displayOneBookFailure)
}

const onDisplayManyBooks = (event) => {
  api.displayManyBooks()
    // .then(ui.displayOneBookSuccess)
    // .catch(ui.displayOneBookFailure)
}


const addHandler = function () {
  $('#displayOneBook').on('click', onDisplayOneBook)
  $('#displayManyBooks').on('click', onDisplayManyBooks)
}

module.exports = {
  addHandler
}
