// This is the middleware to authorize the user and make sure token is valid

const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = async(req, res, next) => {
    try {

        // Step 1 - Destructure the token

        const jwtToken = req.header('token')

        if (!jwtToken) {
            return res.status(403).json('You are not authorized to access this page.')
        }

        const payload = jwt.verify(jwtToken, process.env.JWT_SECRET)

        req.user = payload.user
        
    } catch (err) {
        console.error(err.message)
        return res.status(403).json('You are not authorized')
    }

    next()
}