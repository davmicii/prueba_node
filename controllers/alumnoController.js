// controllers/alumnoController.js
const alumnoService = require('../services/alumnoService');

// CREATE
exports.createAlumno = async (req, res) => {
  try {
    const alumno = await alumnoService.createAlumno(req.body);
    res.status(201).json(alumno);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ
exports.getAllAlumnos = async (req, res) => {
  try {
    const alumnos = await alumnoService.getAllAlumnos();
    res.status(200).json(alumnos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ BY ID
exports.getAlumnoById = async (req, res) => {
  const alumnoId = req.params.id;

  try {
    const alumno = await alumnoService.getAlumnoById(alumnoId);

    if (!alumno) {
      res.status(404).json({ error: 'Alumno no encontrado' });
    } else {
      res.status(200).json(alumno);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
exports.updateAlumno = async (req, res) => {
  const alumnoId = req.params.id;

  try {
    const message = await alumnoService.updateAlumno(alumnoId, req.body);
    res.status(200).json({ message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
exports.deleteAlumno = async (req, res) => {
  const alumnoId = req.params.id;

  try {
    const message = await alumnoService.deleteAlumno(alumnoId);
    res.status(200).json({ message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};