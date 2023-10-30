const db = require('./db')
const Sequelize = require('sequelize');


const User = db.sequelize.define('users', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    firstname: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    lastname: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    passoword: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    confirmpassword: {
        type: Sequelize.STRING,
        allowNull: false
    },

    // Tirar duvida com diogo depois
    gender: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});
 

module.exports = User;