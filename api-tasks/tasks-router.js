const router = require('express').Router()

const Tasks = require('./tasks-model.js')

//get all tasks
router.get('/', (req, res) => {
  Tasks.findTasks()
    .then(tasks => {
      res.status(200).json(tasks)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: 'cannot get tasks' })
    })
})

//get task by id
router.get('/:id', (req, res) => {
  Tasks.findTaskById(req.params.id)
    .then(task => {
      res.status(200).json(task)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: 'cannot get task' })
    })
})

//delete task
router.delete('/:id', (req, res) => {
  const { id } = req.params

  Tasks.removeTask(id)
    .then(count => {
      res.status(204).json(count)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: 'cannot remove task' })
    })
})

//add task
router.post('/', (req, res) => {
  Tasks.addTask(req.body)
    .then(task => {
      res.status(201).json(task)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: 'cannot add task' })
    })
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  const changes = req.body

  Tasks.findTaskById(id)
    .then(task => {
      if (task) {
        Tasks.editTask(changes, id).then(() => {
          Tasks.findTaskById(id).then(task => {
            res.status(201).json(task)
          })
        })
      } else {
        res.status(404).json({ error: "couldn't find task with that id" })
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: "server error couldn't find task" })
    })
})

module.exports = router;