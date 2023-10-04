// models/alumnoMateria.js
const Sequelize = require('sequelize');
const sequelize = require('../config/database');

// Definir la asociación con Materia
const Materia = require('./materia');
// Definir la asociación con Alumno
const Alumno = require('./alumno');

const AlumnoMateria = sequelize.define('alumno_has_materias', {
    idAlumno: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    idMateria: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
  });

  AlumnoMateria.belongsTo(Alumno, {
    foreignKey: 'idAlumno',
    as: 'alumno',
  });
  
  AlumnoMateria.belongsTo(Materia, {
    foreignKey: 'idMateria',
    as: 'materia',
  });
  
  module.exports = AlumnoMateria;