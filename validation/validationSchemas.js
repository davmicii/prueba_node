// validationSchemas.js
const { body } = require('express-validator');

// Esquemas de validación para el modelo Maestro
const maestroSchema = [
    body('Nombre').notEmpty().isString(),
    body('Apellido').notEmpty().isString(),
    body('Titulo').notEmpty().isString(),
];
  
  // Esquemas de validación para el modelo Materia
const materiaSchema = [
    body('Descripcion').notEmpty().isString(),
    body('Puntos').notEmpty().isString(),
];
  
  // Esquemas de validación para el modelo Alumno
const alumnoSchema = [
    body('Nombre').notEmpty().isString(),
    body('Apellido').notEmpty().isString(),
    body('idMaestro').notEmpty().isNumeric(),
];
  
  // Esquemas de validación para el modelo Alumno_has_Materias
const alumnoMateriaSchema = [
    body('idAlumno').notEmpty().isNumeric(),
    body('idMateria').notEmpty().isNumeric(),
];

module.exports = {
    maestroSchema,
    materiaSchema,
    alumnoSchema,
    alumnoMateriaSchema,
};