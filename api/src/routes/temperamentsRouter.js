const { Router } = require('express');
const temperamentsRouter = Router();
const getTempHandler = require("../handlers/tempHandlers")

temperamentsRouter.get("/", getTempHandler)

module.exports = temperamentsRouter;