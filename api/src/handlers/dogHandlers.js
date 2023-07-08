const { createDog, getAllDogs } = require("../controllers/dogControllers");

const getDogs = async (req, res) => {
  try {
    const name = req.query.name;
    if (name) {
      const dogName = await getDogsByName(name);
      res.status(200).json(dogName);
    } else {
      const allDogs = await getAllDogs();
      res.status(200).json(allDogs);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDogBreedHandler = async (req, res) => {
  const { idRaza } = req.params;
  try {
    const allDogs = await getAllDogs();

    const foundDog = allDogs.filter((dog) => dog.id == idRaza);

    if (foundDog.length) {
      res.status(200).json(foundDog);
    } else {
      throw Error(`Dog ${idRaza} not found`);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postDogHandler = async (req, res) => {
  const {
    name,
    height_max,
    height_min,
    weight_max,
    weight_min,
    temperament,
    life_span_max,
    life_span_min,
    image,
  } = req.body;
  try {
    if (
      !name ||
      !height_max ||
      !height_min ||
      !weight_max ||
      !weight_min ||
      !temperament ||
      !life_span_max ||
      !life_span_min
    ) {
      res
        .status(400)
        .send("You must complete all fields in order to create a new dog");
    }
    const newDog = await createDog(
      name,
      height_max,
      height_min,
      weight_max,
      weight_min,
      temperament,
      life_span_max,
      life_span_min,
      image
    );
    res.status(200).json(newDog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDogsByName = async (req, res) => {
  const { name } = req.query;
  try {
    const allDogs = await getAllDogs();

    const foundDog = allDogs.filter((dog) =>
      dog.name.toLowerCase().includes(name.toLowerCase())
    );
    if (foundDog.length) {
      res.status(200).json(foundDog);
    } else {
      throw new Error(`There is no dog of the ${name} breed `);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getDogsByName,
  postDogHandler,
  getDogs,
  getDogBreedHandler,
};
