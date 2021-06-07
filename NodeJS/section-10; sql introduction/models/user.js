const Sequelize = require('sequelize');

// importing the database connection pool
const sequelize = require('../util/database')

// defining the user model
const User = sequelize.define('user', {
    // attribute/fields of the model
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = User;