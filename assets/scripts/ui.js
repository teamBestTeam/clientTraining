'use strict'
const displayOneBookTemplate = require('./displayOneBook.handlebars')
const config = require('./config')


const displayOneBookSuccess = displayOneBookTemplate ({book: data.book})
$('#user-messages').html(`<p> Here is your book!</p>`)
}

const displayOneBookFailure = function () {
$('#user-messages').html(`<p> Error: no book displayed. </p>`)
}

const displayManyBooksSuccess = displayManyBooksTemplate ({books: data.books})
$('#user-messages').html(`<p> Here are your books! </p>`)
}

const displayManyBooksFailure = function () {
$('#user-messages').html(`<p> Error: no books displayed. </p>`)
}

module.exports = {
  displayOneBookSuccess,
  displayOneBookFailure,
  displayManyBooksSuccess,
  displayManyBooksFailure
}
