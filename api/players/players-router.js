const express = require('express');
const Player = require('./players-model')


const router = express.Router();

router.get('/', (req, res) => {
  // RETURN AN ARRAY WITH ALL THE USERS
  Player.get()
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => {
      res.status(500).json({ message: "something happened with the server"})
    })
});

router.post('/', (req, res) => {
  // RETURN THE NEWLY CREATED USER OBJECT
  // this needs a middleware to check that the request body is valid
  console.log(req.body)
  Player.insert({ fullname: req.body.fullname, number: req.body.number })
    .then(player => {
      res.status(201).json(player)
    })
    .catch(err => {
      res.status(500).json({ message: "something happened with the server"})
    })
});

router.put('/:id', (req, res) => {
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
  User.update(req.params.id, { name: req.name })
    .then(user => {
      res.status(201).json(user)
    })
    .catch(err => {
      res.status(500).json({ message: "something happened with the server"})
   })
});

router.delete('/:id', async (req, res) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id
  try { await User.remove(req.params.id)
      res.status(200).json(req.user)
    }
    catch(err) {
      res.status(500).json({ message: "something happened with the server"})
    }
});

router.get('/:id/posts', async (req, res) => {
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id
  try {
  const result = await User.getUserPosts(req.params.id)
      res.status(200).json(result)
    }
    catch(err) {
      res.status(500).json({ message: "something happened with the server"})
    }
});



// do not forget to export the router
module.exports = router;