'use strict'

/* 
/ pterostudio/site
/ ----------------
/ Last Updated 08/12/21
/ https://github.com/pterostudio/site
/ 
*/

const express = require('express')
const webserver = require('../config/webserver.json')

const app = express()
const port = webserver.port

app.get('/', (req, res) => {
  res.send('pterostudio/site test site')
})

app.listen(port, () => {
  console.log(`[express] Listening on port ${port}.`)
})