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
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //   noNumbers(value){
      //     if(/\d/.test(value)) throw Error("Dog's name cannot contain numbers")
      //   }
      // }
    },
    height_max: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    height_min: {
      type: DataTypes.INTEGER,
      allowNull: false,
      //  validate: {
      //    minHeightValidation(value) {
      //      if(value >= this.height_max) throw Error("Database error: The minimum height must be lower than the maximum height")
      //    }
      //  }
    },
    weight_max: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weight_min: {
      type: DataTypes.INTEGER,
      allowNull: false,
      //  validate: {
      //    minWeightValidation(value) {
      //      if(value >= this.weight_max) throw Error("Database error:The minimum weight must be lower than the maximum weight")
      //    }
      //  }
    },
    life_span_max: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    life_span_min:{
      type: DataTypes.INTEGER,
      allowNull: false,
      // validate: {
      //   minLifeSpantValidation(value) {
      //     if(value >= this.life_span_max) throw Error("Database error:The minimum life span must be lower than the maximum life span")
      //   }
      // }
    },
    created: {
      type: DataTypes.BOOLEAN,
      // allowNull: false,
      defaultValue: true
    }
  },
  {timestamps: false});
};
