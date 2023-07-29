// This middleware checks to see if the information provided is valid

module.exports = (req, res, next) => {
    const {email, name, password} = req.body

    // Check to see if the email is a valid format
    function validEmail(userEmail) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)
    }

    if (req.path === '/register') {
        // console.log(!email.length)
        if (![email, name, password].every(Boolean)) {
            return res.status(401).json('Missing credentials, please provide the information')
        } else if (!validEmail(email)) {
            return res.status(401).json('Invalid email address')
        }
    } else if (req.path === '/login') {
        if (![email, password].every(Boolean)) {
            return res.status(401).json('Missing credentials, please provide the information')
        } else if (!validEmail(email)) {
            return res.status(401).json('Invalid email address')
        }
    }

    next()
}