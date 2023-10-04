// models/alumno.js
const Sequelize = require('sequelize');
const sequelize = require('../config/database');

// Definir la asociación con Maestro
const Maestro = require('./maestro');

const Alumno = sequelize.define('alumno', {
  idAlumno: {
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
  idMaestro: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

Alumno.belongsTo(Maestro, {
    foreignKey: 'idMaestro', // El campo en Alumno que hace referencia a Maestro
    as: 'maestro', // Alias para la relación
  });

module.exports = Alumno;
