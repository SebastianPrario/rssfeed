const {getInfo} = require ('./../handlers/getInfo.js')

const express = require ('express')

const router = express.Router()

router.get("/", getInfo );


module.exports =  router