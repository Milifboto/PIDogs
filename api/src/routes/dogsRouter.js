const { Router } = require("express");
const dogsRouter = Router();
const {
  postDogHandler,
  getDogs,
  getDogByID,
} = require("../handlers/dogHandlers");

dogsRouter.get("/", getDogs);
dogsRouter.post("/", postDogHandler);
dogsRouter.get("/:id", getDogByID);

module.exports = dogsRouter;
