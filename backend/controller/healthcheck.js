const logger = require("../config/index")

const healthcheck = (req, res) => {
    logger.http("Server up!")
    return res.status(200).json({ status: 'UP' });
  };
  
  module.exports = healthcheck;
  