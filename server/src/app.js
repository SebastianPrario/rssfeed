const express = require ('express')
const routes = require ('./routes/index.js')
const cors = require ('cors')
const { unzip} = require ('./utils/getWeather.js')
var fs = require ('fs')


const server = express();

server.use(cors())
server.use('/',routes)
unzip()

setInterval(() =>
{
    try{
     unzip() 
     console.log('obteniendo temperatura')
    }catch (error) {console.log(error)}
}, 5000)


module.exports = server;
