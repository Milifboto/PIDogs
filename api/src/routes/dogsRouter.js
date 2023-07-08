const { Router } = require("express");
const dogsRouter = Router();
const {
  getDogsByName,
  postDogHandler,
  getDogs,
  getDogBreedHandler,
} = require("../handlers/dogHandlers");

dogsRouter.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const foundDog = await getDogsByName(req, res);
      res.status(200).json(foundDog);
    } else {
      const allDogs = await getDogs(req, res);
      res.status(200).json(allDogs);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});
dogsRouter.post("/", postDogHandler);
dogsRouter.get("/:idRaza", getDogBreedHandler);

module.exports = dogsRouter;
