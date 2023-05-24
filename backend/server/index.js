const express = require('express');
const routesAPI = require('../router/index');
const cors = require('cors');

const api = express();


api.use(cors())
api.use(express.json({limit: "50mb"}));
api.use(
  express.urlencoded({
    extended: true
  })
);

routesAPI(api);

module.exports = api;
