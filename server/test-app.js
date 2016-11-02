// REQUIRES
const path = require('path')
const morgan = require('morgan')
const express = require('express')
const bodyParser = require('body-parser')

// APP DECLARATION
const app = express()

// GENERAL MIDDLEWARE
app.use(morgan('dev'))
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
app.use(express.static('src'))

// ROUTES
app.use('*', (req, res) => res.sendFile(path.join(__dirname, '../src/index.html')))

module.exports = app
