const express = require('express')
const app = express()
const cors = require('cors')

// MIDDLEWARE

app.use(express.json())
app.use(cors())

// ROUTES

// Register & Login Routes

app.use('/auth', require('./Routes/jwtAuth'))

app.listen(8800, () => {
    console.log('Listening on port 8800')
})