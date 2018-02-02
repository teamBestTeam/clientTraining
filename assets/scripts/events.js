'use strict'


// const ui = require('./ui.js')
const api = require('./api.js')

const onDisplayOneBook = (event) => {
  api.displayOneBook()
    // .then(ui.displayOneBookSuccess)
    // .catch(ui.displayOneBookFailure)
}


const addHandler = function() {
  $('#displayOneBook').on('click', onDisplayOneBook)
  $('#displayOneBook').on('click', onDisplayOneBook)

}

module.exports = {
  addHandler
}
