const express = require ('express')
const routes = require ('./routes/index.js')
const cors = require ('cors')

const server = express();

server.use(cors())
server.use('/',routes)



module.exports = server;
