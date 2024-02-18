const express = require ('express')
const getClima = require ('../handlers/getClima.js')

const router = express.Router()

router.get("/", getClima );


module.exports =  router