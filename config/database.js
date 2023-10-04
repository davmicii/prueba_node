// database.js
const Sequelize = require('sequelize');

const sequelize = new Sequelize('EscuelaNode', 'sa', 'danvelmi1999', {
  host: 'localhost',
  dialect: 'mssql',
});

module.exports = sequelize;
