const { Dog, Temperament } = require("../db");
const { APIKEY } = process.env;
const URL = `https://api.thedogapi.com/v1/breeds?api_key=${APIKEY}`;
const axios = require("axios");
const {Op} = require("sequelize");

const getAllDogs = async () => {
  let apiData = await axios.get(URL);

  const dogsAPI = apiData.data?.map((dog) => { 
    const [height_min, height_max] = dog.height.metric.split("-")
    const [weight_min, weight_max] = dog.weight.metric.split("-")
    const [life_span_min, life_span_max] = dog.life_span.includes("–") ? dog.life_span.split("–") : dog.life_span.split("-")

    return {
      id: dog.id,
      name: dog.name,
      image: dog.image.url,
      height_min: +height_min,
      height_max: +height_max,
      weight_min: +weight_min,
      weight_max: +weight_max,
      life_span_min: parseInt(life_span_min),
      life_span_max: parseInt(life_span_max),
      temperament: dog.temperament?.split(", "),
    }
  });

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
      temperaments: [...Temperaments]?.map((t) => t.name), // Crear una nueva propiedad "temperament" y asignarle los temperamentos unidos en una cadena
    };
  });

  const allDogs = [ ...dbData, ...dogsAPI];

  return allDogs;
};

const createDog = async (
  name,
  height_min,
  height_max,
  weight_min,
  weight_max,
  temperaments,
  life_span_min,
  life_span_max,
  image
) => {

  let dogs = await getAllDogs();

  let foundDog = dogs.find((dog) => dog.name.toLowerCase() === name.toLowerCase());

  if (foundDog) throw new Error(`The breed ${name} already exists`);

  const newDog = await Dog.create({
    name,
    height_min,
    height_max,
    weight_min,
    weight_max,
    life_span_min,
    life_span_max,
    image
  });  
  await newDog.addTemperaments(temperaments);
  
  let dog = await Dog.findByPk(newDog.id);
  let dogTemperaments = await dog.getTemperaments(); //me traigo todos los tempramentos de el perro encontrado por od
  let temperamentsNames = dogTemperaments?.map((temperament) => temperament.name); //hago que me traiga los name

  return { ...dog.toJSON(), temperaments: temperamentsNames }; // traigo el dog parseado y los names de sus temperamentooos
};


const getDogsByName = async (name) => {
  const DBDogsByName = await Dog.findAll({
    where: { name: { [Op.iLike]: `%${name}%` } },
  });

  const { data } = await axios(
    `https://api.thedogapi.com/v1/breeds?api_key=${APIKEY}`
  );
  const dogsAPI = data?.map((dog) => { 
    const [height_min, height_max] = dog.height.metric.split("-")
    const [weight_min, weight_max] = dog.weight.metric.split("-")
    const [life_span_min, life_span_max] = dog.life_span.includes("–") ? dog.life_span.split("–") : dog.life_span.split("-")

    return {
      id: dog.id,
      name: dog.name,
      image: dog.image.url,
      height_min: +height_min,
      height_max: +height_max,
      weight_min: +weight_min,
      weight_max: +weight_max,
      life_span_min: parseInt(life_span_min),
      life_span_max: parseInt(life_span_max),
      temperament: dog.temperament?.split(", "),
    }})
  
  const APIDogsByName = dogsAPI.filter((dog) =>
    dog.name.toLowerCase().includes(name.toLowerCase())
  );

  return [...DBDogsByName, ...APIDogsByName];
};

const getDogsByID = async (id) => {
  const allDogs = await getAllDogs();

  const dogsByID = allDogs.filter((dog)=>{
   return dog.id == id
  });

  if(!dogsByID.length)throw new Error(`There is no ${id} breed`);

  return dogsByID;
};

module.exports = {
  createDog,
  getAllDogs,
  getDogsByName,
  getDogsByID
};
