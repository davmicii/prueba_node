// controllers/maestroController.js
const maestroService = require('../services/maestroService');

// CREATE
exports.createMaestro = async (req, res) => {
  try {
    const maestro = await maestroService.createMaestro(req.body);
    res.status(201).json(maestro);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ
exports.getAllMaestros = async (req, res) => {
  try {
    const maestros = await maestroService.getAllMaestros();
    res.status(200).json(maestros);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ BY ID
exports.getMaestroById = async (req, res) => {
  const maestroId = req.params.id;

  try {
    const maestro = await maestroService.getMaestroById(maestroId);

    if (!maestro) {
      res.status(404).json({ error: 'Maestro no encontrado' });
    } else {
      res.status(200).json(maestro);
    }
  } catch (error) {
    console.log(res.status(500).json({ error: error.message }));
  }
};

// UPDATE
exports.updateMaestro = async (req, res) => {
  const maestroId = req.params.id;

  try {
    const message = await maestroService.updateMaestro(maestroId, req.body);
    res.status(200).json({ message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
exports.deleteMaestro = async (req, res) => {
  const maestroId = req.params.id;

  try {
    const message = await maestroService.deleteMaestro(maestroId);
    res.status(200).json({ message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
