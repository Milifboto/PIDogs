const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', {
    id: {
      type: DataTypes.UUID, //Universally Unique Identifier
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height_max: {
      type: DataTypes.INTEGER,
      validate: {min: 1},
      allowNull: false,
    },
    height_min: {
      type: DataTypes.INTEGER,
      validate: {min: 1},
      allowNull: false,
    },
    weight_max: {
      type: DataTypes.INTEGER,
      validate: {min: 1},
      allowNull: false
    },
    weight_min: {
      type: DataTypes.INTEGER,
      validate: {min: 1},
      allowNull: false,
    },
    life_span_max: {
      type: DataTypes.INTEGER,
      validate: {min: 1},
      allowNull: false
    },
    life_span_min:{
      type: DataTypes.INTEGER,
      validate: {min: 1},
      allowNull: false,
    },
    created: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  },
  {timestamps: false});
};
