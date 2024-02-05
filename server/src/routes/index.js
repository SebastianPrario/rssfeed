const express = require ('express')
const rssRouter = require ('./rssRouter.js')


const router = express.Router ()

router.use('/rss', rssRouter)

module.exports = router