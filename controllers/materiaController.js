// controllers/materiaController.js
const materiaService = require('../services/materiaService');

// CREATE
exports.createMateria = async (req, res) => {
  try {
    const materia = await materiaService.createMateria(req.body);
    res.status(201).json(materia);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ
exports.getAllMaterias = async (req, res) => {
  try {
    const materias = await materiaService.getAllMaterias();
    res.status(200).json(materias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ BY ID
exports.getMateriaById = async (req, res) => {
  const materiaId = req.params.id;

  try {
    const materia = await materiaService.getMateriaById(materiaId);

    if (!materia) {
      res.status(404).json({ error: 'Materia no encontrada' });
    } else {
      res.status(200).json(materia);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
exports.updateMateria = async (req, res) => {
  const materiaId = req.params.id;

  try {
    const message = await materiaService.updateMateria(materiaId, req.body);
    res.status(200).json({ message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
exports.deleteMateria = async (req, res) => {
  const materiaId = req.params.id;

  try {
    const message = await materiaService.deleteMateria(materiaId);
    res.status(200).json({ message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
