// need to require the handlebars template

const displayOneBookSuccess = displayOneBookTemplate ({book: data.book})

}

const displayOneBookFailure = function () {
$('#user-messages').html(`<p> Error: no book displayed. </p>`)

}

const displayManyBooksSuccess = {

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
