const router = require('express').Router()
const pool = require('../db')
const bcrypt = require('bcrypt')
const jwtGenerator = require('../Utils/jwtGenerator')
const validInfo = require('../Middleware/validInfo')
const authorization = require('../Middleware/authorization')

// Register new user
router.post('/register', validInfo, async(req, res) => {
    try {
        // Step 1 - Destructure req.body(name, email, password)

        const {name, email, password} = req.body

        // Step 2 - Check if user exists(if yes, throw error)

        const user = await pool.query('SELECT * FROM users WHERE user_email = $1', [
            email
        ])

        // res.json(user.rows)

        if (user.rows.length !== 0) {
            return res.status(401).send('User already exists')
        }

        // Step 3 - Bcrypt password

        const saltRound = 10
        const salt = await bcrypt.genSalt(saltRound)

        const bcryptPassword = await bcrypt.hash(password, salt)

        // Step 4 - Enter new user into database

        const newUser = await pool.query(
            'INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *', [
                name, email, bcryptPassword
            ]
        )

        // res.json(newUser.rows[0])

        // Step 5 = Generate JWT Token

        const token = jwtGenerator(newUser.rows[0].user_id)

        res.json({token})


    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
})

// Login existing user

router.post('/login', validInfo, async(req, res) => {
    try {
        
        // Step 1 - Destructure req.body

        const {email, password} = req.body

        // Step 2 - Check if user exists (if not, throw error)

        const user = await pool.query(
            'SELECT * FROM users WHERE user_email = $1', [
                email
            ]
        )

        if (user.rows.length === 0) {
            return res.status(401).json('Username is incorrect')
        }

        // Step 3 - Check if password entered matches stored password

        const validPassword = await bcrypt.compare(password, user.rows[0].user_password)

        // console.log(validPassword)

        if (!validPassword) {
            return res.status(401).json('Username or Password is incorrect')
        }

        // Step 4 - Give user jwt token

        const token = jwtGenerator(user.rows[0].user_id)

        res.json({token})

    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
})

// Router to check if user is verified

router.get('/verify', authorization, async(req, res) => {
    try {

        res.json(true)
        
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
})

module.exports = router