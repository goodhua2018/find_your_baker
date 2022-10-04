const express = require('express')
const router = express.Router()

const Baker = require('../models/baker')

// routes
router.get('/', (req, res) => {
    Baker
      .findAll()
      .then(bakers => res.json(bakers))
})

router.post('/', (req, res) => {
  const {img, name, address, contact, specialty} = req.body

  Baker
    .create(img, name, address, contact, specialty)
    .then(baker => res.json(baker))
})

router.delete('/:id', (req, res) => {
  const bakerId = req.params.id;

    Baker
      .delete(bakerId)
      .then(() => res.json({ message: 'delete'}))
  
})

module.exports = router

