const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
app.use(express.json({
  extended: false
}))
app.use(cors())
app.use(helmet())
app.use(morgan('common'))

require('dotenv').config()


app.get('/api', (req, res) => {
  res.send('Hey There!')
})

const port = process.env.PORT || 5000
app.listen(port , ()=> console.log(`Server running on port ${port}`))