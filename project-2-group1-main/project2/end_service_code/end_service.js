const express = require('express')
const app = express()
var os = require("os");
var hostname = os.hostname();
const port = 3000;

const axios = require("axios").create({baseUtl: `http://localhost:${port}`})

app.get('/gethostname', (req, res) => {
  res.send(hostname);

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})