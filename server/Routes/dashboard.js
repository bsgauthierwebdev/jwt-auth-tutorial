const router = require('express').Router()
const pool = require('../db')
const authorization = require('../Middleware/authorization')

router.get('/', authorization, async(req, res) => {
    try {
        
        // req.user contains the payload
        // res.json(req.user)

        // const user = await pool.query(
        //     'SELECT * FROM users WHERE user_id = $1', [
        //         req.user
        //     ]
        // )

        // // Returns all user information from query
        // res.json(user.rows[0])

        // Set up to only return the user_name

        const user = await pool.query(
            'SELECT user_name FROM users WHERE user_id = $1', [
                req.user
            ]
        )

        res.json(user.rows[0])

    } catch (err) {
        console.error(err.message)
        res.status(500).json('Server Error')
    }
})

module.exports = router