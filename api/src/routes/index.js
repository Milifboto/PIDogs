const { Router } = require('express');

// Importo todos los routers;
const dogsRouter = require("./dogsRouter");
const temperamentsRouter = require("./temperamentsRouter")

const router = Router();

// Configuro los routers
router.use("/dogs", dogsRouter);
router.use("/temperaments", temperamentsRouter)

module.exports = router;
