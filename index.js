const express = require('express')

const app = express()

app.get('/jackie', (req, res) => {
  res.send('hello world from a tunnel on my local machine!')
})

const PORT = process.env.PORT || 5545

app.listen(PORT, () => {
  console.log(`\n** Server is listening on port ${PORT} **\n`)
})
