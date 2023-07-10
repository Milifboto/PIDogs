const axios = require("axios");
const {APIKEY} = process.env;
const URL = `https://api.thedogapi.com/v1/breeds?api_key=${APIKEY}`;
const {Temperament} = require("../db");


const dbTemperaments = async () => {
    let dogsAPI = await axios.get(URL);
  
    dogsAPI.data.forEach((dog) => {
      if (dog.temperament) {
        const temps = dog.temperament.split(", ");
        temps.forEach((temp) =>
          Temperament.findOrCreate({
            where: {
              name: temp,
            },
          })
        );
      }
    });
  };

const getAllTemps = async () => {
   return await Temperament.findAll();
}
module.exports = {dbTemperaments, getAllTemps};
