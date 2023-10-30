const Sequelize = require('sequelize')

// Conexão com banco de dados MySql
const sequelize = new Sequelize('comer_register', 'root', 'Gab090604', {
    host: "localhost",
    dialect: 'mysql'
  })

  module.exports = {
    Sequelize,
    sequelize
}