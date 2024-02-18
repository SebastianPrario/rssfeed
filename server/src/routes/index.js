const express = require ('express')
const rssRouter = require ('./rssRouter.js')
const climaRouter = require ('./climaRouter.js')


const router = express.Router ()

router.use('/rss', rssRouter)

router.use('/clima',climaRouter)

module.exports = router