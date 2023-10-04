// models/maestro.js
const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Maestro = sequelize.define('maestro', {
  idMaestro: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Nombre: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Apellido: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Maestro;
