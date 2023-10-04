// services/alumno_materiaService.js
const AlumnoMateria = require('../entities/alumno_has_materias');

// Función para crear una relación Alumno_has_Materia
exports.createAlumnoMateria = async (alumnoMateriaData) => {
  try {
    const alumnoMateria = await AlumnoMateria.create(alumnoMateriaData);
    return alumnoMateria;
  } catch (error) {
    throw new Error('Error al crear una relación Alumno_has_Materia');
  }
};

// Función para obtener todas las relaciones Alumno_has_Materia
exports.getAllAlumnoMaterias = async () => {
  try {
    const alumnoMaterias = await AlumnoMateria.findAll();
    return alumnoMaterias;
  } catch (error) {
    throw new Error('Error al obtener las relaciones Alumno_has_Materia');
  }
};

// Función para obtener una relación Alumno_has_Materia por ID
exports.getAlumnoMateriaById = async (alumnoMateriaId) => {
  try {
    const alumnoMateria = await AlumnoMateria.findByPk(alumnoMateriaId);

    if (!alumnoMateria) {
      throw new Error('Relación Alumno_has_Materia no encontrada');
    }

    return alumnoMateria;
  } catch (error) {
    throw new Error('Error al obtener la relación Alumno_has_Materia');
  }
};

// Función para actualizar una relación Alumno_has_Materia
exports.updateAlumnoMateria = async (alumnoMateriaId, alumnoMateriaData) => {
  try {
    const [updatedRows] = await AlumnoMateria.update(alumnoMateriaData, {
      where: { idAlumno: alumnoMateriaId },
    });

    if (updatedRows === 0) {
      throw new Error('Relación Alumno_has_Materia no encontrada');
    }

    return 'Relación Alumno_has_Materia actualizada con éxito';
  } catch (error) {
    throw new Error('Error al actualizar la relación Alumno_has_Materia');
  }
};

// Función para eliminar una relación Alumno_has_Materia
exports.deleteAlumnoMateria = async (alumnoMateriaId) => {
  try {
    const deletedRowCount = await AlumnoMateria.destroy({
      where: { idAlumno: alumnoMateriaId },
    });

    if (deletedRowCount === 0) {
      throw new Error('Relación Alumno_has_Materia no encontrada');
    }

    return 'Relación Alumno_has_Materia eliminada con éxito';
  } catch (error) {
    throw new Error('Error al eliminar la relación Alumno_has_Materia');
  }
};