const express = require('express');
const app = express();
const port = 3000;

// Instancia de Sequelize y entities
const sequelize = require('./config/database');
const Usuario = require('./entities/usuario');
const Maestro = require('./entities/maestro');
const Materia = require('./entities/materia');
const Alumno = require('./entities/alumno'); 
const AlumnoMateria = require('./entities/alumno_has_materias');

// Middleware para parsear JSON
app.use(express.json());

// Rutas
const routes = require('./routes/routes');
app.use('/', routes);

// Sincronizacion de los modelos con la base de datos
sequelize.sync()
  .then(() => {
    console.log('Tablas sincronizadas con la base de datos');
    // Inicia el servidor
    app.listen(port, () => {
      console.log(`Servidor en ejecución en el puerto ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error al sincronizar las tablas:', error);
  });
