const axios = require("axios");
const {APIKEY} = process.env;
const URL = `https://api.thedogapi.com/v1/breeds?api_key=${APIKEY}`;
const {Temperament, Dog} = require("../db");

const getAllTemps = async () => {
    let apiData = await axios.get(URL);
  
    const tempsAPI = apiData.data.map((temp) => ({
        name: temp.name,
        id: temp.id
    }));

    let dbData = await Temperament.findAll({
        attributes: ['name', 'id'], // Especifica las columnas que deseas seleccionar
        include: {
            model: Dog,
            attributes: [], // No selecciones ninguna columna del modelo Dog
        }
    });

    const allTemperaments = [...tempsAPI, ...dbData];
    return allTemperaments;
}


// const getTempController = async (req, res) => {
//    const tempList = await Temperament.findAll();

//     if(tempList.length === 0) {
//         const API = await axios(URL);
//         if (!API || !API.data) {
//             throw Error("Can't get dog information");
//           }
//           const allTemperaments = new Set();
//           API.data.forEach((dog) => {
//             if (dog.temperament) {
//                 const temps = dog.temperament.split(", ");
//                 temps.forEach((temp) => allTemperaments.add(temp));
//             }
//         });
    
//         const allFields = Array.from(allTemperaments).map((tempName) => {
//             return {
//                 name: tempName
//             }
//         })
//         const registers = await Temperament.bulkCreate(allFields);
//         return res.status(200).json(registers)
//     }
//     return tempList;
// }

module.exports = getAllTemps;
