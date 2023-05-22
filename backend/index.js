const express = require("express");

const PORT = process.env.PORT || 4000;

const app = express();
const cors = require('cors');

app.use(cors());

require('dotenv').config()

app.use(function(req, res, next) {
  res.header("Content-Type", "application/json")
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/hi", (req, res) => {
  res.header("Content-Type", "application/json")
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.json({ message: "Hola desde el servidor!" });
  });

app.post("/convert", (req,res) => {
  res.header("Content-Type", "application/json")
  console.log(req.body)
  res.send(req.body)
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});