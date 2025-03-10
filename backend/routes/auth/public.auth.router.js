const express = require('express')
const google = require('./google.auth.router')
const facebook = require('./facebook.auth.router')

const router = express()

router.use(google)
router.use(facebook)

module.exports = router

