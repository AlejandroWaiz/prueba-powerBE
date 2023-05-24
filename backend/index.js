const PORT = process.env.PORT || "8080";
const api = require('./server');
require("dotenv").config()


api.listen(PORT, () => {
  
  console.log(`Listening into ${PORT}`)

});
