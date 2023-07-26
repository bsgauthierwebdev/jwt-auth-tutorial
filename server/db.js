const Pool = require ('pg').Pool // Allows us to configure connection

const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'jwttutorial'
})

module.exports = pool