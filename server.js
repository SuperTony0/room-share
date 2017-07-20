const express = require('express')
const app = express()

app.get('/basic-data', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*")
    .status(200)
    .json({
      greeting: 'Hello World!'
    })
})

app.listen(8082, function () {
  console.log('Example app listening on port 3000!')
})