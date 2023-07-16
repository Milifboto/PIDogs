const {
  createDog,
  getAllDogs,
  getDogsByName,
  getDogsByID,
} = require("../controllers/dogControllers");

const getDogs = async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      const dogName = await getDogsByName(name);
      return res.status(200).json(dogName);
    } else {
      const allDogs = await getAllDogs();
      return res.status(200).json(allDogs);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDogByID = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const dog = await getDogsByID(id);
      if (!dog.length) {
        res.status(404).json({ error: `Dog ${id} not found` });
      } else {
        return res.status(200).json(dog);
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const postDogHandler = async (req, res) => {
  const {
    name,
    height_min,
    height_max,
    weight_min,
    weight_max,
    temperament,
    life_span_min,
    life_span_max,
    image,
  } = req.body;
  if (
    !name ||
    !height_min ||
    !height_max ||
    !weight_min ||
    !weight_max ||
    temperament.length === 0||
    !life_span_min ||
    !life_span_max
  ) {
     return res.status(400).json({message: "Dog information missing"});
  }
  try {
    const newDog = await createDog(
      name,
      height_min,
      height_max,
      weight_min,
      weight_max,
      temperament,
      life_span_min,
      life_span_max,
      image
    );
    res.status(201).json({ message: "Dog created successfully" });
  } catch (error) {
    // res.status(500).json({ error: error.message });
    console.log(error);
  }
};

module.exports = {
  getDogsByName,
  postDogHandler,
  getDogs,
  getDogByID,
};
