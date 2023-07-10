const { Dog, Temperament } = require("../db");
const axios = require("axios");
const { APIKEY } = process.env;
const URL = `https://api.thedogapi.com/v1/breeds?api_key=${APIKEY}`;

const getAllDogs = async () => {
  let apiData = await axios.get(URL);

  const dogsAPI = apiData.data.map((dog) => ({
    id: dog.id,
    name: dog.name,
    image: dog.image.url,
    height: dog.height.metric,
    weight: dog.weight.metric,
    life_span_max: dog.life_span_max,
    life_span_min: dog.life_span_min,
    temperament: dog.temperament?.split(", "),
    breed_group: dog.breed_gruop,
  }));

  let dbData = await Dog.findAll({
    include: {
      model: Temperament,
      through: { attributes: [] },
      attributes: ["name"],
    },
  });

  dbData = dbData.map((dog) => {
    const {
      id,
      name,
      height_max,
      height_min,
      weight_max,
      weight_min,
      life_span_max,
      life_span_min,
      image,
      Temperaments,
    } = dog.toJSON();
    return {
      id,
      name,
      height_max,
      height_min,
      weight_max,
      weight_min,
      life_span_max,
      life_span_min,
      image,
      temperament: [...Temperaments.map((t) => t.name)], // Crear una nueva propiedad "temperament" y asignarle los temperamentos unidos en una cadena
    };
  });

  const allDogs = [...dogsAPI, ...dbData];
  return allDogs;
};

const createDog = async (
  name,
  height_max,
  height_min,
  weight_max,
  weight_min,
  temperament,
  life_span_max,
  life_span_min,
  image
) => {
  const [newDog, created] = await Dog.findOrCreate({
    where: { name: name },
    defaults: {
      name,
      height_max,
      height_min,
      weight_max,
      weight_min,
      life_span_max,
      life_span_min,
      image,
    },
  });

  await newDog.addTemperament(temperament);

  if (created) return newDog;
  throw Error("This dog already exists");
};

module.exports = {
  createDog,
  getAllDogs,
};
