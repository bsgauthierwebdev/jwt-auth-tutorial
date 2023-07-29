const express = require('express')
const app = express()
const cors = require('cors')

// MIDDLEWARE

app.use(express.json())
app.use(cors())

// ROUTES

// Register & Login Routes

app.use('/auth', require('./Routes/jwtAuth'))

// Dashboard Route

app.use ('/dashboard', require('./Routes/dashboard'))

app.listen(8800, () => {
    console.log('Listening on port 8800')
})