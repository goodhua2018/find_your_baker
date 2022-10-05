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
  const {img, name, address, suburb, postcode, contact, specialty} = req.body

  Baker
    .create(img, name, address, suburb, postcode, contact, specialty)
    .then(baker => res.json(baker))
})

router.delete('/:id', (req, res) => {
  const bakerId = req.params.id;

    Baker
      .delete(bakerId)
      .then(() => res.json({ message: 'delete'}))
  
})

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const img = req.body.img;
  const name = req.body.name;
  const address = req.body.address;
  const suburb = req.body.suburb;
  const postcode = req.body.postcode;
  const contact = req.body.contact;
  const specialty = req.body.specialty;
  

  Baker
    .update(id, img, name, address, suburb, postcode, contact, specialty)
    .then(baker => res.json(baker))
})

router.get('/search', (req, res) => {
  const postcode = req.body
  console.log(postcode)
  Baker
    .search(postcode)
    .then(bakers => res.json(bakers))
})


module.exports = router

