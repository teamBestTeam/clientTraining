'use strict'
const displayOneBookTemplate = require('./displayOneBook.handlebars')
const config = require('./config')


const displayOneBookSuccess = displayOneBookTemplate ({book: data.book})
$('#user-messages').append(displayOneBookHtml)
}

const displayOneBookFailure = function () {
$('#user-messages').html(`<p> Error: no book displayed. </p>`)
}

const displayManyBooksSuccess = displayManyBooksTemplate ({books: data.books})
$('#user-messages').append(displayManyBooksHtml)
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
