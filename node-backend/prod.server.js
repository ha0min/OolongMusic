const express = require('express')
const compression = require('compression')
const cookieParser = require('cookie-parser')
const registerRouter = require('./index')

const port = process.env.PORT || 9002

const app = express()

app.use(cookieParser())

registerRouter(app)

app.use(compression())

app.use(express.static('./dist'))

app.use(function (err, req, res, next) {
  if (err.code !== 'EBADCSRFTOKEN') {
    return next()
  }

  // handle CSRF token errors here
  res.status(403)
  res.send('<p>This API was protected by CSRF.</p><p>Please refer to <a href="https://webpages.scu.edu/ftp/hcheng5/">my website</a> for more info~</p>')
})

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
