const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/dbConfig')

const Usuar= sequelize.define('Usuario', {
  // Los atributos del modelo se definen aquí
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull por defecto es verdadero
  }
}, {
	freezeTableName: true
  // Otras opciones de modelo van aquí
});

module.exports=Usuar