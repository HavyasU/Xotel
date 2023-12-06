const express = require('express')
const router = express.Router()
const User = require('./../db/User')
const cors = require('cors')

router.use(cors());

router.get('/', (req, res) => {
    res.send('hello!')
})
router.use(express.json())


module.exports = router
