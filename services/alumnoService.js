// services/alumnoService.js
const Alumno = require('../entities/alumno');

// Función para crear un alumno
exports.createAlumno = async (alumnoData) => {
  try {
    const alumno = await Alumno.create(alumnoData);
    return alumno;
  } catch (error) {
    throw new Error('Error al crear un alumno');
  }
};

// Función para obtener todos los alumnos
exports.getAllAlumnos = async () => {
  try {
    const alumnos = await Alumno.findAll();
    return alumnos;
  } catch (error) {
    throw aError('Error al obtener los alumnos');
  }
};

// Función para obtener un alumno por ID
exports.getAlumnoById = async (alumnoId) => {
  try {
    const alumno = await Alumno.findByPk(alumnoId);

    if (!alumno) {
      throw new Error('Alumno no encontrado');
    }

    return alumno;
  } catch (error) {
    throw new Error('Error al obtener el alumno');
  }
};

// Función para actualizar un alumno
exports.updateAlumno = async (alumnoId, alumnoData) => {
  try {
    const [updatedRows] = await Alumno.update(alumnoData, {
      where: { idAlumno: alumnoId },
    });

    if (updatedRows === 0) {
      throw new Error('Alumno no encontrado');
    }

    return 'Alumno actualizado con éxito';
  } catch (error) {
    throw new Error('Error al actualizar el alumno');
  }
};

// Función para eliminar un alumno
exports.deleteAlumno = async (alumnoId) => {
  try {
    const deletedRowCount = await Alumno.destroy({
      where: { idAlumno: alumnoId },
    });

    if (deletedRowCount === 0) {
      throw new Error('Alumno no encontrado');
    }

    return 'Alumno eliminado con éxito';
  } catch (error) {
    throw new Error('Error al eliminar el alumno');
  }
};