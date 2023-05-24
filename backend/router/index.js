const routes = require('express').Router();

const healthcheck = require("../controller/healthcheck")
const {ConvertMoney} = require("../controller/ConvertMoney")

routes.get("/healthcheck", healthcheck)
routes.post("/convert", ConvertMoney)

const appRoutes = (api) => {
    api.use("/", routes);

    // Middleware Not Found
    api.use((req, res, next) => res.status(404).send("Resources Not Found"));
};

module.exports = appRoutes;