// services/materiaService.js
const Materia = require('../entities/materia');

// Función para crear una materia
exports.createMateria = async (materiaData) => {
  try {
    const materia = await Materia.create(materiaData);
    return materia;
  } catch (error) {
    throw new Error('Error al crear una materia');
  }
};

// Función para obtener todas las materias
exports.getAllMaterias = async () => {
  try {
    const materias = await Materia.findAll();
    return materias;
  } catch (error) {
    throw new Error('Error al obtener las materias');
  }
};

// Función para obtener una materia por ID
exports.getMateriaById = async (materiaId) => {
  try {
    const materia = await Materia.findByPk(materiaId);

    if (!materia) {
      throw new Error('Materia no encontrada');
    }

    return materia;
  } catch (error) {
    throw new Error('Error al obtener la materia');
  }
};

// Función para actualizar una materia
exports.updateMateria = async (materiaId, materiaData) => {
  try {
    const [updatedRows] = await Materia.update(materiaData, {
      where: { idMateria: materiaId },
    });

    if (updatedRows === 0) {
      throw new Error('Materia no encontrada');
    }

    return 'Materia actualizada con éxito';
  } catch (error) {
    throw new Error('Error al actualizar la materia');
  }
};

// Función para eliminar una materia
exports.deleteMateria = async (materiaId) => {
  try {
    const deletedRowCount = await Materia.destroy({
      where: { idMateria: materiaId },
    });

    if (deletedRowCount === 0) {
      throw new Error('Materia no encontrada');
    }

    return 'Materia eliminada con éxito';
  } catch (error) {
    throw new Error('Error al eliminar la materia');
  }
};
