// services/maestroService.js
const Maestro = require('../entities/maestro');

// Función para crear un maestro
exports.createMaestro = async (maestroData) => {
  try {
    const maestro = await Maestro.create(maestroData);
    return maestro;
  } catch (error) {
    throw new Error('Error al crear un maestro');
  }
};

// Función para obtener todos los maestros
exports.getAllMaestros = async () => {
  try {
    const maestros = await Maestro.findAll();
    return maestros;
  } catch (error) {
    throw new Error('Error al obtener los maestros');
  }
};

// Función para obtener un maestro por ID
exports.getMaestroById = async (maestroId) => {
  try {
    const maestro = await Maestro.findByPk(maestroId);

    if (!maestro) {
      throw new Error('Maestro no encontrado');
    }

    return maestro;
  } catch (error) {
    throw new Error('Error al obtener el maestro');
  }
};

// Función para actualizar un maestro
exports.updateMaestro = async (maestroId, maestroData) => {
  try {
    const [updatedRows] = await Maestro.update(maestroData, {
      where: { idMaestro: maestroId },
    });

    if (updatedRows === 0) {
      throw new Error('Maestro no encontrado');
    }

    return 'Maestro actualizado con éxito';
  } catch (error) {
    throw new Error('Error al actualizar el maestro');
  }
};

// Función para eliminar un maestro
exports.deleteMaestro = async (maestroId) => {
  try {
    const deletedRowCount = await Maestro.destroy({
      where: { idMaestro: maestroId },
    });

    if (deletedRowCount === 0) {
      throw new Error('Maestro no encontrado');
    }

    return 'Maestro eliminado con éxito';
  } catch (error) {
    throw new Error('Error al eliminar el maestro');
  }
};
