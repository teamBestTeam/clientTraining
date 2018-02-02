'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const events = require('./events.js')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
  events.addHandler()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
