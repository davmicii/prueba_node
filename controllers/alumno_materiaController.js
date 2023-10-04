// controllers/alumnoMateriaController.js
const alumnoMateriaService = require('../services/alumno_materiaService');

// CREATE
exports.createAlumnoMateria = async (req, res) => {
  try {
    const alumnoMateria = await alumnoMateriaService.createAlumnoMateria(req.body);
    res.status(201).json(alumnoMateria);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ
exports.getAllAlumnoMaterias = async (req, res) => {
  try {
    const alumnoMaterias = await alumnoMateriaService.getAllAlumnoMaterias();
    res.status(200).json(alumnoMaterias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ BY ID
exports.getAlumnoMateriaById = async (req, res) => {
  const alumnoMateriaId = req.params.id;

  try {
    const alumnoMateria = await alumnoMateriaService.getAlumnoMateriaById(alumnoMateriaId);

    if (!alumnoMateria) {
      res.status(404).json({ error: 'Relación Alumno_has_Materia no encontrada' });
    } else {
      res.status(200).json(alumnoMateria);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
exports.updateAlumnoMateria = async (req, res) => {
  const alumnoMateriaId = req.params.id;

  try {
    const message = await alumnoMateriaService.updateAlumnoMateria(alumnoMateriaId, req.body);
    res.status(200).json({ message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}