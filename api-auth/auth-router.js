//imports
const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../config/secrets.js')

//db model
const Users = require('../api-users/users.model.js')

//routes

//register a user
router.post('/register', (req, res) => {
  let user = req.body
  const hash = bcrypt.hashSync(user.password, 10)
  user.password = hash

  Users.register(user)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: 'could not register user' })
    })
})

//login a user
router.post('/login', (req, res) => {
  let { username, password } = req.body

  Users.findUserBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user)
        res.status(200).json({
          message: `Welcome, ${user.username}!`,
          token
        })
      } else {
        res.status(401).json({ error: 'invalid log in' })
      }
    })
    .catch(({ name, message, stack }) => {
      res.status(500).json({ name, message, stack })
    })
})

//generating a token for log in
function generateToken (user) {
  const payload = {
    username: user.username
  }

  const options = {
    expiresIn: '1h'
  }

  return jwt.sign(payload, jwtSecret, options)
}

module.exports = router
