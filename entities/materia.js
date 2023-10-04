// models/materia.js
const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Materia = sequelize.define('materia', {
  idMateria: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Descripcion: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Puntos: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = Materia;
