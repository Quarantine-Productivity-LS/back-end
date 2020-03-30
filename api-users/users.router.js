const router = require('express').Router()

const Users = require('./users.model.js')

//get all users
router.get('/', (req, res) => {
  Users.findUsers()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(({ name, message, stack }) => {
      res.status(500).json({ name, message, stack })
    })
})

//get a user by id
router.get('/:id', (req, res) => {
  const { id } = req.params

  Users.findUserById(id)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(({ name, message, stack }) =>
      res.status(500).json({ name, message, stack })
    )
})

//delete a user
router.delete('/:id', (req, res) => {
  const { id } = req.params

  Users.deleteUser(id)
    .then(count => {
      res.status(204).json(count)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: 'cannot delete user' })
    })
})

module.exports = router