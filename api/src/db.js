require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const DogModel = require("./models/Dog");
const TemperamentModel = require("./models/Temperament");

//Guardo en sequelize la conexión
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/dogs`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leo todos los archivos de la carpeta Models, los requiero y agrego al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injecto la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizo los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

//Ejecuto cada una de las funciones pasándole una instancia de conexión de sequelize
DogModel(sequelize);
TemperamentModel(sequelize);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hago un destructuring
const { Dog, Temperament } = sequelize.models;

//Luego hago las asociaciones entre modelos: 
Dog.belongsToMany(Temperament, {through: "Dog_Temperament", timestamps: false});
Temperament.belongsToMany(Dog, {through: "Dog_Temperament", timestamps: false});


//exporto una copia de los modelos
//exporto la conexión de sequelize para que se pueda sincronizar desde el index
module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importar la conexión { conn } = require('./db.js');
};
