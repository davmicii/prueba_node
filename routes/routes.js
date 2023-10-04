// routes.js
const express = require('express');
const router = express.Router();

//Middleware
const protegerRutas = require('../middleware/authMiddleware');

//Schemas
const { validationResult } = require('express-validator');
const {
  maestroSchema,
  materiaSchema,
  alumnoSchema,
  alumnoMateriaSchema,
} = require('../validation/validationSchemas');

//Controllers
const maestroController = require('../controllers/maestroController');
const materiaController = require('../controllers/materiaController');
const alumnoController = require('../controllers/alumnoController');
const alumnoMateriaController = require('../controllers/alumno_materiaController');
const authController = require('../controllers/authController');

//Routes

//Ruta para login
router.post('/login', authController.login)
//Ruta para registro
router.post('/registro', authController.registro);

// Rutas para Maestro
router.post('/maestros/create', protegerRutas, maestroSchema, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    maestroController.createMaestro(req, res);
});

router.get('/maestros/getAll', protegerRutas, maestroController.getAllMaestros);
router.get('/maestros/getById/:id', protegerRutas, maestroController.getMaestroById);

router.put('/maestros/update/:id', protegerRutas, maestroSchema, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    maestroController.updateMaestro(req, res);
});

router.delete('/maestros/delete/:id', protegerRutas, maestroController.deleteMaestro);


// Rutas para Materia
router.post('/materia/create', protegerRutas, materiaSchema, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  materiaController.createMateria(req, res);
});

router.get('/materia/getAll', protegerRutas, materiaController.getAllMaterias);
router.get('/materia/getById/:id', materiaController.getMateriaById);

router.put('/materia/update/:id', protegerRutas, materiaSchema, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  materiaController.updateMateria(req, res);
});

router.delete('/materia/delete/:id', protegerRutas, materiaController.deleteMateria);

// Rutas para Alumnos
router.post('/alumno/create', protegerRutas, alumnoSchema, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  alumnoController.createAlumno(req, res);
});

router.get('/alumno/getAll', protegerRutas, alumnoController.getAllAlumnos);
router.get('/alumno/getById/:id', alumnoController.getAlumnoById);

router.put('/alumno/update/:id', protegerRutas, alumnoSchema, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  alumnoController.updateAlumno(req, res);
});

router.delete('/alumno/delete/:id', protegerRutas, alumnoController.deleteAlumno);


// Rutas para AlumnosMaterias
router.post('/alumno_materia/create', protegerRutas, alumnoMateriaSchema, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  alumnoMateriaController.createAlumnoMateria(req, res);
});

router.get('/alumno_materia/getAll', protegerRutas, alumnoMateriaController.getAllAlumnoMaterias);
router.get('/alumno_materia/getById/:id', alumnoMateriaController.getAlumnoMateriaById);

router.put('/alumno_materia/update/:id', protegerRutas, alumnoMateriaSchema, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  alumnoMateriaController.updateAlumnoMateria(req, res);
});

module.exports = router;

